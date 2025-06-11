import { prisma } from "@/lib/prisma";
import Form from "@/components/Form";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Список сотрудников</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>

      <Form />
    </main>
  );
}
