import { ErrorLogger } from "../logger";
import { ParseCardResponse } from "../parse/parse_card_response";
import { OpenAiService } from "../services/open_ai_service";

export class GenerateCards {
  openAiService: OpenAiService;
  constructor(openAiService: OpenAiService) {
    this.openAiService = openAiService;
  }

  async generateCards(
    prompt: string,
    parsedContent: string,
    isGapFill: boolean,
    taxonomy: any
  ) {
    let response = await this.openAiService?.sendRequest(prompt, parsedContent);
    // console.log("response to card generation ", response);
    response["request_type"] = {
      type: "breadth",
      sub_type: isGapFill ? "gap_fill" : "card_gen",
      n: isGapFill ? 1 : 2,
      bloom_level: 1,
    };
    response.metadata = {
      req_time: response.generated_at ?? new Date(),
      req_type: response.request_type,
      req_tokens: response.usage_data?.prompt_tokens,
      res_tokens: response.usage_data?.completion_tokens,
      prompt_tokens_details: response.usage_data?.prompt_tokens_details,
      model: this.openAiService.model,
    };
    if (response.status_code == 200) {
      response.metadata.status = "completed";
      let parseCard = new ParseCardResponse().parse(
        response,
        isGapFill,
        taxonomy
      );
      return parseCard;
    } else {
      response.metadata.status = "failed";
      response.metadata.err_message = response.message;
      return response;
    }
  }
}
