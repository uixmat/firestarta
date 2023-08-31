"use client";

import { getUserByEmail } from "@/lib/prisma/users";

interface Props {
  email: any;
}

export const DatabaseUser = ({ email }: Props) => {
  const user = getUserByEmail(email);
  console.log("user", user);
  return (
    <>
      <p>
        <i>User from database</i>
      </p>
      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
    </>
  );
};
