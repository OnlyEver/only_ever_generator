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
exports.GenerateCards = void 0;
const parse_card_response_1 = require("../parse/parse_card_response");
class GenerateCards {
    constructor(openAiService) {
        this.openAiService = openAiService;
    }
    generateCards(prompt_1, parsedContent_1, isGapFill_1, taxonomy_1) {
        return __awaiter(this, arguments, void 0, function* (prompt, parsedContent, isGapFill, taxonomy, n = 0) {
            var _a, _b, _c, _d, _e;
            let response = yield ((_a = this.openAiService) === null || _a === void 0 ? void 0 : _a.sendRequest(prompt, parsedContent));
            var updatedNumber = n + 1;
            // console.log("response to card generation ", response);
            // response["request_type"] = ;
            response.metadata = {
                req_time: (_b = response.generated_at) !== null && _b !== void 0 ? _b : new Date(),
                req_type: {
                    type: "depth",
                    n: updatedNumber,
                    bloom_level: 1,
                },
                req_tokens: (_c = response.usage_data) === null || _c === void 0 ? void 0 : _c.prompt_tokens,
                res_tokens: (_d = response.usage_data) === null || _d === void 0 ? void 0 : _d.completion_tokens,
                prompt_tokens_details: (_e = response.usage_data) === null || _e === void 0 ? void 0 : _e.prompt_tokens_details,
                model: this.openAiService.model,
            };
            if (response.status_code == 200) {
                response.metadata.status = "completed";
                let parseCard = new parse_card_response_1.ParseCardResponse().parse(response, isGapFill, taxonomy);
                return parseCard;
            }
            else {
                response.metadata.status = "failed";
                response.metadata.err_message = response.message;
                return response;
            }
        });
    }
}
exports.GenerateCards = GenerateCards;
