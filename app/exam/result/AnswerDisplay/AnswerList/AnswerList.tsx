import { cn } from "@/lib/utils";
import { Dispatch } from "react";

type AnswerListProps = {
  answers: string[];
  setIndex: Dispatch<React.SetStateAction<number>>;
};
const AnswerList = ({ answers, setIndex }: AnswerListProps) => {
  // Render each answer with color coding
  const renderColor = (answer: string): string => {
    if (answer === "true") return "bg-green-600";
    if (answer === "false") return "bg-red-600";
    return "bg-primary";
  };

  return (
    <div className="flex gap-3 max-w-md flex-wrap">
      {answers.map((answer, index) => {
        return (
          <div
            key={index}
            className={cn(
              "flex justify-center items-center w-8 aspect-square rounded-sm",
              renderColor(answer)
            )}
            onClick={() => setIndex(index)}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};
export default AnswerList;
