"use client";

import { ExamQuestion } from "@prisma/client";
import Image from "next/image";
import { use, useState } from "react";
import Answers from "./Answers/Answers";
import EndExamBtn from "./EndExamBtn/EndExamBtn";
import CountdownTimer from "./CountdownTimer/CountdownTimer";

const QuestionDisplay = ({
  examQuestions,
}: {
  examQuestions: Promise<ExamQuestion[]>;
}) => {
  const questions = use(examQuestions);

  const questionIds = questions.map((q) => q.id);

  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<(boolean | "?")[]>([]);

  const numberOOfQuestion = index + 1;

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
      {/* Slide image */}
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
      {/* Slide text */}
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
