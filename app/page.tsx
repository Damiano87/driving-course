import { getCourses } from "@/actions";
import SlideDisplay from "./_components/SlideDisplay/SlideDisplay";

export default async function Home() {
  const courses = await getCourses();

  console.log(courses);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <SlideDisplay />
    </div>
  );
}
