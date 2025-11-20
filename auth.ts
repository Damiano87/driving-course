import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { formSchema } from "./schemas/formSchema";
import { prisma } from "./prisma/prisma";
import { compare } from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const { username, password } = await formSchema.parseAsync(
            credentials
          );

          // check if the user exists
          const user = await prisma.user.findFirst({
            where: {
              name: username,
            },
          });

          if (!user) {
            return null;
          }

          // check if password is correct
          const passwordMatch = await compare(password, user.password);

          if (!passwordMatch) {
            return null;
          }

          // return user object with their profile data
          return user;
        } catch (error) {
          console.log("=== AUTHORIZE ERROR ===");
          console.log("Error type:", error?.constructor?.name);
          console.log(
            "Error message:",
            error instanceof Error ? error.message : error
          );
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
});
