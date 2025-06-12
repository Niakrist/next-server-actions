import * as z from "zod";

export const createUserScheme = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(3, "Пароль должен быть больше 3-ех символов"),
  confirmPassword: z
    .string()
    .min(3, "Пароль должен быть больше 3-ех символов")
    .refine((data) => data.password === data.confirmPassword, {
      message: "Пароли должны совпадать",
      path: ["confirmPassword"],
    }),
});
