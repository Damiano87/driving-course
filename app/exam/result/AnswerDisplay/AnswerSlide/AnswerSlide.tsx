"use client";

import { getExamQuestionByID } from "@/app/exam/actions";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import { ExamQuestion } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";

type AnswerSlideProps = {
  questionIds: string[];
  index: number;
};

const AnswerSlide = ({ questionIds, index }: AnswerSlideProps) => {
  const [examQuestion, setExamQuestion] = useState<ExamQuestion | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestion = async () => {
      setLoading(true);
      const question = (await getExamQuestionByID(
        questionIds[index]
      )) as ExamQuestion;
      setExamQuestion(question);
      setLoading(false);
    };

    fetchQuestion();
  }, [questionIds, index]);

  if (loading)
    return (
      <div className="max-w-2xl h-96 flex justify-center items-center">
        <Spinner className="size-14" />
      </div>
    );
  if (!examQuestion) return <div>Brak pytania</div>;

  return (
    <div className="max-w-2xl text-center">
      {/* Number of question */}
      <div>
        <h2 className="text-xl font-bold mb-2">Pytanie {index + 1}</h2>
      </div>
      {/* Question image */}
      <div>
        <Image
          src={examQuestion?.imageUrl || "/file.svg"}
          alt={examQuestion?.content || "Exam question"}
          width={200}
          height={100}
          loading="eager"
          className="object-cover mx-auto"
          unoptimized
          onError={(e) => {
            e.currentTarget.src = "/file.svg";
          }}
        />
      </div>

      {/* Question content */}
      <div className="my-8">
        <p>{examQuestion.content}</p>
      </div>

      {/* Answer options */}
      <div className="space-y-4">
        {["A", "B", "C"].map((letter) => {
          const answerKey = `answer${letter}` as
            | "answerA"
            | "answerB"
            | "answerC";
          return (
            <div key={letter} className="flex gap-4 items-center">
              <div
                className={cn(
                  "px-2 py-1 rounded-sm",
                  letter === examQuestion.correctAnswer
                    ? "bg-green-600"
                    : "bg-primary"
                )}
              >
                {letter}
              </div>
              <p>{examQuestion[answerKey]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AnswerSlide;
