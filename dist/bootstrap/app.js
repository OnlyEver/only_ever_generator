"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlyEverGenerator = void 0;
const generate_cards_1 = require("../card_gen/generate_cards");
const parse_source_content_1 = require("../parse/parse_source_content");
const open_ai_service_1 = require("../services/open_ai_service");
// import { returnCardGenPrompt } from "../constants/prompts/card_gen_prompt";
// import { returnTypologyPrompt } from "../constants/prompts/typology_prompt";
const generate_typology_1 = require("../typology_gen/generate_typology");
const generate_args_1 = require("../utils/generate_args");
const calculate_gap_fill_1 = require("../gap_fill/calculate_gap_fill");
/// OnlyEverGenerator
class OnlyEverGenerator {
    constructor(apiKey, model, generationContent) {
        this.api_key = "";
        /// these fields will be populated inside the constructor
        this.parsedContent = {};
        this.promptForTypology = "";
        this.promptForCardGen = "";
        this.typologyResponse = undefined;
        this.cardgenResponse = undefined;
        this.summarizeResponse = {};
        this.gapFillResponse = {};
        this.api_key = apiKey;
        this.openAiService = new open_ai_service_1.OpenAiService(apiKey, model !== null && model !== void 0 ? model : "gpt-3.5-turbo-1106");
        const parsedData = new parse_source_content_1.ParseSourceContent(generationContent.content).parseData();
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
    generate() {
        return __awaiter(this, arguments, void 0, function* (generate_typology = false, generate_card = false) {
            let args = new generate_args_1.GenerateArgs(generate_card, generate_typology, false);
            const responseToReturn = [];
            const whatNeedsToBeGenerated = args.getWhatNeedsToBeGenerated();
            for (let elem of whatNeedsToBeGenerated)
                if (elem == "generate_tyopology") {
                    this.typologyResponse = yield this.generateTypology(this.promptForTypology);
                    responseToReturn.push(this.typologyResponse);
                }
                else if (elem == "generate_card") {
                    /// for cards gen to occur, there must be presence of source taxonomy
                    if (this.shouldTheCardBeGeneratedAfterTypologyResponse()) {
                        this.parsedContent.taxonomy = {
                            concepts: this.typologyResponse.concepts,
                            facts: this.typologyResponse.facts,
                            generate_cards: this.typologyResponse.generate_cards,
                        };
                        this.cardgenResponse = yield this.generateCard(this.promptForCardGen, JSON.stringify(this.typologyResponse), false);
                        responseToReturn.push(this.cardgenResponse);
                        /// check if gap fill is required ie coverage determination
                        if (this.cardgenResponse.status_code == 200) {
                            this.gapFillResponse = yield this._generationForGapFill(this.typologyResponse, this.cardgenResponse);
                            responseToReturn.push(this.gapFillResponse);
                        }
                    }
                }
            return responseToReturn;
            // return [typologyPrompt, cardPrompt];
        });
    }
    shouldTheCardBeGeneratedAfterTypologyResponse() {
        var _a, _b;
        if (this.typologyResponse) {
            return ((_b = (_a = this.typologyResponse) === null || _a === void 0 ? void 0 : _a.generate_cards) === null || _b === void 0 ? void 0 : _b.state) == true;
        }
        else {
            return false;
        }
    }
    _generationForGapFill(typologyData, cardGenData) {
        return __awaiter(this, void 0, void 0, function* () {
            let gapFill = (0, calculate_gap_fill_1.gapFilling)(typologyData, cardGenData);
            let response;
            if (gapFill.remainingConcepts.length !== 0 ||
                gapFill.remainingFacts.length !== 0) {
                this.typologyResponse.facts = gapFill.remainingFacts;
                this.typologyResponse.concepts = gapFill.remainingConcepts;
                response = yield this.generateCard(this.promptForCardGen +
                    "Generate cards only suitable for the given remaining concepts and facts" +
                    JSON.stringify(gapFill), "", true, 1);
            }
            return response;
        });
    }
    generateCard(prompt_1, additionalContent_1, isGapFill_1) {
        return __awaiter(this, arguments, void 0, function* (prompt, additionalContent, isGapFill, n = 0) {
            let generateCardsResp = yield new generate_cards_1.GenerateCards(this.openAiService).generateCards(prompt !== null && prompt !== void 0 ? prompt : "", JSON.stringify(this.parsedContent) + additionalContent, isGapFill, this.parsedContent.taxonomy, n);
            // let response =  await this.openAiService?.sendRequest(prompt,this.parsedContent);
            // response['type'] = 'card_gen';
            return generateCardsResp;
        });
    }
    generateTypology(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield new generate_typology_1.GenerateTypology(this.openAiService, prompt, JSON.stringify(this.parsedContent), this.expectedFields).generate();
            return response;
        });
    }
    gapFill(factsMaps_1, aiCards_1) {
        return __awaiter(this, arguments, void 0, function* (factsMaps, aiCards, n = 0) {
            /// factsmap
            /// {
            /// remaining_facts: [],
            /// remaining_concepts: [],
            //}
            /// aicards is data
            let response;
            response = yield this.generateCard(this.promptForCardGen +
                "Generate cards only suitable for the given remaining concepts and facts" +
                JSON.stringify(factsMaps) +
                "Exclude generating  cards with content in the following", JSON.stringify(aiCards), true, n);
            return response;
        });
    }
}
exports.OnlyEverGenerator = OnlyEverGenerator;
