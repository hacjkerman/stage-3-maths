export function QuestionBox() {
  return (
    <div className="p-4 border border-slate-200 border-gray-200 rounded-lg w-full max-w-sm flex justify-center items-center items-start gap-4 dark:border-slate-800">
      <div className="grid w-full items-center gap-1.5">
        <input id="question-1" min="0" placeholder="5" type="number" />
      </div>
      <button>Submit</button>
    </div>
  );
}
