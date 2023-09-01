"use client";
import { useSession } from "next-auth/react";

export const ClientSession = () => {
  const { data: session, status } = useSession();
  console.log("Client session", status);

  return (
    <>
      <h1>Client Session</h1>
      <p>This data is rendered client side and a small delay may occur.</p>
      {!session && <p className="notice">No session, please sign in.</p>}
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
};

export default ClientSession;
