import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { DeleteAccountButton } from "@/components/DeleteAccountButton";
import { AccountForm } from "@/components/AccountForm";
import ClientSession from "@/components/ClientSession";

export default async function AccountPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <h1>Welcome back {session?.user?.name}</h1>
      <p>Your email: {session?.user?.email}</p>
      <p>
        <i>
          Data from next auth server session using{" "}
          <code>getServerSession()</code>
        </i>
      </p>

      <hr />
      <h2>Update profile in database</h2>
      <AccountForm data={session} />

      <hr />
      <h2>Next Auth Server Session</h2>
      <pre>
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
      <hr />
      <DeleteAccountButton email={session?.user?.email} />
    </>
  );
}
