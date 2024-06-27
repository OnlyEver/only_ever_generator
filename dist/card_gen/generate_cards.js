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
    generateCards(prompt, parsedContent, isGapFill) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            let response = yield ((_a = this.openAiService) === null || _a === void 0 ? void 0 : _a.sendRequest(prompt, parsedContent));
            // console.log("response to card generation ", response);
            response["type"] = isGapFill ? "gap_fill" : "card_gen";
            response.metadata = {
                "req_time": response.generated_at,
                "req_type": response.type,
                "req_tokens": (_b = response.usage_data) === null || _b === void 0 ? void 0 : _b.prompt_tokens,
                "res_tokens": (_c = response.usage_data) === null || _c === void 0 ? void 0 : _c.completion_tokens,
                // "created_at":response.created_at,
            };
            if (response.status_code == 200) {
                response.metadata.status = "completed";
                //return response;
                return this.parse(response, isGapFill);
            }
            else {
                response.metadata.status = "failed";
                return response;
            }
        });
    }
    parse(generatedData, isGapFill) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cardData = [];
                let usage_data = generatedData.metadata;
                const status_code = generatedData.status_code;
                const missing_concepts = generatedData.generated_content.missing_concepts;
                const missing_facts = generatedData.generated_content.missing_facts;
                const unparsedTestCards = generatedData.generated_content.test_cards;
                const type = generatedData.type;
                if (unparsedTestCards !== undefined && unparsedTestCards.length != 0) {
                    for (let elem of unparsedTestCards) {
                        if (elem.type == "flash") {
                            cardData.push(this.parseFlashCard(elem));
                        }
                        else if (elem.type == "mcq") {
                            cardData.push(this.parseMcqCard(elem));
                        }
                        else if (elem.type == "cloze") {
                            cardData.push(this.parseClozeCard(elem));
                        }
                        else if (elem.type == "match") {
                            cardData.push(this.parseMatchCard(elem));
                        }
                    }
                }
                else {
                    if (!isGapFill) {
                        usage_data.status = "failed";
                    }
                }
                return {
                    status_code: status_code,
                    metadata: usage_data,
                    type: type,
                    missing_concepts: missing_concepts,
                    missing_facts: missing_facts,
                    cards_data: cardData,
                };
            }
            catch (e) {
                yield new logger_1.ErrorLogger({
                    "type": 'card_parsing',
                    "data": e.message,
                }).log();
                return {
                    status_code: 500,
                };
            }
        });
    }
    parseFlashCard(data) {
        let displayTitle = this.generateFlashCardDisplayTitle(data.card_content.front, data.card_content.back);
        let flashCardData = {
            type: {
                category: 'learning',
                sub_type: data.type,
            },
            heading: data.card_reference,
            displayTitle: displayTitle,
            content: {
                front_content: data.sard_content.front,
                back_content: data.sard_content.back,
            },
            concepts: data.concepts,
            facts: data.facts,
            bloomLevel: data.bloom_level,
        };
        return flashCardData;
    }
    generateFlashCardDisplayTitle(front, back) {
        return `${front} ---- ${back}`;
    }
    parseMcqCard(data) {
        let mcqAnswers = [];
        if (data.card_content.choices !== undefined && data.card_content.choices.length != 0) {
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
                category: 'learning',
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
        let displayTitle = this.generateClozeCardDisplayTitle(data.card_content.text, data.card_content.options);
        let clozeCardData = {
            type: {
                category: 'learning',
                sub_type: data.type,
            },
            heading: data.card_reference,
            displayTitle: displayTitle,
            content: {
                question: data.card_content.text,
                options: data.card_content.options,
            },
            concepts: data.concepts,
            facts: data.facts,
            bloomLevel: data.bloom_level,
        };
        return clozeCardData;
    }
    generateClozeCardDisplayTitle(question, answers) {
        let optionsString = '';
        if (answers.length !== 0) {
            optionsString = answers
                .map((item) => {
                if (item.option !== undefined) {
                    return item.option;
                }
                else {
                    return '';
                }
            })
                .join(", ");
        }
        return `${question} ---- ${optionsString}`;
    }
    parseMatchCard(cardData) {
        let data = cardData.card_content;
        const transformedData = {};
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                transformedData[key] = [data[key]];
                //     let value = data[key].replace(/[\[\]]/g, '');
                //  let items = data[key].split(',').map((item: string) => item.trim());
                //     map.set(key, items);
                //   }
            }
            let displayTitle = this.generateMatchCardDisplayTitle(transformedData);
            let matchCard = {
                type: {
                    category: 'learning',
                    sub_type: data.type,
                },
                heading: cardData.card_reference,
                content: transformedData,
                //  content: cardData.card_content,
                displayTitle: displayTitle,
                concepts: cardData.concepts,
                facts: cardData.facts,
                bloomLevel: cardData.bloom_level,
            };
            return matchCard;
        }
    }
    generateMatchCardDisplayTitle(answers) {
        let titles = [];
        let counter = 65;
        for (let key in answers) {
            if (answers.hasOwnProperty(key)) {
                let value = answers[key];
                //     let items = value.split(',').map((item: string) => item.trim());
                //     items.forEach((item: any) => {
                let letter = String.fromCharCode(counter);
                titles.push(`${letter}. ${key} -- ${value}`);
                counter++;
                //     });
            }
        }
        let displayTitle = titles.join(",");
        return displayTitle;
    }
}
exports.GenerateCards = GenerateCards;
