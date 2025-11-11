import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { saveProgress } from "../actions";

const PrevSlideBtn = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentSlide = parseInt(searchParams.get("slide") || "1", 10);

  // Go to the previous slide
  const prevSlide = () => {
    if (currentSlide === 1) return;

    const nextSlideNumber = currentSlide - 1;

    // create new object with url search params
    const params = new URLSearchParams(searchParams.toString());
    params.set("slide", nextSlideNumber.toString());

    // update URL
    router.push(`?${params.toString()}`);

    // save progress
    saveProgress(
      "cmhnzo86b0000fxkgagycs8l5",
      "cmhukpd1z0000fx5g703nasch",
      currentSlide
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
