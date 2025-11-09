import Image from "next/image";
import PrevSlideBtn from "./PrevSlideBtn/PrevSlideBtn";
import NextSlideBtn from "./NextSlideBtn/NextSlideBtn";

const SlideDisplay = () => {
  return (
    <div className="space-y-8">
      {/* Slide image */}
      <div>
        <Image
          src={"/file.svg"}
          alt="image"
          width={300}
          height={200}
          loading="eager"
          className="object-cover mx-auto"
        />
      </div>
      {/* Slide text */}
      <div className="max-w-2xl text-center">
        <p className="text-foreground">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, quas
          hic minima qui commodi reiciendis dolorum dicta. Repudiandae
          exercitationem amet inventore dignissimos distinctio ratione.
        </p>
      </div>
      {/* Prev and next buttons */}
      <div className="flex justify-between">
        <PrevSlideBtn />
        <NextSlideBtn />
      </div>
    </div>
  );
};
export default SlideDisplay;
