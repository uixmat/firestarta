import Link from "next/link";
import { getUsers } from "@/lib/prisma/users";

export async function UsersPage() {
  const response = await getUsers();

  if ("error" in response) {
    return (
      <>
        <h1>Error fetching users</h1>
        <p>{String(response.error)}</p>
      </>
    );
  }

  const users = response.users;
  if (users.length === 0) {
    return (
      <>
        <h1>No users</h1>
        <p>There are currently no users to display.</p>
      </>
    );
  }

  return (
    <>
      <h1>Users from server side</h1>
      <ul>
        {users?.map((user: any, id: number) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UsersPage;
