"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma/prisma";
import { revalidatePath } from "next/cache";

// Get exam questions from the database =======================================
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
  // Check if user is authenticated
  const session = await auth();

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
    revalidatePath("/exam/result");
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return error.message;
    }
    console.error(error);
    return error;
  }
};

// Get exam results by user ID =======================================
export const getLastResult = async () => {
  try {
    // Check if user is authenticated
    const session = await auth();

    if (!session || !session.user) {
      return "Unauthorized";
    }

    const lastResult = await prisma.exam.findFirst({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return lastResult;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return error.message;
    }
    console.error(error);
    return error;
  }
};

// Get slide data by question ID =======================================
export const getExamQuestionByID = async (questionId: string) => {
  try {
    const examQuestion = await prisma.examQuestion.findUnique({
      where: {
        id: questionId,
      },
    });

    return examQuestion;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return error.message;
    }
    console.error(error);
    return error;
  }
};
