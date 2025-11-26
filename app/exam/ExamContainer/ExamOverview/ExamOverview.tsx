"use client";

import { Button } from "@/components/ui/button";
import { Exam } from "@prisma/client";
import React, { Dispatch, use } from "react";

type ExamOverviewProps = {
  setShowQuestions: Dispatch<React.SetStateAction<boolean>>;
  userExams: Promise<Exam[]>;
};

const ExamOverview = ({ setShowQuestions, userExams }: ExamOverviewProps) => {
  const exams = use(userExams);

  console.log("Egzaminy: ", exams);

  const passedExams = exams.filter((exam) => exam.passed);

  console.log("Passed exams count: ", passedExams.length);

  return (
    <div>
      <Button onClick={() => setShowQuestions(true)}>
        change to questions
      </Button>
    </div>
  );
};
export default ExamOverview;
