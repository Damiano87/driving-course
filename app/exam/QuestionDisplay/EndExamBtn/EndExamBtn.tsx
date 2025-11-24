import { Button } from "@/components/ui/button";
import { saveExamResults } from "../../actions";
import { useRouter } from "next/navigation";

type EndExamBtnProps = {
  results: (boolean | "?")[];
  setResults: React.Dispatch<React.SetStateAction<(boolean | "?")[]>>;
  questionsLength: number;
  questionIds: string[];
};

const EndExamBtn = ({
  results,
  setResults,
  questionsLength,
  questionIds,
}: EndExamBtnProps) => {
  const router = useRouter();

  // end exam function
  const endExam = () => {
    // add "?" if some questions are unanswered
    if (results.length < questionsLength) {
      const diff = questionsLength - results.length;

      const unanswered = Array(diff).fill("?") as "?"[];

      const finalResults = [...results, ...unanswered];

      // save results to db
      saveExamResults(questionIds, finalResults);
    }

    // reset results
    setResults([]);

    // redirect to results page
    router.push("/exam/result");
  };

  return <Button onClick={endExam}>Przerwij egzamin</Button>;
};
export default EndExamBtn;
