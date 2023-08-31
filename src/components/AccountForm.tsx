"use client";

// import { signOut } from "next-auth/react";

interface Props {
  data: any;
}

export const AccountForm = ({ data }: Props) => {
  // const handleDelete = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:3000/api/user/${email}`, {
  //       method: "DELETE",
  //     });
  //     if (response.ok) {
  //       console.log("Account deleted");
  //       signOut();
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <div>
      <div>
        <input type="text" placeholder={data.user.name} />
      </div>
      <div>
        <input type="email" readOnly placeholder={data.user.email} />
      </div>
      <div>
        <input type="text" placeholder="Job title" />
      </div>
    </div>
  );
};
