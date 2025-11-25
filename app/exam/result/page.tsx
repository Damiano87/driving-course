import { Exam } from "@prisma/client";
import { getLastResult } from "../actions";
import AnswerDisplay from "./AnswerDisplay/AnswerDisplay";
import { cn } from "@/lib/utils";

const ExamResultPage = async () => {
  const lastResult = (await getLastResult()) as Exam | "Unauthorized" | null;

  if (lastResult === "Unauthorized") {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Nieautoryzowany dostęp. Proszę się zalogować.</p>
      </div>
    );
  }

  if (!lastResult) {
    return <div>Brak wyników egzaminu.</div>;
  }

  console.log(lastResult);

  return (
    <div className="p-4">
      <div className="flex items-center gap-8 mb-4 font-bold">
        <h1 className="text-2xl">Wynik ostatniego egzaminu</h1>
        <span
          className={cn(
            "text-2xl",
            lastResult.passed ? "text-green-600" : "text-red-600"
          )}
        >
          {lastResult.passed ? "Pozytywny" : "Negatywny"}
        </span>
      </div>
      <AnswerDisplay
        answers={lastResult.answers}
        questionIds={lastResult.questionIds}
      />
    </div>
  );
};
export default ExamResultPage;
