const questions = [];

const question1 = {
  category: "A",
  question: "What is blah?",
  choices: ["A", "B", "C"],
  answer: "A",
};

const question2 = {
  category: "A",
  question: "What is ocean?",
  choices: ["A", "B", "C"],
  answer: "A",
};

const question3 = {
  category: "A",
  question: "What is kite?",
  choices: ["A", "B", "C"],
  answer: "C",
};

const question4 = {
  category: "A",
  question: "What is blue?",
  choices: ["A", "B", "C"],
  answer: "B",
};

const question5 = {
  category: "A",
  question: "What is sky?",
  choices: ["A", "B", "C"],
  answer: "C",
};

questions.push(question1, question2, question3, question4, question5);

function getRandomQuestion(arr){
  const rando = Math.floor(Math.random() * arr.length);
  return arr[rando];
}

function getRandomComputerChoice(arr){
  const rando = Math.floor(Math.random() * arr.length);
  return arr[rando];
}

function getResults(randomQuestion, randomComputer){
  if(randomQuestion.answer === randomComputer){
    return "The computer's choice is correct!";
  }else{
    return `The computer's choice is wrong. The correct answer is: ${randomQuestion.answer}`;
  }
}