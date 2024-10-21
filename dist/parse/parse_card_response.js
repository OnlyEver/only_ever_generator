"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseCardResponse = void 0;
const logger_1 = require("../logger");
const parse_cloze_card_1 = require("./parse_card/parse_cloze_card");
const parse_match_card_1 = require("./parse_card/parse_match_card");
const parse_mcq_card_1 = require("./parse_card/parse_mcq_card");
class ParseCardResponse {
    parse(generatedData, isGapFill) {
        let usage_data = generatedData.metadata;
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
                        const mcqCard = new parse_mcq_card_1.ParseMcqCard().parse(elem);
                        if (mcqCard != null && mcqCard) {
                            cardData.push(mcqCard);
                        }
                    }
                    else if (elem.type == "cloze") {
                        const clozeCard = new parse_cloze_card_1.ParseClozeCard().parse(elem);
                        if (clozeCard && clozeCard != null) {
                            cardData.push(clozeCard);
                        }
                    }
                    else if (elem.type == "match") {
                        const matchCard = new parse_match_card_1.ParseMatchCard().parse(elem);
                        if (matchCard && matchCard != null) {
                            cardData.push(matchCard);
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
}
exports.ParseCardResponse = ParseCardResponse;
