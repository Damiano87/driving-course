"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma/prisma";

// Get questions from the database =======================================
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

// Save exam results to the database =======================================
export const saveExamResults = async (
  questionIds: string[],
  answers: (boolean | "?")[]
) => {
  const session = await auth();

  // Check if user is authenticated
  if (!session || !session.user) {
    return "Unauthorized";
  }
  // Get user ID
  const userId = session.user.id as string;

  // Minimum passing score is 16 out of 20
  const PASSING_SCORE = 16;

  // Convert answers to strings
  const answersAsStrings = answers.map((ans) => String(ans));

  // Save exam results to the database
  try {
    await prisma.exam.create({
      data: {
        userId,
        questionIds,
        answers: answersAsStrings,
        score: answersAsStrings.filter((ans) => ans === "true").length,
        passed:
          answersAsStrings.filter((ans) => ans === "true").length >=
          PASSING_SCORE
            ? true
            : false,
      },
    });

    console.log("Exam results saved succesfully...");
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return error.message;
    }
    console.error(error);
    return error;
  }
};
