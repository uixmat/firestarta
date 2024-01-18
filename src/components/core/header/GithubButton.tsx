"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export const GithubButton = () => {
  return (
    <Button size="sm" className="ml-auto" onClick={() => signIn()}>
      <Github className="h-4" /> Sign in
    </Button>
  );
};
