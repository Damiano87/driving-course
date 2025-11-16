"use client";

import { cn } from "@/lib/utils";
import { Slide } from "@prisma/client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { use } from "react";

type SlideListProps = {
  slides: Promise<string | Slide[]>;
  progress: Promise<string | number[]>;
};
const SlideList = ({ slides, progress }: SlideListProps) => {
  const allSlides = use(slides) as Slide[];
  const userProgress = use(progress) as number[];

  // get slide number
  const slideNumber = useSearchParams().get("slide");

  // get last slide
  const lastSlide = userProgress.length > 0 ? Math.max(...userProgress) : 1;

  return (
    <ul>
      {allSlides.map((slide) => {
        const isActive = slideNumber === String(slide.order);
        const isNotViewed = slide.order > lastSlide;
        return (
          <li key={slide.id}>
            {isNotViewed ? (
              <span
                className={cn(
                  "inline-block p-4 w-full opacity-60",
                  "cursor-default text-foreground"
                )}
              >
                {slide.title}
              </span>
            ) : (
              <Link
                href={`/?slide=${slide.order}`}
                className={cn(
                  "inline-block p-4 w-full transition-colors hover:bg-secondary",
                  isActive && "bg-secondary"
                )}
              >
                {slide.title}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};
export default SlideList;
