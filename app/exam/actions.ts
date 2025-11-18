import { prisma } from "@/prisma/prisma";

// Get questions from the database
export const getExamQuestions = async () => {
  try {
    // Get 20 random questions from db
    const questions = await prisma.$queryRaw`
            SELECT * FROM "exam_questions" ORDER BY RANDOM() LIMIT 20;
        `;

    console.log("Fetching new questions...");
    return questions;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return error.message;
    }
    return error;
  }
};
