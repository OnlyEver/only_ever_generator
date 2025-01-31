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
exports.GenerateTypology = void 0;
const logger_1 = require("../logger");
class GenerateTypology {
    constructor(openAiService, prompt, content, expected_fields) {
        this.prompt = "";
        this.content = "";
        this.openAiService = openAiService;
        this.prompt = prompt;
        this.content = content;
        this.expectedFields = expected_fields.map((elem) => elem.toLowerCase());
    }
    generate() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e;
            try {
                const response = yield ((_a = this.openAiService) === null || _a === void 0 ? void 0 : _a.sendRequest(this.prompt, this.content));
                response["request_type"] = {
                    type: "breadth",
                    n: 1,
                };
                response.metadata = {
                    req_time: (_b = response.generated_at) !== null && _b !== void 0 ? _b : new Date(),
                    req_type: {
                        type: "breadth",
                        n: 1,
                    },
                    req_tokens: (_c = response.usage_data) === null || _c === void 0 ? void 0 : _c.prompt_tokens,
                    res_tokens: (_d = response.usage_data) === null || _d === void 0 ? void 0 : _d.completion_tokens,
                    prompt_tokens_details: (_e = response.usage_data) === null || _e === void 0 ? void 0 : _e.prompt_tokens_details,
                    model: this.openAiService.model,
                };
                if (response.status_code == 200) {
                    return this.parseTypologyOnSuccess(response);
                }
                else {
                    response.metadata.err_message = response.message;
                    return response;
                }
            }
            catch (e) {
                yield new logger_1.ErrorLogger({
                    type: "typology_parsing",
                    data: e.message,
                }).log();
            }
        });
    }
    parseTypologyOnSuccess(responseData) {
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
    parseFields(fields) {
        const fieldKeys = ["primary_field", "secondary_field", "tertiary_field"];
        return fields.slice(0, 3).map((item, index) => ({
            [fieldKeys[index]]: item,
            reconcile: !this.expectedFields.includes(item.toLowerCase()),
        }));
    }
    parseTypologyOnFailure(responseData) {
        return __awaiter(this, void 0, void 0, function* () {
            responseData.metadata.status = "failed";
            return {
                status_code: responseData.status_code,
                metadata: responseData.metadata,
            };
        });
    }
}
exports.GenerateTypology = GenerateTypology;
