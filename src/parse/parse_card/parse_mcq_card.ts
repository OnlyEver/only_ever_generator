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
      //   return mcqCard;
      const isValid = this._validate(mcqCard);
      if (isValid == true) {
        return mcqCard;
      } else {
        return null;
      }
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

  /// validate mcq card
  // 1. Check if atleast 1 correct answer exists
  // 2. Length of answer shouldnt exceed  24 chars
  // 3. Length of question shouldnt exceed 90 chars
  // 4. If Any option is Empty
  _validate(mcqCard: any) {
    try {
      let isQuestionValid = mcqCard.content.question.length <= 90;
      if (isQuestionValid) {
        throw new Error("Question length exceeded");
      }

      /// check if all are wrong answers
      let exists = this._checkIfAllAnswersAreWrong(mcqCard.content.answers);
      if (exists) {
      } else {
        throw new Error("Every answers are wrong");
      }

      /// check if answers are of length <40 or is 0
      let answerWhoseLengthisGreaterThan40or0 = (
        mcqCard.content.answers ?? []
      ).find((e: any) => e.answer.length == 0 || e.answer.length > 40);
      if (answerWhoseLengthisGreaterThan40or0) {
        throw new Error("Option has length more than 40 or is Empty");
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  _checkIfAllAnswersAreWrong(answers: any[]) {
    let rightAnswer = answers.find((e) => e.is_corect == true);
    if (rightAnswer) {
      return true;
    } else {
      return false;
    }
  }
}
