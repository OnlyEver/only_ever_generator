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
    headings: Array<any>
  ) {
    let response = await this.openAiService?.sendRequest(prompt, parsedContent);
    // console.log("response to card generation ", response);
    response["type"] = isGapFill ? "gap_fill" : "card_gen";
    response.metadata = {
      req_time: response.generated_at ?? new Date(),
      req_type: response.type,
      req_tokens: response.usage_data?.prompt_tokens,
      res_tokens: response.usage_data?.completion_tokens,
      model: this.openAiService.model,
    };
    if (response.status_code == 200) {
      response.metadata.status = "completed";
      let parseCard = new ParseCardResponse().parse(response,isGapFill);
      return parseCard;
    } else {
      response.metadata.status = "failed";
      response.metadata.err_message = response.message;
      return response;
    }
  }
}
