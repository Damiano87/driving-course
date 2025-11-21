import { Exam } from "@prisma/client";
import { getLastResult } from "../actions";
import { cn } from "@/lib/utils";

const ExamResultPage = async () => {
  const lastResult = (await getLastResult()) as Exam | "Unauthorized" | null;

  // Render each answer with color coding
  const renderColor = (answer: string): string => {
    if (answer === "true") return "bg-green-600";
    if (answer === "false") return "bg-red-600";
    return "bg-slate-100 text-black";
  };

  if (lastResult === "Unauthorized") {
    return <div>Nieautoryzowany dostęp. Proszę się zalogować.</div>;
  }

  if (!lastResult) {
    return <div>Brak wyników egzaminu.</div>;
  }

  return (
    <div className="flex gap-3 max-w-md flex-wrap">
      {lastResult.answers.map((answer, index) => {
        return (
          <div
            key={index}
            className={cn(
              "flex justify-center items-center w-8 aspect-square rounded-sm",
              renderColor(answer)
            )}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};
export default ExamResultPage;
