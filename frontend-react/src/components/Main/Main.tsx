import QuestionPage from "../../pages/questionPage/page";

export default function Main() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <QuestionPage topic="addition" difficulty="easy" />
    </div>
  );
}
