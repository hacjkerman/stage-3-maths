"use client";
import CounterCSS from "./Counter.module.css";
import { Progress } from "@radix-ui/react-progress";

export default function Counter(props) {
  const correct = props.correct;
  return (
    <>
      <div className={CounterCSS.counterBox}>{correct}</div>
      <div className={CounterCSS.fillBox}>
        <Progress value={(correct / 5) * 100} />
      </div>
    </>
  );
}
