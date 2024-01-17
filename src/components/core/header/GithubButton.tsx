"use client";
import { signIn } from "next-auth/react";

export const GithubButton = () => {
  return <button onClick={() => signIn()}>Sign in with Github</button>;
};
