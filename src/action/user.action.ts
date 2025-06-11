"use server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createUser = async (data: FormData) => {
  try {
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");

    if (typeof password !== "string") {
      throw new Error("Пароль должен быть строкой");
    }
    const hashPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name: name as string,
        email: email as string,
        password: hashPassword,
      },
    });
    // Ревалидация данных
    revalidatePath("page");
  } catch (error) {
    console.log(error);
  }
};
