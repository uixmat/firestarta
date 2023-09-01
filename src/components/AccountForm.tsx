"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Props {
  data: any;
}

export const AccountForm = ({ data }: Props) => {
  const [name, setName] = useState(data.user.name || "");
  const [jobTitle, setJobTitle] = useState(data.user.jobTitle || "");

  const { data: session, update } = useSession();
  const router = useRouter();

  const updateUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/api/user/${data.user.email}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, jobTitle }), // Addint jobTitle breaks the request
        }
      );
      console.log("HTTP Response: ", response);
      if (response.ok) {
        await update({ name, jobTitle });
        router.refresh();
      } else {
        console.log("Failed to update user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={updateUser}>
      <ul>
        <li>Name: {session?.user?.name}</li>
        <li>Job: {session?.user?.jobTitle}</li>
      </ul>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Add a job title"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
