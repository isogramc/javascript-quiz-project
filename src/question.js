class Question {
  // YOUR CODE HERE:
  //
  // 1. constructor (text, choices, answer, difficulty)
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = this.shuffleChoices(choices);
    this.answer = answer;
    this.difficulty = difficulty;
  }
  // 2. shuffleChoices()
  shuffleChoices(choices){
    let shuffled = choices
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
   
    console.log(choices);
  }
}
