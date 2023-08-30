"use client";

import { signOut } from "next-auth/react";

interface Props {
  email: any;
}

export const DeleteAccountButton = ({ email }: Props) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/user/${email}`, {
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
    <button onClick={handleDelete}>
      <span>Delete account for {email}</span>
    </button>
  );
};
