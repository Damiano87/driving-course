import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { saveProgress } from "../actions";
import { Slide } from "@prisma/client";
import { setUrlParams } from "@/lib/utils";

const PrevSlideBtn = ({ slides }: { slides: Slide[] }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentSlide = parseInt(searchParams.get("slide") || "1", 10);

  // Go to the previous slide
  const prevSlide = () => {
    if (currentSlide === 1) return;

    const prevSlideNumber = currentSlide - 1;

    // create new object with url search params
    setUrlParams(prevSlideNumber, searchParams, router);

    // save progress
    saveProgress(
      "cmhnzo86b0000fxkgagycs8l5",
      "cmhukpd1z0000fx5g703nasch",
      slides[prevSlideNumber - 1].id,
      prevSlideNumber
    );
  };

  if (currentSlide === 1) return null;

  return (
    <Button aria-label="Previous slide" onClick={prevSlide}>
      Poprzedni slajd
    </Button>
  );
};

export default PrevSlideBtn;
