import { OpenAiService } from "../services/open_ai_service";
import { returnTypologyData } from "../parse/response_format_typology";
import { ErrorLogger } from "../logger";

export class GenerateTypology {
  public openAiService: OpenAiService;
  public prompt: string = "";
  public content: string = "";
  expectedFields: Array<string>;
  constructor(
    openAiService: OpenAiService,
    prompt: string,
    content: string,
    expected_fields: Array<string>
  ) {
    this.openAiService = openAiService;
    this.prompt = prompt;
    this.content = content;
    this.expectedFields = expected_fields.map((elem: string) =>
      elem.toLowerCase()
    );
  }
  async generate() {
    try {
      const response = await this.openAiService?.sendRequest(
        this.prompt,
        this.content
      );
      response["request_type"] = {
        type: "breadth",
        n: 1,
      };
      response.metadata = {
        req_time: response.generated_at ?? new Date(),
        req_type: {
          type: "breadth",
          n: 1,
        },
        req_tokens: response.usage_data?.prompt_tokens,
        res_tokens: response.usage_data?.completion_tokens,
        prompt_tokens_details: response.usage_data?.prompt_tokens_details,
        model: this.openAiService.model,
      };
      if (response.status_code == 200) {
        return this.parseTypologyOnSuccess(response);
      } else {
        response.metadata.err_message = response.message;
        return response;
      }
    } catch (e: any) {
      await new ErrorLogger({
        type: "typology_parsing",
        data: e.message,
      }).log();
    }
  }

  parseTypologyOnSuccess(responseData: any) {
    responseData.metadata.status = "completed";
    const generatedContent = responseData.generated_content;
    return {
      status_code: 200,
      metadata: responseData.metadata,
      field: this.parseFields(generatedContent.field),
      concepts: generatedContent.concepts,
      facts: generatedContent.facts,
      generate_cards: generatedContent.generate_cards,
      summary_cards: generatedContent.summary_cards,
      // type: responseData.type,
    };
  }

  parseFields(fields: Array<string>) {
    const fieldKeys = ["primary_field", "secondary_field", "tertiary_field"];
    return fields.slice(0, 3).map((item, index) => ({
      [fieldKeys[index]]: item,
      reconcile: !this.expectedFields.includes(item.toLowerCase()),
    }));
  }

  async parseTypologyOnFailure(responseData: any) {
    responseData.metadata.status = "failed";

    return {
      status_code: responseData.status_code,
      metadata: responseData.metadata,
    };
  }
}
