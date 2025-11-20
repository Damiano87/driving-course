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

      const unanswered = [] as "?"[];

      for (let i = 0; i < diff; i++) {
        unanswered.push("?");
      }
      setResults([...results, ...unanswered]);
    }

    // save results to db
    saveExamResults(questionIds, results);

    // reset results
    setResults([]);

    // redirect to results page
    router.push("/exam/result");
  };

  return <Button onClick={endExam}>Przerwij egzamin</Button>;
};
export default EndExamBtn;
