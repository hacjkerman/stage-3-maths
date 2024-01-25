import CounterCSS from "./Counter.module.css";

export default function Counter(props) {
  const correct = props.correct;
  let counter = 0;
  return (
    <>
      <div className={CounterCSS.counterBox}>{correct}</div>
      <div className={CounterCSS.fillBox}></div>
    </>
  );
}
