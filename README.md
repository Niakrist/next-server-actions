This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev



prisma.io
1. https://www.prisma.io/orm
2. Quickstart
3. Устанавливаем Prisma
npm install prisma --save-dev

4.Выбираем БД
npx prisma init --datasource-provider sqlite
--output: указывает путь к директории, в которую Prisma CLI должен поместить сгенерированный клиент Prisma и другие файлы.
../generated/prisma: относительный путь к директории.

5. В проекте сгеренируется файл prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
  output   = "../generated/prisma"
}
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

6. Описываем модель в prisma/schema.prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  password String
}

7. Создать таблицы в БД на основании модели
npx prisma db push
Создастся файл dev.db

8. Визуальное отображение таблицы на localhost:5555
npx prisma studio

9. npm install @prisma/client
инструмента для работы с базами данных в приложениях на Node.js и TypeScript.

10. Best practices for using Prisma Client in development
https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help

10.1. Копируем PrismaClient lib/prisma.ts
import { PrismaClient } from "@/generated/prisma";
const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

!! Важно! следить откуда импортируем PrismaClient


11. Теперь можно использовать PrismaClient
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany()
}

```
