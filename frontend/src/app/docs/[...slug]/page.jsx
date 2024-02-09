"use client";
import { useState, useEffect } from "react";
import question from "../../../components/question/Question.jsx";
import toast, { Toaster } from "react-hot-toast";
import Counter from "../../../components/Counter/Counter.jsx";
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
  }, [completed, params.slug]);
  if (!params.slug.length == 2) {
    return <h1>Nav links to difficulties</h1>;
  }

  let render;
  if (questionStr) {
    render = (
      <div>
        <div>{questionStr}</div>
      </div>
    );
  }
  return (
    <>
      <div>
        <Toaster />
        <Counter correct={correct} />
        {render}
        <form onSubmit={onSubmit}>
          <input
            type="number"
            name="answer"
            placeholder="Enter your answer here"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
