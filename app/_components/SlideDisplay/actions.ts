import { prisma } from "@/prisma/prisma";

export const getSlides = async (courseId: string) => {
  try {
    const slides = await prisma.slide.findMany({
      where: { courseId },
    });

    return slides;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return error.message;
    }
    return "Coś poszło nie tak";
  }
};
