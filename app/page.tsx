import { getCourses } from "@/actions";
import SlideDisplay from "./_components/SlideDisplay/SlideDisplay";
import { getSlides } from "./_components/SlideDisplay/actions";

export default async function Home() {
  const courses = await getCourses();
  const slides = getSlides("cmhnzo86b0000fxkgagycs8l5");

  console.log(slides);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SlideDisplay slides={slides} />
    </div>
  );
}
