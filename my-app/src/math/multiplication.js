import { difficulties } from "./difficulties";

export async function generateMultQuestion(difficulty) {
  const num = difficulties[difficulty];
  const firstNum = Math.ceil(Math.random() * num);
  const secondNum = Math.ceil(Math.random() * num);
  const answer = firstNum * secondNum;
  return { firstNum, secondNum, answer };
}
