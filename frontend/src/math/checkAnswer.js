export async function checkAnswer(newAnswer, answer) {
  if (answer === newAnswer) {
    return true;
  } else {
    return false;
  }
}
