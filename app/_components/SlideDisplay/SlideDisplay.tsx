"use client";

import Image from "next/image";
import PrevSlideBtn from "./PrevSlideBtn/PrevSlideBtn";
import NextSlideBtn from "./NextSlideBtn/NextSlideBtn";
import { use, useEffect, useState } from "react";
import { Slide } from "@prisma/client";
import { cn } from "@/lib/utils";
import TimeoutBar from "./TimeoutBar/TimeoutBar";
import { useRouter, useSearchParams } from "next/navigation";

const SlideDisplay = ({ slides }: { slides: Promise<string | Slide[]> }) => {
  const allSlides = use(slides) as Slide[];
  const [width, setWidth] = useState<number>(100);
  const searchParams = useSearchParams();
  const router = useRouter();

  // set index for toggling slides
  const index = parseInt(searchParams.get("slide") || "1") - 1;

  // If url doesnt have value set it
  useEffect(() => {
    if (!searchParams.get("slide")) {
      router.push("?slide=1");
    }
  }, [searchParams, router]);

  return (
    <div className="space-y-8">
      <h1 className="text-center text-foreground">{allSlides[index].title}</h1>
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
          <PrevSlideBtn slides={allSlides} />
          <NextSlideBtn setWidth={setWidth} slides={allSlides} />
        </div>
      ) : (
        <TimeoutBar width={width} setWidth={setWidth} />
      )}
    </div>
  );
};
export default SlideDisplay;
