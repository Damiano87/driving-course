import { getCourses } from "@/actions";
import SlideDisplay from "./_components/SlideDisplay/SlideDisplay";
import { getProgress, getSlides } from "./_components/SlideDisplay/actions";
import { redirect } from "next/navigation";
import SlideSidebar from "./_components/SlideSidebar/SlideSidebar";
import { auth } from "@/auth";
import Navbar from "./_components/Navbar/Navbar";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ slide?: string }>;
}) {
  // check if user is logged in
  const session = await auth();

  if (!session) {
    // redirect to login page
    redirect("/login");
  }

  const params = await searchParams;
  const slides = getSlides("cmhnzo86b0000fxkgagycs8l5");

  // If user doesn't have slide parameter then redirect
  if (!params || !params?.slide) {
    // const courses = await getCourses();

    // get progress
    const numbersOfSlides = (await getProgress(
      "cmhukpd1z0000fx5g703nasch",
      "cmhnzo86b0000fxkgagycs8l5"
    )) as number[];

    // get last slide
    const lastSlide =
      numbersOfSlides.length > 0 ? Math.max(...numbersOfSlides) : 1; // or 1 if progress doesn't exist

    // redirect to same url + slide parameter
    redirect(`/?slide=${lastSlide.toString()}`);
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex">
        <div className="flex flex-1 justify-center items-center">
          <SlideDisplay slides={slides} />
        </div>
        <SlideSidebar />
      </div>
    </div>
  );
}
