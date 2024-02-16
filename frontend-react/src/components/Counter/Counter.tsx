import { Progress } from "../ui/progress";

export default function Counter(props: any) {
  const correct = props.correct;
  return (
    <>
      <div>{correct}</div>
      <div className={"w-full"}>
        <Progress value={(correct / 5) * 100} />
      </div>
    </>
  );
}
