import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dispatch, useState } from "react";
import { saveExamResults } from "../../actions";

type AnswersProps = {
  answerA: string;
  answerB: string;
  answerC: string;
  correctAnswer: string;
  index: number;
  setIndex: Dispatch<React.SetStateAction<number>>;
  results: (boolean | "?")[];
  setResults: Dispatch<React.SetStateAction<(boolean | "?")[]>>;
  questionsLength: number;
  questionIds: string[];
};

const Answers = ({
  index,
  setIndex,
  results,
  setResults,
  answerA,
  answerB,
  answerC,
  correctAnswer,
  questionsLength,
  questionIds,
}: AnswersProps) => {
  const [correct, setCorrect] = useState<string | null>(null);
  const [clickedAnswer, setClickedAnswer] = useState<string | null>(null);

  // check if answer is correct
  const checkAnswer = (answer: string) => {
    // save each answer
    const isAnswerCorrect = correctAnswer === answer;

    const finalResults = [...results, isAnswerCorrect];
    setResults(finalResults);

    setCorrect(correctAnswer);
    setClickedAnswer(answer);

    // go to next question after 1 second
    setTimeout(() => {
      setIndex(index + 1);
      // reset states
      setCorrect(null);
      setClickedAnswer(null);
    }, 1000);
  };

  // set color based on correct answer
  const getAnswerClass = (answer: string) => {
    if (correct === answer) return "bg-green-600";
    if (clickedAnswer === answer && correct !== answer) return "bg-red-600";
    return "bg-primary";
  };

  return (
    <div className="space-y-4">
      {/* Answer A */}
      <Button
        variant={"ghost"}
        className="flex items-center gap-4"
        onClick={() => checkAnswer("A")}
      >
        <div
          className={cn("bg-primary px-2 py-1 rounded-sm", getAnswerClass("A"))}
        >
          A
        </div>
        <div>
          <p>{answerA}</p>
        </div>
      </Button>
      {/* Answer B */}
      <Button
        variant={"ghost"}
        className="flex items-center gap-4"
        onClick={() => checkAnswer("B")}
      >
        <div
          className={cn("bg-primary px-2 py-1 rounded-sm", getAnswerClass("B"))}
        >
          B
        </div>
        <div>
          <p>{answerB}</p>
        </div>
      </Button>
      {/* Answer C */}
      <Button
        variant={"ghost"}
        className="flex items-center gap-4"
        onClick={() => checkAnswer("C")}
      >
        <div
          className={cn("bg-primary px-2 py-1 rounded-sm", getAnswerClass("C"))}
        >
          C
        </div>
        <div>
          <p>{answerC}</p>
        </div>
      </Button>
    </div>
  );
};
export default Answers;
