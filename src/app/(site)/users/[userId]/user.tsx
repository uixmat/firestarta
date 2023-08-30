import React from "react";
import styles from "../../page.module.scss";

interface UserProps {
  user: any;
}

const User = ({ user }: UserProps) => {
  return (
    <div className={styles.main}>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default User;
