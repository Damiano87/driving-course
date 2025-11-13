"use server";

import { prisma } from "@/prisma/prisma";

// Get all slides for specific course ==============================
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

// Save progress ===================================================
export const saveProgress = async (
  courseId: string,
  userId: string,
  currentSlideId: string,
  numberOfSlide: number
) => {
  try {
    // get specific progress
    const progress = await prisma.userProgress.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
      select: { completedSlides: true },
    });

    // add new number of slide to completed slides array
    const completedSlides = progress?.completedSlides || [];
    const newCompletedSlides = [...completedSlides, numberOfSlide];

    // update progress
    await prisma.userProgress.upsert({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
      update: {
        completedSlides: newCompletedSlides,
        currentSlideId,
      },
      create: {
        userId,
        courseId,
        currentSlideId,
        completedSlides: [numberOfSlide],
        lastAccessedAt: new Date(),
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return error.message;
    }
    return "Coś poszło nie tak";
  }
};

// get progress ==================================================
export const getProgress = async (userId: string, courseId: string) => {
  try {
    const progress = await prisma.userProgress.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
    });

    console.log(progress?.completedSlides);
    return progress?.completedSlides || [];
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return error.message;
    }
    return "Coś poszło nie tak";
  }
};
