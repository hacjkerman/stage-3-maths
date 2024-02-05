import { difficulties } from "./difficulties";
export async function generateDivQuestion(difficulty) {
  const num = difficulties[difficulty];
  // MAYBE MORE COMPLICATED THAN THIS
  // IF DOING WHOLE NUMBER DIVISION
  const firstNum = Math.ceil(Math.random() * num);
  let secondNum = Math.ceil(Math.random() * num);
  while (firstNum % secondNum !== 0) {
    secondNum = Math.ceil(Math.random() * num);
  }
  const answer = firstNum / secondNum;

  return { firstNum, secondNum, answer };
}
