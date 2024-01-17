"use client";
import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return <button onClick={() => signOut()}>Sign out</button>;
};
