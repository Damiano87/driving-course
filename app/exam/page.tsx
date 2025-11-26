import { Exam, ExamQuestion } from "@prisma/client";
import { getExamQuestions, getExamsByUserID } from "./actions";
import ExamContainer from "./ExamContainer/ExamContainer";

const ExamPage = async () => {
  // get exam questions promise
  const examQuestions = getExamQuestions() as Promise<ExamQuestion[]>;
  const userExams = getExamsByUserID() as Promise<Exam[]>;
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ExamContainer examQuestions={examQuestions} userExams={userExams} />
    </div>
  );
};
export default ExamPage;
