"use server";

import { signIn } from "@/auth";
import { prisma } from "@/prisma/prisma";
import { compare } from "bcrypt";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";

export type SignInState = {
  error: { username?: string; password?: string; general?: string };
};

export const signInAction = async (
  prevState: SignInState,
  formData: FormData
): Promise<SignInState> => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  try {
    // 1. Check if user exists
    const user = await prisma.user.findFirst({
      where: {
        name: username,
      },
    });

    if (!user) {
      return {
        error: {
          username: "Użytkownik nie istnieje",
        },
      };
    }

    // 2. Check password
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      return {
        error: {
          password: "Niepoprawne hasło",
        },
      };
    }

    // 3. Sign in user
    await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    // 4. Redirect to home page
    redirect("/");
  } catch (error) {
    // if redirect error throw error
    if (isRedirectError(error)) {
      throw error;
    }

    // normal error handle
    console.log("Sign in error:", error);
    return {
      error: {
        general: "Wystąpił błąd podczas logowania",
      },
    };
  }
};
