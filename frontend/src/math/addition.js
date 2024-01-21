export async function generateAddQuestion() {
  const firstNum = Math.floor(Math.random() * 100);
  const secondNum = Math.floor(Math.random() * 100);
  const answer = firstNum + secondNum;
  return [firstNum, secondNum, answer];
}
