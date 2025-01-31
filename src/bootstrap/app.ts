import { GenerateCards } from "../card_gen/generate_cards";
import { ParseSourceContent } from "../parse/parse_source_content";
import { OpenAiService } from "../services/open_ai_service";
// import { returnCardGenPrompt } from "../constants/prompts/card_gen_prompt";
// import { returnTypologyPrompt } from "../constants/prompts/typology_prompt";
import { GenerateTypology } from "../typology_gen/generate_typology";
import { GenerateArgs } from "../utils/generate_args";
import { gapFilling } from "../gap_fill/calculate_gap_fill";

/// OnlyEverGenerator

export class OnlyEverGenerator {
  public api_key: string = "";
  public openAiService: OpenAiService;

  /// these fields will be populated inside the constructor
  parsedContent: any = {};
  promptForTypology: string = "";
  promptForCardGen: string = "";
  expectedFields: Array<string>;

  typologyResponse: any = undefined;
  cardgenResponse: any = undefined;
  summarizeResponse = {};
  gapFillResponse: any = {};

  constructor(apiKey: string, model: string, generationContent: any) {
    this.api_key = apiKey;
    this.openAiService = new OpenAiService(
      apiKey,
      model ?? "gpt-3.5-turbo-1106"
    );
    const parsedData = new ParseSourceContent(
      generationContent.content
    ).parseData();
    (this.parsedContent = {
      title: parsedData.title,
      headings: parsedData.headings,
      content: parsedData.content,
      taxonomy: parsedData.taxonomy,
    }),
      // parsedData.type == 'cards' ? this.typologyResponse = parsedData.taxonomy :  this.typologyResponse = null;
      (this.typologyResponse = generationContent.content.taxonomy);

    this.expectedFields = generationContent.content.fields; //returnFields();
    this.promptForTypology = generationContent.prompt.typology;
    this.promptForCardGen = generationContent.prompt.card_generation;
  }

  async generate(
    generate_typology: boolean = false,
    generate_card: boolean = false
  ): Promise<Array<any>> {
    let args = new GenerateArgs(generate_card, generate_typology, false);
    const responseToReturn = [];
    const whatNeedsToBeGenerated = args.getWhatNeedsToBeGenerated();
    for (let elem of whatNeedsToBeGenerated)
      if (elem == "generate_tyopology") {
        this.typologyResponse = await this.generateTypology(
          this.promptForTypology
        );
        responseToReturn.push(this.typologyResponse);
      } else if (elem == "generate_card") {
        /// for cards gen to occur, there must be presence of source taxonomy
        if (this.shouldTheCardBeGeneratedAfterTypologyResponse()) {
          this.parsedContent.taxonomy = {
            concepts: this.typologyResponse.concepts,
            facts: this.typologyResponse.facts,
            generate_cards: this.typologyResponse.generate_cards,
          };
          this.cardgenResponse = await this.generateCard(
            this.promptForCardGen,
            JSON.stringify(this.typologyResponse),
            false
          );
          responseToReturn.push(this.cardgenResponse);

          /// check if gap fill is required ie coverage determination
          if (this.cardgenResponse.status_code == 200) {
            this.gapFillResponse = await this._generationForGapFill(
              this.typologyResponse,
              this.cardgenResponse
            );
            responseToReturn.push(this.gapFillResponse);
          }
        }
      }
    return responseToReturn;
    // return [typologyPrompt, cardPrompt];
  }

  shouldTheCardBeGeneratedAfterTypologyResponse() {
    if (this.typologyResponse) {
      return this.typologyResponse?.generate_cards?.state == true;
    } else {
      return false;
    }
  }

  async _generationForGapFill(typologyData: any, cardGenData: any,) {
    let gapFill = gapFilling(typologyData, cardGenData);
    let response: any;
    if (
      gapFill.remainingConcepts.length !== 0 ||
      gapFill.remainingFacts.length !== 0
    ) {
      this.typologyResponse.facts = gapFill.remainingFacts;
      this.typologyResponse.concepts = gapFill.remainingConcepts;
      response = await this.generateCard(
        this.promptForCardGen +
        "Generate cards only suitable for the given remaining concepts and facts" +
        JSON.stringify(gapFill),

        "",
        true,
        1,
      );
    }
    return response;
  }

  async generateCard(
    prompt: string,
    additionalContent: string,
    isGapFill: boolean,
    n: number = 0,
  ) {
    let generateCardsResp = await new GenerateCards(
      this.openAiService
    ).generateCards(
      prompt ?? "",
      JSON.stringify(this.parsedContent) + additionalContent,
      isGapFill,
      this.parsedContent.taxonomy, n,
    );

    // let response =  await this.openAiService?.sendRequest(prompt,this.parsedContent);
    // response['type'] = 'card_gen';
    return generateCardsResp;
  }

  async generateTypology(prompt: string) {
    let response = await new GenerateTypology(
      this.openAiService,
      prompt,
      JSON.stringify(this.parsedContent),
      this.expectedFields
    ).generate();
    return response;
  }

  async gapFill(factsMaps: any, aiCards: Array<any>, n: number = 0) {
    /// factsmap
    /// {
    /// remaining_facts: [],
    /// remaining_concepts: [],
    //}

    /// aicards is data
    let response: any;

    response = await this.generateCard(
      this.promptForCardGen +
      "Generate cards only suitable for the given remaining concepts and facts" +
      JSON.stringify(factsMaps) +
      "Exclude generating  cards with content in the following",
      JSON.stringify(aiCards),
      true,
      n,
    );

    return response;
  }
}
