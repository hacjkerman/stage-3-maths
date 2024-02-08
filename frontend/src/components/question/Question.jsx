import { generateAddQuestion } from "../../math/addition.js";
import { generateMinQuestion } from "../../math/subtraction.js";
import { generateMultQuestion } from "../../math/multiplication.js";
import { generateDivQuestion } from "../../math/division.js";
const topics = {
  addition: { function: generateAddQuestion, operation: "+" },
  subtraction: { function: generateMinQuestion, operation: "-" },
  multiplication: { function: generateMultQuestion, operation: "*" },
  division: { function: generateDivQuestion, operation: "%" },
};
export default async function Question(topic, difficulty) {
  let questions = topics[topic].function(difficulty);
  let answer = questions.answer;
  let questionStr = null;
  if (questions !== undefined) {
    questionStr =
      questions.firstNum.toString() +
      " \n" +
      topics[topic].operation +
      " \n" +
      questions.secondNum.toString();
  }

  console.log(questionStr);
  return { questionStr, answer };
}
