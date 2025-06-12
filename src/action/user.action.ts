"use server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { IFormCheckResult } from "@/interface/formCheckResult";
import { createUserScheme } from "@/lib/validator";
import { ZodError } from "zod";

export const createUser = async (
  prevState: IFormCheckResult,
  data: FormData
): Promise<IFormCheckResult> => {
  try {
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");

    const user = createUserScheme.parse({
      name,
      email,
      password,
      confirmPassword,
    });

    const hashPassword = await bcrypt.hash(user.password, 10);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashPassword,
      },
    });
    // Ревалидация данных
    revalidatePath("page");

    return {
      success: true,
      message: "",
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        success: false,
        message: error.issues[0].message,
      };
    } else {
      console.log("error: ", error);
      return {
        success: false,
        message: "Неизвестная ошибка!",
      };
    }
  }
};

export const removeUser = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    if (!user) throw new Error(`Пользователь с id ${id} не найден`);
    await prisma.user.delete({ where: { id: Number(id) } });
    revalidatePath("page");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteUser = async (id: string): Promise<IFormCheckResult> => {
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    if (!user) throw new Error(`Пользователь с id ${id} не найден`);
    await prisma.user.delete({ where: { id: Number(id) } });
    revalidatePath("page");

    return {
      success: true,
      message: "",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Неизвестная ошибка",
    };
  }
};
