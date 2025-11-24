import { Exam } from "@prisma/client";
import { getLastResult } from "../actions";
import AnswerDisplay from "./AnswerDisplay/AnswerDisplay";

const ExamResultPage = async () => {
  const lastResult = (await getLastResult()) as Exam | "Unauthorized" | null;

  if (lastResult === "Unauthorized") {
    return <div>Nieautoryzowany dostęp. Proszę się zalogować.</div>;
  }

  if (!lastResult) {
    return <div>Brak wyników egzaminu.</div>;
  }

  console.log(lastResult);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Wynik ostatniego egzaminu</h1>
      <AnswerDisplay
        answers={lastResult.answers}
        questionIds={lastResult.questionIds}
      />
    </div>
  );
};
export default ExamResultPage;
