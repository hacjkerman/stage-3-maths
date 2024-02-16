import { divisionDifficulties } from "./difficulties.js";
export function generateDivQuestion(difficulty) {
  const num = divisionDifficulties[difficulty];
  // MAYBE MORE COMPLICATED THAN THIS
  // IF DOING WHOLE NUMBER DIVISION
  let firstNum = Math.ceil(Math.random() * num);
  let secondNum = Math.ceil(Math.random() * num + 1);
  secondNum = secondNum * firstNum;
  const answer = secondNum / firstNum;
  const temp = firstNum;
  firstNum = secondNum;
  secondNum = temp;

  return { firstNum, secondNum, answer };
}
