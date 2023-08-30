import { getUserById, getUsers } from "@/lib/prisma/users";
import User from "./user";

interface PageProps {
  params: {
    userId: string;
  };
}

async function getUser(userId: string) {
  const { user } = await getUserById(userId);
  if (!user) {
    throw new Error("Failed to fetch data");
  }

  return user;
}

const Page = async ({ params }: PageProps) => {
  const user = await getUser(params.userId);

  return <User user={user} />;
};

export default Page;
