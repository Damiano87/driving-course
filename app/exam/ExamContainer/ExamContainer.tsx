"use client";

import { Exam, ExamQuestion } from "@prisma/client";
import QuestionDisplay from "./QuestionDisplay/QuestionDisplay";
import { useState } from "react";
import ExamOverview from "./ExamOverview/ExamOverview";

type ExamContainerProps = {
  examQuestions: Promise<ExamQuestion[]>;
  userExams: Promise<Exam[]>;
};
const ExamContainer = ({ examQuestions, userExams }: ExamContainerProps) => {
  const [showQuestions, setShowQuestions] = useState(false);

  if (!showQuestions) {
    return (
      <ExamOverview setShowQuestions={setShowQuestions} userExams={userExams} />
    );
  }

  return <QuestionDisplay examQuestions={examQuestions} />;
};
export default ExamContainer;
