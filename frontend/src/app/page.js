"use client";
import { generateAddQuestion } from "@/math/addition";
import { generateMinQuestion } from "@/math/subtraction";
import { checkAnswer } from "@/math/checkAnswer";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import PageCSS from "./page.module.css";
import { generateDivQuestion } from "@/math/division";
import { generateMultQuestion } from "@/math/multiplication";
export default function Page() {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [completed, setCompleted] = useState(false);
  const [topic, setTopic] = useState("addition");

  const topics = {
    addition: generateAddQuestion(),
    subtraction: generateMinQuestion(),
    multiplication: generateMultQuestion(),
    division: generateDivQuestion,
  };
  useEffect(() => {
    async function getQA() {
      const questionArray = await topics[topic];
      if (questionArray !== undefined) {
        setQuestion([questionArray[0], questionArray[1]]);
        setAnswer(questionArray[2]);
        setCompleted(false);
      }
    }
    getQA();
  }, [completed]);

  async function onSubmit(event) {
    event.preventDefault();
    const num = event.target[0].value;
    // CHECK ANSWER
    const response = await checkAnswer(Number(num), answer);
    console.log(response);
    if (response) {
      toast.success("Correct Answer!");
      setCompleted(true);
    } else {
      toast.error("Incorrect Answer :( Give it another go!");
    }
  }
  let render;
  if (question) {
    render = (
      <div className={PageCSS.questionBox}>
        {question[0]} + {question[1]}
      </div>
    );
  }
  return (
    <div className={PageCSS.main}>
      <Toaster />
      <div>{render}</div>
      <form onSubmit={onSubmit}>
        <input type="number" name="answer" className={PageCSS.inputBox} />
        <button type="submit" className={PageCSS.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}
