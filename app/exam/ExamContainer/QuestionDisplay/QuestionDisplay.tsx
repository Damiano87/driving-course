"use client";

import { ExamQuestion } from "@prisma/client";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import Answers from "./Answers/Answers";
import EndExamBtn from "./EndExamBtn/EndExamBtn";
import CountdownTimer from "./CountdownTimer/CountdownTimer";
import { useRouter } from "next/navigation";
import { saveExamResults } from "../../actions";

const QuestionDisplay = ({
  examQuestions,
}: {
  examQuestions: Promise<ExamQuestion[]>;
}) => {
  const questions = use(examQuestions);

  const questionIds = questions.map((q) => q.id);

  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<(boolean | "?")[]>([]);
  const router = useRouter();

  const numberOOfQuestion = index + 1;
  const isExamEnd = index + 1 > questions.length;

  // When answered all questions, save results and redirect
  useEffect(() => {
    if (isExamEnd) {
      console.log("End of exam:", index + 1);

      // save exam results in db and redirect to results page
      saveExamResults(questionIds, results).then(() => {
        router.push("/exam/result");
      });
    }
  }, [isExamEnd, index, questionIds, results, router]);

  // Don't render questions after exam ends
  if (isExamEnd) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p>Zapisywanie wyników...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        {/* Number of question */}
        Pytanie {numberOOfQuestion} z {questions.length}
        {/* Countdown timer */}
        <CountdownTimer
          initialMinutes={45}
          onComplete={() => console.log("time is up")}
        />
      </div>
      {/* Question image */}
      <div>
        <Image
          src={questions[index]?.imageUrl || "/file.svg"}
          alt={`Question number ${numberOOfQuestion}`}
          width={300}
          height={200}
          loading="eager"
          className="object-cover mx-auto"
          unoptimized
          onError={(e) => {
            e.currentTarget.src = "/file.svg";
          }}
        />
      </div>
      {/* Question text */}
      <div className="max-w-2xl text-center">
        <p className="text-foreground">{questions[index].content}</p>
      </div>
      {/* Answers */}
      <Answers
        index={index}
        setIndex={setIndex}
        results={results}
        setResults={setResults}
        answerA={questions[index].answerA}
        answerB={questions[index].answerB}
        answerC={questions[index].answerC}
        correctAnswer={questions[index].correctAnswer}
        questionsLength={questions.length}
        questionIds={questionIds}
      />
      <div className="flex justify-end">
        <EndExamBtn
          results={results}
          setResults={setResults}
          questionsLength={questions.length}
          questionIds={questionIds}
        />
      </div>
    </div>
  );
};
export default QuestionDisplay;
