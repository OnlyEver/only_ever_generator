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
const logger_1 = require("../logger");
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
                //return response;
                return this.parse(response, isGapFill, headings);
            }
            else {
                response.metadata.status = "failed";
                response.metadata.err_message = response.message;
                return response;
            }
        });
    }
    parse(generatedData, isGapFill, headings) {
        let usage_data = generatedData.metadata;
        const status_code = generatedData.status_code;
        try {
            const cardData = [];
            const unparsedTestCards = generatedData.generated_content.test_cards;
            const type = generatedData.type;
            if (unparsedTestCards !== undefined && unparsedTestCards.length != 0) {
                for (let elem of unparsedTestCards) {
                    if (elem.type == "flash") {
                        const flashCard = this.parseFlashCard(elem);
                        if (flashCard != null && flashCard) {
                            this.parseFlashCard(flashCard);
                        }
                    }
                    else if (elem.type == "mcq") {
                        const mcqCard = this.parseMcqCard(elem);
                        if (mcqCard != null && mcqCard) {
                            cardData.push(mcqCard);
                        }
                    }
                    else if (elem.type == "cloze") {
                        const clozeCard = this.parseClozeCard(elem);
                        if (clozeCard && clozeCard != null) {
                            cardData.push(this.parseClozeCard(clozeCard));
                        }
                    }
                    else if (elem.type == "match") {
                        const matchCard = this.parseMatchCard(elem);
                        if (matchCard && matchCard != null) {
                            cardData.push(this.parseMatchCard(matchCard));
                        }
                    }
                }
            }
            else {
                if (!isGapFill) {
                    usage_data.status = "failed";
                }
            }
            return {
                status_code: 200,
                metadata: usage_data,
                type: type,
                missing_concepts: [],
                missing_facts: [],
                cards_data: cardData,
            };
        }
        catch (e) {
            new logger_1.ErrorLogger({
                type: "card_parsing",
                data: e.message,
                response: generatedData,
            }).log();
            return {
                status_code: 500,
                metadata: usage_data,
                type: generatedData.type,
            };
        }
    }
    parseFlashCard(data) {
        try {
            let displayTitle = this.generateFlashCardDisplayTitle(data.card_content.front, data.card_content.back);
            let flashCardData = {
                type: {
                    category: "learning",
                    sub_type: data.type,
                },
                heading: data.card_reference,
                displayTitle: displayTitle,
                content: {
                    front_content: data.card_content.front,
                    back_content: data.card_content.back,
                },
                concepts: data.concepts,
                facts: data.facts,
                bloomLevel: data.bloom_level,
            };
            return flashCardData;
        }
        catch (e) {
            return null;
        }
    }
    generateFlashCardDisplayTitle(front, back) {
        return `${front} ---- ${back}`;
    }
    parseMcqCard(data) {
        try {
            let mcqAnswers = [];
            if (data.card_content.choices !== undefined &&
                data.card_content.choices.length != 0) {
                for (let choice of data.card_content.choices) {
                    let answer = {
                        answer: choice.choice,
                        is_correct: choice.is_correct,
                    };
                    mcqAnswers.push(answer);
                }
            }
            let displayTitle = this.generateMcqCardDisplayTitle(data.card_content.prompt, mcqAnswers);
            let mcqCard = {
                type: {
                    category: "learning",
                    sub_type: data.type,
                },
                heading: data.card_reference,
                displayTitle: displayTitle,
                content: {
                    question: data.card_content.prompt,
                    answers: mcqAnswers,
                },
                concepts: data.concepts,
                facts: data.facts,
                bloomLevel: data.bloom_level,
            };
            return mcqCard;
        }
        catch (e) {
            return null;
        }
    }
    generateMcqCardDisplayTitle(question, answers) {
        let answersString = [];
        if (answers.length != 0) {
            for (let option of answers) {
                let currentIndex = answers.indexOf(option) + 1;
                let temp = `${currentIndex} . ${option.answer} `;
                answersString.push(temp);
            }
            let resultString = answersString.join("");
            let finalDisplayTitle = `${question} ---- ${resultString}`;
            return finalDisplayTitle;
        }
        else {
            return question;
        }
    }
    parseClozeCard(data) {
        try {
            let displayTitle = this.generateClozeCardDisplayTitle(data.card_content.prompt, data.card_content.options);
            let clozeCardData = {
                type: {
                    category: "learning",
                    sub_type: data.type,
                },
                heading: data.card_reference,
                displayTitle: displayTitle,
                content: {
                    question: data.card_content.prompt,
                    options: data.card_content.options,
                },
                concepts: data.concepts,
                facts: data.facts,
                bloomLevel: data.bloom_level,
            };
            return clozeCardData;
        }
        catch (e) {
            return null;
        }
    }
    generateClozeCardDisplayTitle(question, answers) {
        let optionsString = "";
        if (answers.length !== 0) {
            optionsString = answers
                .map((item) => {
                if (item.option !== undefined) {
                    return item.option;
                }
                else {
                    return "";
                }
            })
                .join(", ");
        }
        return `${question} ---- ${optionsString}`;
    }
    parseMatchCard(cardData) {
        try {
            let content = cardData.card_content;
            let displayTitle = this.generateMatchCardDisplayTitle(content);
            let matchCard = {
                type: {
                    category: "learning",
                    sub_type: cardData.type,
                },
                heading: cardData.card_reference,
                content: content,
                //  content: cardData.card_content,
                displayTitle: displayTitle,
                concepts: cardData.concepts,
                facts: cardData.facts,
                bloomLevel: cardData.bloom_level,
            };
            return matchCard;
        }
        catch (e) {
            return null;
        }
    }
    generateMatchCardDisplayTitle(answers) {
        let titles = [];
        let counter = 65;
        for (let data of answers) {
            let value = data.right_item.join(",");
            let leftData = data.left_item;
            let letter = String.fromCharCode(counter);
            titles.push(`${letter}. ${leftData} -- ${value}`);
            counter++;
        }
        let displayTitle = titles.join(",");
        return displayTitle;
    }
}
exports.GenerateCards = GenerateCards;
