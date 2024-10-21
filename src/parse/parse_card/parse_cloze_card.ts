export class ParseClozeCard{
    parse(data: any) {
        try {
          let displayTitle = this.generateClozeCardDisplayTitle(
            data.card_content.prompt,
            data.card_content.options
          );
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
        } catch (e) {
          return null;
        }
      }
    
      generateClozeCardDisplayTitle(question: string, answers: Array<any>) {
        let optionsString = "";
        if (answers.length !== 0) {
          optionsString = answers
            .map((item: { option: any }) => {
              if (item.option !== undefined) {
                return item.option;
              } else {
                return "";
              }
            })
            .join(", ");
        }
    
        return `${question} ---- ${optionsString}`;
      }
}