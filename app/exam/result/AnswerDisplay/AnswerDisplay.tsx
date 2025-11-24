"use client";

import { useState } from "react";
import AnswerList from "./AnswerList/AnswerList";
import AnswerSlide from "./AnswerSlide/AnswerSlide";

const AnswerDisplay = ({
  answers,
  questionIds,
}: {
  answers: string[];
  questionIds: string[];
}) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="space-y-8">
      {/* Answers list */}
      <AnswerList answers={answers} setIndex={setIndex} />
      {/* Answer slide */}
      <AnswerSlide questionIds={questionIds} index={index} />
    </div>
  );
};
export default AnswerDisplay;
