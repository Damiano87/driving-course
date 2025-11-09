import { prisma } from "./prisma/prisma";

// Get all courses
export const getCourses = async () => {
  try {
    const courses = await prisma.course.findMany({
      where: { isPublished: true },
    });

    return courses;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
    return "Coś poszło nie tak";
  }
};
