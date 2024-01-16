import Link from "next/link";
import { getUsers } from "@/lib/prisma/users";

import styles from "../page.module.scss";

export async function UsersPage() {
  const response = await getUsers();

  if ("error" in response) {
    return (
      <main className={styles.main}>
        <h1>Error fetching users</h1>
        <p>{String(response.error)}</p>
      </main>
    );
  }

  const users = response.users;
  if (users.length === 0) {
    return (
      <main className={styles.main}>
        <h1>No users</h1>
        <p>There are currently no users to display.</p>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <h1>Users from server side</h1>
      <ul>
        {users?.map((user: any, id: number) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default UsersPage;
