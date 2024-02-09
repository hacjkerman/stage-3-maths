import { Progress } from "@radix-ui/react-progress";

export default function Counter(props) {
  const correct = props.correct;
  return (
    <>
      <div>{correct}</div>
      <div>
        <Progress value={(correct / 5) * 100} />
      </div>
    </>
  );
}
