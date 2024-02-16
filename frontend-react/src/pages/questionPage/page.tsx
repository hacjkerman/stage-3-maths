"use client";
import { useState, useEffect } from "react";
import question from "../../components/questionBox/Question";
import toast, { Toaster } from "react-hot-toast";
import Counter from "../../components/Counter/Counter";
import { checkAnswer } from "../../math/checkAnswer.js";
import { QuestionBox } from "../../components/questionBox/questionBox";

interface prop {
  topic: string | undefined;
  difficulty: string | undefined;
}

export default function QuestionPage(props: prop) {
  const [correct, setCorrect] = useState(0);
  const [questionStr, setQuestionStr] = useState<string | undefined>(undefined);
  const [answer, setAnswer] = useState("");
  const [completed, setCompleted] = useState(false);
  function onSubmit(event: any) {
    event.preventDefault();
    const num = event.target[0].value;
    // CHECK ANSWER
    const response = checkAnswer(Number(num), answer);
    if (response) {
      if (correct >= 5) {
        toast.success(
          `${props.topic} topic of ${props.difficulty} has been completed! Please move on to the next difficulty or topic!`
        );
      }
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
      const questionRes = await question(props.topic, props.difficulty);
      console.log(questionRes);
      if (questionRes !== undefined) {
        setQuestionStr(questionRes.questionStr);
        setAnswer(questionRes.answer);
        setCompleted(false);
      }
    }
    getQA();
  }, [completed, props]);

  let render;
  if (questionStr) {
    render = (
      <div>
        <div>{questionStr}</div>
      </div>
    );
  }
  return (
    // flex justify-center items-center w-screen h-screen
    <div className="p-4 border border-gray-200 rounded-lg w-full max-w-sm flex flex-col justify-center items-center gap-4 dark:border-slate-800 xs: p-4">
      <Toaster />
      <Counter correct={correct} />
      {render}
      <form onSubmit={onSubmit}>
        <QuestionBox />
      </form>
    </div>
  );
}
