import React from "react";

interface UserProps {
  user: any;
}

const User = ({ user }: UserProps) => {
  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </>
  );
};

export default User;
