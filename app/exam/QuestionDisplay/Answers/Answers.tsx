import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dispatch, useState } from "react";

type AnswersProps = {
  answerA: string;
  answerB: string;
  answerC: string;
  correctAnswer: string;
  index: number;
  setIndex: Dispatch<React.SetStateAction<number>>;
};

const Answers = ({
  index,
  setIndex,
  answerA,
  answerB,
  answerC,
  correctAnswer,
}: AnswersProps) => {
  const [correct, setCorrect] = useState<string | null>(null);
  const [clickedAnswer, setClickedAnswer] = useState<string | null>(null);

  // check if answer is correct
  const checkAnswer = (answer: string) => {
    setCorrect(correctAnswer);
    setClickedAnswer(answer);

    // go to next question after 1 second
    setTimeout(() => {
      if (index + 1 >= 20) return; // limit to 20 questions for exam
      setIndex(index + 1);
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

// const questionNumber = parseInt(searchParams.get("question") || "1") + 1;

// // create new object with url search params
// const goToNextQuestion = () => {
//   const params = new URLSearchParams(searchParams.toString());
//   params.set("question", questionNumber.toString());

//   // update URL
//   router.push(`?${params.toString()}`);
// };
