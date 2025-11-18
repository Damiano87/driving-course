"use client";

import { ExamQuestion } from "@prisma/client";
import Image from "next/image";
import { use, useState } from "react";
import Answers from "./Answers/Answers";

const QuestionDisplay = ({
  examQuestions,
}: {
  examQuestions: Promise<ExamQuestion[]>;
}) => {
  const questions = use(examQuestions);

  console.log(questions);

  const [index, setIndex] = useState(0);

  return (
    <div className="space-y-8">
      <div>
        Pytanie {index + 1} z {questions.length}
      </div>
      {/* Slide image */}
      <div>
        <Image
          src={questions[index]?.imageUrl || "/file.svg"}
          alt={`Question number ${index + 1}`}
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
        answerA={questions[index].answerA}
        answerB={questions[index].answerB}
        answerC={questions[index].answerC}
        correctAnswer={questions[index].correctAnswer}
      />
    </div>
  );
};
export default QuestionDisplay;

// const searchParams = useSearchParams();
// const router = useRouter();

// // set index for toggling questions
// const index = parseInt(searchParams.get("question") || "1") - 1;

// // If url doesnt have value set it
// useEffect(() => {
//   if (!searchParams.get("question")) {
//     router.push("/exam?question=1");
//   }
// }, [searchParams, router]);
