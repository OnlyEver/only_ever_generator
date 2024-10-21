"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseClozeCard = void 0;
class ParseClozeCard {
    parse(data) {
        try {
            let displayTitle = this._generateClozeCardDisplayTitle(data.card_content.prompt, data.card_content.options);
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
            return this._validateCloze(clozeCardData);
        }
        catch (e) {
            return null;
        }
    }
    _generateClozeCardDisplayTitle(question, answers) {
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
    /// validate the cloze card
    // 1. Has Empty cloze
    // 2. has Duplicate Clozes
    // 3. doesnt have any valid option,
    // 4. Question length 320
    // 5. More than 6 options
    // 6. Less than 2 options
    // 7. Max character for individual cloze: 90
    _validateCloze(clozeCard) {
        var _a;
        let clozeRegex = /\{\{c(\d+):([^}]+)\}\}/g;
        try {
            /// validate emptu cloze
            let options = (_a = clozeCard.content.options) !== null && _a !== void 0 ? _a : [];
            let question = clozeCard.content.question;
            if (options.length < 2 || options.length > 6) {
                throw Error("Number of cloze options are invalid");
            }
            /// There are no correct clozes// or null cloze or empty cloze
            let correctOptions = options.find((e) => e.cloze != "null" && e.cloze != null && e.cloze.trim() != "");
            if (correctOptions) {
            }
            else {
                throw Error(" No valid clozes exists");
            }
            let rightClozes = options.filter((e) => e.cloze.startsWith("c"));
            /// matches our cloze syntax
            let clozeMatches = [...question.matchAll(clozeRegex)];
            if (clozeMatches.length == 0) {
                throw Error("Question Invalid");
            }
            else if (clozeMatches.length != rightClozes.length) {
                throw Error(" Clozes in question doesnt match to clozes in options");
            }
            return clozeCard;
        }
        catch (e) {
            return false;
        }
    }
}
exports.ParseClozeCard = ParseClozeCard;
