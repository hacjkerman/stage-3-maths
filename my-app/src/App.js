import { generateAddQuestion } from "./math/addition.js";
import { generateMinQuestion } from "./math/subtraction.js";
import { checkAnswer } from "./math/checkAnswer.js";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import AppCSS from "./App.module.css";
import { generateDivQuestion } from "./math/division.js";
import { generateMultQuestion } from "./math/multiplication.js";
import Nav from "./components/Nav/Nav.js";
import Counter from "./components/Counter/Counter.js";

function App() {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [completed, setCompleted] = useState(false);
  const [topic, setTopic] = useState("addition");
  const [correct, setCorrect] = useState(0);
  const topics = {
    addition: { function: generateAddQuestion, operation: "+" },
    subtraction: { function: generateMinQuestion, operation: "-" },
    multiplication: { function: generateMultQuestion, operation: "*" },
    division: { function: generateDivQuestion, operation: "%" },
  };
  useEffect(() => {
    async function getQA() {
      const questionArray = await topics[topic].function("easy");
      if (questionArray !== undefined) {
        const questionStr =
          questionArray.firstNum.toString() +
          " " +
          topics[topic].operation +
          " " +
          questionArray.secondNum.toString();
        setQuestion(questionStr);
        setAnswer(questionArray.answer);
        setCompleted(false);
      }
    }
    getQA();
  }, [completed, topic]);

  async function onSubmit(event) {
    event.preventDefault();
    const num = event.target[0].value;
    // CHECK ANSWER
    const response = await checkAnswer(Number(num), answer);
    if (response) {
      toast.success("Correct Answer!");
      setCompleted(true);
      setCorrect(correct + 1);
      event.target.reset();
    } else {
      toast.error("Incorrect Answer :( Give it another go!");
      setCorrect(0);
    }
  }

  let render;
  if (question) {
    render = <div className={AppCSS.questionBox}>{question}</div>;
  }
  return (
    <div className="App">
      <Nav setTopic={setTopic} />
      <div className={AppCSS.main}>
        <Toaster />
        <Counter correct={correct} />
        <div>{render}</div>
        <form onSubmit={onSubmit}>
          <input
            type="number"
            name="answer"
            placeholder="Enter your answer here"
            className={AppCSS.inputBox}
          />
          <button type="submit" className={AppCSS.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
