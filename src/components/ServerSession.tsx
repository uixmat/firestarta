import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function ServerSession() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>Server Session</h1>
      <p>This data is rendered at build time using server side rendering.</p>
      {session ? (
        <ul>
          <li>Signed in as: {session?.user?.name}</li>
          <li>Email: {session?.user?.email}</li>
        </ul>
      ) : (
        <p className="notice">No session, please sign in.</p>
      )}
      <code>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </code>
    </div>
  );
}
