import { ExamQuestion } from "@prisma/client";
import { getExamQuestions } from "./actions";
import QuestionDisplay from "./QuestionDisplay/QuestionDisplay";

const ExamPage = async () => {
  // get exam questions promise
  const examQuestions = getExamQuestions() as Promise<ExamQuestion[]>;

  return (
    <div className="min-h-screen flex justify-center items-center">
      <QuestionDisplay examQuestions={examQuestions} />
    </div>
  );
};
export default ExamPage;
