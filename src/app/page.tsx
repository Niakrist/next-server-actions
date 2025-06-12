import { prisma } from "@/lib/prisma";
import Form from "@/components/Form";
import UserList from "@/components/UserList";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserList users={users} />

      <Form />
    </main>
  );
}
