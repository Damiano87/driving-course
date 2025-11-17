import z from "zod";

export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Nazwa użytkownika musi mieć co najmniej 2 znaki.",
  }),
  password: z
    .string()
    .min(3, {
      message: "Hasło musi składać się z co najmniej 3 znaków.",
    })
    .regex(/[A-Z]/, {
      message: "Hasło musi zawierać co najmniej jedną wielką literę.",
    }),
});
