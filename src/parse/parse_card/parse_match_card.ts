export class ParseMatchCard {
  parse(cardData: any) {
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
    } catch (e) {
      return null;
    }
  }

  generateMatchCardDisplayTitle(answers: any) {
    let titles: string[] = [];
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
