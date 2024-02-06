"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

interface Props {
  email: any;
}

export const DeleteAccountButton = ({ email }: Props) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/user/${email}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Account deleted");
        signOut();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Button onClick={handleDelete} variant="destructive">
      Delete account
      <span className="hidden ml-1 sm:inline">for {email}</span>
    </Button>
  );
};
