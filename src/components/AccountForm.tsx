"use client";

import { useState } from "react";
interface Props {
  data: any;
}

export const AccountForm = ({ data }: Props) => {
  const [name, setName] = useState(data.user.name || "");
  const [jobTitle, setJobTitle] = useState("");

  const updateUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(name, jobTitle);
      console.log(
        "Fetch URL:",
        `http://localhost:3000/api/user/${data.user.email}`
      );
      console.log("Sending request body: ", JSON.stringify({ name, jobTitle }));
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
        const result = await response.json();
        console.log("Account updated");
        console.log("Server says: ", result);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={updateUser}>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={data.user.name}
        />
      </div>
      <div>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Job title"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
