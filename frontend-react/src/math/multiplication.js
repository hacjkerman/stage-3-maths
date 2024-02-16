import { difficulties } from "./difficulties.js";

export function generateMultQuestion(difficulty) {
  const num = difficulties[difficulty];
  const firstNum = Math.ceil(Math.random() * num + 1);
  const secondNum = Math.ceil(Math.random() * num + 1);
  const answer = firstNum * secondNum;
  return { firstNum, secondNum, answer };
}
