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
    generateCards(prompt, parsedContent, isGapFill, headings) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            let response = yield ((_a = this.openAiService) === null || _a === void 0 ? void 0 : _a.sendRequest(prompt, parsedContent));
            // console.log("response to card generation ", response);
            response["type"] = isGapFill ? "gap_fill" : "card_gen";
            response.metadata = {
                req_time: (_b = response.generated_at) !== null && _b !== void 0 ? _b : new Date(),
                req_type: response.type,
                req_tokens: (_c = response.usage_data) === null || _c === void 0 ? void 0 : _c.prompt_tokens,
                res_tokens: (_d = response.usage_data) === null || _d === void 0 ? void 0 : _d.completion_tokens,
                model: this.openAiService.model,
            };
            if (response.status_code == 200) {
                response.metadata.status = "completed";
                let parseCard = new parse_card_response_1.ParseCardResponse().parse(response, isGapFill);
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
