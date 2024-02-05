import { difficulties } from "./difficulties.js";
export async function generateDivQuestion(difficulty) {
  const num = difficulties[difficulty];
  // MAYBE MORE COMPLICATED THAN THIS
  // IF DOING WHOLE NUMBER DIVISION
  const firstNum = Math.ceil(Math.random() * num);
  let secondNum = Math.ceil(Math.random() * num + 1);
  secondNum = secondNum * firstNum;
  const answer = secondNum / firstNum;

  return { secondNum, firstNum, answer };
}

console.log(generateDivQuestion("easy"));
