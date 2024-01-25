"use client";
import { generateAddQuestion } from "@/math/addition";
import { generateMinQuestion } from "@/math/subtraction";
import { checkAnswer } from "@/math/checkAnswer";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import PageCSS from "./page.module.css";
import { generateDivQuestion } from "@/math/division";
import { generateMultQuestion } from "@/math/multiplication";
import Nav from "@/components/Nav/Nav";
import Counter from "@/components/Counter/Counter";
export default function Page() {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [completed, setCompleted] = useState(false);
  const [topic, setTopic] = useState("addition");
  const [userInput, setUserInput] = useState();
  const [correct, setCorrect] = useState(0);
  const topics = {
    addition: { function: generateAddQuestion(), operation: "+" },
    subtraction: { function: generateMinQuestion(), operation: "-" },
    multiplication: { function: generateMultQuestion(), operation: "*" },
    division: { function: generateDivQuestion(), operation: "%" },
  };
  useEffect(() => {
    async function getQA() {
      const questionArray = await topics[topic].function;
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
      setUserInput(0);
      setCorrect(correct + 1);
    } else {
      toast.error("Incorrect Answer :( Give it another go!");
      setCorrect(0);
    }
  }
  let render;
  if (question) {
    render = <div className={PageCSS.questionBox}>{question}</div>;
  }
  return (
    <>
      <Nav setTopic={setTopic} />
      <div className={PageCSS.main}>
        <Toaster />
        <Counter correct={correct} />
        <div>{render}</div>
        <form onSubmit={onSubmit}>
          <input
            type="number"
            name="answer"
            placeholder="Enter your answer here"
            value={userInput}
            className={PageCSS.inputBox}
          />
          <button type="submit" className={PageCSS.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
