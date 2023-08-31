import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { DeleteAccountButton } from "@/components/DeleteAccountButton";
import { AccountForm } from "@/components/AccountForm";

export default async function AccountPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <h1>Your account</h1>
      <ul>
        <li>Welcome back {session?.user?.name}</li>
        <li>Your email: {session?.user?.email}</li>
      </ul>

      <hr />
      <AccountForm data={session} />

      <pre>
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
      <hr />
      <DeleteAccountButton email={session?.user?.email} />
    </>
  );
}
