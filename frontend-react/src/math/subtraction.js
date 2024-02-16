import { difficulties } from "./difficulties.js";
export function generateMinQuestion(difficulty) {
  const num = difficulties[difficulty];
  let firstNum = Math.ceil(Math.random() * num + 1);
  let secondNum = Math.ceil(Math.random() * num + 1);
  let answer;
  if (firstNum < secondNum) {
    let temp = firstNum;
    firstNum = secondNum;
    secondNum = temp;
  }
  answer = firstNum - secondNum;
  return { firstNum, secondNum, answer };
}
