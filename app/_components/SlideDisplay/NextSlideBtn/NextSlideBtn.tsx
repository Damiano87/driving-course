import { Button } from "@/components/ui/button";
import { Slide } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

type NextSlideBtnProps = {
  slides: Slide[];
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  setWidth: Dispatch<SetStateAction<number>>;
};

const NextSlideBtn = ({
  index,
  setIndex,
  setWidth,
  slides,
}: NextSlideBtnProps) => {
  // go to next slide
  const nextSlide = () => {
    if (index === slides.length - 1) return;

    setIndex((prev) => prev + 1);
    setWidth(100);
  };

  if (index === slides.length - 1) return null;

  return (
    <Button aria-label="Next slide" onClick={nextSlide}>
      Następny slajd
    </Button>
  );
};

export default NextSlideBtn;
