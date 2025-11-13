import { Button } from "@/components/ui/button";
import { Slide } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { saveProgress } from "../actions";
import { setUrlParams } from "@/lib/utils";

type NextSlideBtnProps = {
  slides: Slide[];
  setWidth: Dispatch<SetStateAction<number>>;
};

const NextSlideBtn = ({ setWidth, slides }: NextSlideBtnProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentSlide = parseInt(searchParams.get("slide") || "1", 10);

  // go to next slide
  const nextSlide = () => {
    if (currentSlide === slides.length) return;

    const nextSlideNumber = currentSlide + 1;

    // create new object with url search params
    setUrlParams(nextSlideNumber, searchParams, router);

    setWidth(0);

    // save progress
    saveProgress(
      "cmhnzo86b0000fxkgagycs8l5",
      "cmhukpd1z0000fx5g703nasch",
      slides[currentSlide].id,
      nextSlideNumber
    );
  };

  if (currentSlide === slides.length) return null;

  return (
    <Button aria-label="Next slide" onClick={nextSlide}>
      Następny slajd
    </Button>
  );
};

export default NextSlideBtn;
