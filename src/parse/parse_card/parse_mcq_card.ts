export class ParseMcqCard {
  parse(data: any) {
    try {
      let mcqAnswers = [];
      if (
        data.card_content.choices !== undefined &&
        data.card_content.choices.length != 0
      ) {
        for (let choice of data.card_content.choices) {
          let answer = {
            answer: choice.choice,
            is_correct: choice.is_correct,
          };
          mcqAnswers.push(answer);
        }
      }

      let displayTitle = this._generateMcqCardDisplayTitle(
        data.card_content.prompt,
        mcqAnswers
      );
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
    } catch (e) {
      return null;
    }
  }

  _generateMcqCardDisplayTitle(question: string, answers: any) {
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
    } else {
      return question;
    }
  }
}
