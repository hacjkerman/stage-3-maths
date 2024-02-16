import QuestionPage from "../../pages/questionPage/page";
import { useParams } from "react-router-dom";

export default function Main() {
  const { topic, difficulty } = useParams();
  console.log(topic, difficulty);
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <QuestionPage topic={topic} difficulty={difficulty} />
    </div>
  );
}
