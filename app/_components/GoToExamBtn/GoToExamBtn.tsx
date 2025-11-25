import Link from "next/link";

const GoToExamBtn = () => {
  return (
    <div className="m-7">
      <Link
        href={"/exam"}
        className="bg-primary p-2 rounded-md text-foreground font-medium hover:bg-primary/80 transition"
      >
        Przejdź do egzaminu
      </Link>
    </div>
  );
};
export default GoToExamBtn;
