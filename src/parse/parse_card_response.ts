import { ErrorLogger } from "../logger";
import { ParseClozeCard } from "./parse_card/parse_cloze_card";
import { ParseFlashCard } from "./parse_card/parse_flash_cards";
import { ParseMatchCard } from "./parse_card/parse_match_card";
import { ParseMcqCard } from "./parse_card/parse_mcq_card";

export class ParseCardResponse {
  parse(generatedData: any, isGapFill: boolean, sourceTaxonomy: any) {
    let usage_data = generatedData.metadata;
    try {
      const cardData = [];
      const unparsedTestCards = generatedData.generated_content.test_cards;
      const type = generatedData.type;
      if (unparsedTestCards !== undefined && unparsedTestCards.length != 0) {
        for (let elem of unparsedTestCards) {
          if (elem.type == "flash") {
            const flashCard = new ParseFlashCard().parse(elem);
            if (flashCard != null && flashCard) {
              flashCard.heading = this._getCardReference(
                flashCard,
                sourceTaxonomy
              );
              cardData.push(flashCard);
            }
          } else if (elem.type == "mcq") {
            const mcqCard = new ParseMcqCard().parse(elem);
            if (mcqCard != null && mcqCard) {
              mcqCard.heading = this._getCardReference(mcqCard, sourceTaxonomy);
              cardData.push(mcqCard);
            }
          } else if (elem.type == "cloze") {
            const clozeCard = new ParseClozeCard().parse(elem);
            if (clozeCard && clozeCard != null) {
              clozeCard.heading = this._getCardReference(
                clozeCard,
                sourceTaxonomy
              );
              cardData.push(clozeCard);
            }
          } else if (elem.type == "match") {
            const matchCard = new ParseMatchCard().parse(elem);
            if (matchCard && matchCard != null) {
              matchCard.heading = this._getCardReference(
                matchCard,
                sourceTaxonomy
              );
              cardData.push(matchCard);
            }
          }
        }
      } else {
        if (!isGapFill) {
          usage_data.status = "failed";
        }
      }
      if (cardData.length == 0) {
        usage_data.status = "failed";
      }

      return {
        status_code: cardData.length == 0 ? 400 : 200,
        metadata: usage_data,
        type: type,
        missing_concepts: [],
        missing_facts: [],
        cards_data: cardData,
      };
    } catch (e: any) {
      new ErrorLogger({
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

  _getCardReference(generatedCardData: any, sourceTaxonomy: any) {
    const cardConcepts = generatedCardData.concepts ?? [];
    const cardFacts = generatedCardData.facts ?? [];
    const combinedCardFactsAndConcepts = [...cardConcepts, ...cardFacts];

    const sourceConcepts = sourceTaxonomy.concepts ?? [];
    const sourceFacts = sourceTaxonomy.facts ?? [];

    const mappedSourceConcepts = sourceConcepts.map((elem: any) => {
      return {
        text: elem.concept_text,
        reference: elem.reference,
      };
    });
    const mappedSourceFacts = sourceFacts.map((elem: any) => {
      return {
        text: elem.fact_text,
        reference: elem.reference,
      };
    });

    const compinedConceptsAndFacts = [
      ...mappedSourceConcepts,
      ...mappedSourceFacts,
    ];
    const firstMatchedConcept = compinedConceptsAndFacts.find((elem: any) =>
      combinedCardFactsAndConcepts.includes(elem.text)
    );

    if (firstMatchedConcept) {
      return firstMatchedConcept.reference;
    } else {
      return "";
    }
  }
}
