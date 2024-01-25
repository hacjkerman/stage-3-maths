export async function generateDivQuestion() {
  // MAYBE MORE COMPLICATED THAN THIS
  // IF DOING WHOLE NUMBER DIVISION
  const firstNum = Math.floor(Math.random() * 100);
  const secondNum = Math.floor(Math.random() * 100);
  const answer = firstNum / secondNum;

  return { firstNum, secondNum, answer };
}
