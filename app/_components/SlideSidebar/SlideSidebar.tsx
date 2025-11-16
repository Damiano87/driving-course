import { getProgress, getSlides } from "../SlideDisplay/actions";
import SlideList from "./SlideList/SlideList";

const SlideSidebar = async () => {
  const slides = getSlides("cmhnzo86b0000fxkgagycs8l5");
  const progress = getProgress(
    "cmhukpd1z0000fx5g703nasch",
    "cmhnzo86b0000fxkgagycs8l5"
  );

  return (
    <nav className="bg-primary text-foreground">
      <SlideList slides={slides} progress={progress} />
    </nav>
  );
};
export default SlideSidebar;
