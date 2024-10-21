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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlyEverGenerator = void 0;
const express_1 = __importDefault(require("express"));
const source_data_1 = require("./constants/source_data");
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
const port = 3000;
const app_1 = require("./bootstrap/app");
Object.defineProperty(exports, "OnlyEverGenerator", { enumerable: true, get: function () { return app_1.OnlyEverGenerator; } });
const prompt_data_1 = require("./constants/prompt_data");
const parse_card_response_1 = require("./parse/parse_card_response");
// //. All the Codes Below uses express and are strictly for development purpose, while publishing the package, comment everything
// //below this line
let oeGen = new app_1.OnlyEverGenerator(config_1.default.openAIKey, "gpt-4o", {
    prompt: (0, prompt_data_1.returnPromptData)(),
    content: (0, source_data_1.returnSourceData)(),
});
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // let data = oeGen.returnParsedContent();
    // let parsedData = parseResponse()
    let cardPrompt = "";
    res.send(cardPrompt);
}));
app.get("/openAI", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // let prompt = returnPromt();
    // let prompt = returnCardGenPrompt();
    //   let content = returnSourceData().toString()
    //   let headings = returnHeadings();
    //   // let aiRequest = await openAIRequest(prompt,content);
    let aiRequest = yield oeGen.generate(true, true);
    res.send(aiRequest);
}));
app.get("/parseCardData", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    let cardResp = (0, source_data_1.returnCardResponse)();
    let headings = (0, source_data_1.returnHeadings)();
    cardResp.metadata = {
        "req_time": (_a = cardResp.generated_at) !== null && _a !== void 0 ? _a : new Date(),
        "req_type": "card",
        "req_tokens": (_b = cardResp.usage_data) === null || _b === void 0 ? void 0 : _b.prompt_tokens,
        "res_tokens": (_c = cardResp.usage_data) === null || _c === void 0 ? void 0 : _c.completion_tokens,
        "model": '40-mini'
    };
    let parsedData = new parse_card_response_1.ParseCardResponse().parse(cardResp, false);
    res.send(parsedData);
}));
// app.get("/typology", async (req, res) => {
//   {
//     let typologyPrompt = returnTypologyPrompt();
//     let cardPrompt = returnCardGenPrompt();
//     let args = new GenerateArgs(
//       true,
//       true,
//       false,
//        {
//         typology_prompt: typologyPrompt,
//         card_gen_prompt: cardPrompt,
//         summary_prompt: "",
//       }
//     )
//     let typologyRequest = await oeGen.generate(false, true);
//     res.send(typologyRequest);
//   }
// });
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
