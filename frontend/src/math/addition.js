import { difficulties } from "./difficulties";
export async function generateAddQuestion(difficulty) {
  const num = difficulties[difficulty];
  const firstNum = Math.ceil(Math.random() * num + 1);
  const secondNum = Math.ceil(Math.random() * num + 1);
  const answer = Number(firstNum) + Number(secondNum);
  return { firstNum, secondNum, answer };
}
