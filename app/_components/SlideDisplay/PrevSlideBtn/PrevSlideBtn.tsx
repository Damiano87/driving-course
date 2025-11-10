import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

const PrevSlideBtn = ({
  index,
  setIndex,
}: {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}) => {
  // Go to the previous slide
  const prevSlide = () => {
    if (index === 0) return;

    setIndex((prev) => prev - 1);
  };

  if (index === 0) return null;

  return (
    <Button aria-label="Previous slide" onClick={prevSlide}>
      Poprzedni slajd
    </Button>
  );
};

export default PrevSlideBtn;
