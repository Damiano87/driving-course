"use client";

import Image from "next/image";
import PrevSlideBtn from "./PrevSlideBtn/PrevSlideBtn";
import NextSlideBtn from "./NextSlideBtn/NextSlideBtn";
import { use, useState } from "react";
import { Slide } from "@prisma/client";
import { cn } from "@/lib/utils";
import TimeoutBar from "./TimeoutBar/TimeoutBar";

const SlideDisplay = ({ slides }: { slides: Promise<string | Slide[]> }) => {
  const allSlides = use(slides) as Slide[];
  const [index, setIndex] = useState<number>(0);
  const [width, setWidth] = useState<number>(100);

  console.log(allSlides);

  return (
    <div className="space-y-8">
      {/* Slide image */}
      <div>
        <Image
          src={allSlides[index]?.imageUrl || "/file.svg"}
          alt={allSlides[index]?.title || "Slide"}
          width={300}
          height={200}
          loading="eager"
          className="object-cover mx-auto"
          unoptimized
          onError={(e) => {
            e.currentTarget.src = "/file.svg";
          }}
        />
      </div>
      {/* Slide text */}
      <div className="max-w-2xl text-center">
        <p className="text-foreground">{allSlides[index].content}</p>
      </div>
      {width === 0 ? (
        <div
          className={cn(
            "flex",
            index === 0 ? "justify-end" : "justify-between"
          )}
        >
          <PrevSlideBtn index={index} setIndex={setIndex} />
          <NextSlideBtn
            index={index}
            setIndex={setIndex}
            setWidth={setWidth}
            slides={allSlides}
          />
        </div>
      ) : (
        <TimeoutBar width={width} setWidth={setWidth} />
      )}
    </div>
  );
};
export default SlideDisplay;
