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

  console.log("Egzaminy: ", exams.length);

  const passedExams = exams.filter((exam) => exam.passed);

  console.log("Passed exams count: ", passedExams.length);

  const passedPercentage =
    exams.length > 0
      ? Math.round((passedExams.length / exams.length) * 100)
      : 0;

  // Circle progress bar calculations
  const size = 200; // circle size in pixels
  const strokeWidth = 20; // stroke width in pixels
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (passedPercentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-32">
      {/* Circular progress bar */}
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Circle background */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e3dfd4"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* circle progress */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#2eb45f"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-500 ease-out"
          />
        </svg>
        {/* text inside circle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold">{passedPercentage}%</span>
          <span className="text-sm text-gray-200">
            {passedExams.length}/{exams.length} zdane
          </span>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          SPRAWDŹ SIĘ! ROZPOCZNIJ EGZAMIN PAŃSTWOWY
        </h2>
        <Button onClick={() => setShowQuestions(true)}>
          Rozpocznij egzamin
        </Button>
      </div>
    </div>
  );
};
export default ExamOverview;
