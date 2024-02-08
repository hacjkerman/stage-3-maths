"use client";
import { useState, useEffect } from "react";
import question from "../../../components/question/Question.jsx";
import PageCSS from "./page.module.css";
import Nav from "../../../components/Nav/Nav.jsx";
import toast, { Toaster } from "react-hot-toast";
import Counter from "../../../components/counter/counter.js";
import { checkAnswer } from "../../../math/checkAnswer.js";
export default function Docs({ params }) {
  const [correct, setCorrect] = useState(0);
  const [questionStr, setQuestionStr] = useState("");
  const [answer, setAnswer] = useState("");
  const [completed, setCompleted] = useState(false);
  function onSubmit(event) {
    event.preventDefault();
    const num = event.target[0].value;
    // CHECK ANSWER
    const response = checkAnswer(Number(num), answer);
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
  if (!params.slug.length == 2) {
    return <h1>Nav links to difficulties</h1>;
  }

  useEffect(() => {
    async function getQA() {
      const questionRes = await question(params.slug[0], params.slug[1]);
      console.log(questionRes);
      if (questionRes !== undefined) {
        setQuestionStr(questionRes.questionStr);
        setAnswer(questionRes.answer);
        setCompleted(false);
      }
    }
    getQA();
  }, [completed]);

  let render;
  if (questionStr) {
    console.log(questionStr);
    render = (
      <div className={PageCSS.questionBox}>
        <div className={PageCSS.question}>{questionStr}</div>
      </div>
    );
  }
  return (
    <>
      <div className={PageCSS.main}>
        <Toaster />
        <Counter correct={correct} />
        {render}
        <form onSubmit={onSubmit}>
          <input
            type="number"
            name="answer"
            placeholder="Enter your answer here"
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
