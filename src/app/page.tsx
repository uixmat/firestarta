import ServerSession from "@/components/ServerSession";
import ClientSession from "@/components/ClientSession";

import { GithubButton } from "@/components/GithubButton";
import { SignOutButton } from "@/components/SignOutButton";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>NextAuth</h1>
      <p>
        <a href="https://next-auth.js.org/getting-started/example">NextAuth</a>{" "}
        using the OAuth{" "}
        <a href="https://next-auth.js.org/providers/github">Github Provider</a>{" "}
        with both server and client side rendered session data while using
        Next.js 13 <b>app directory</b> and <b>Route Handlers</b>.
      </p>
      <GithubButton />
      <SignOutButton />
      <hr />
      <ServerSession />
      <hr />
      <ClientSession />
    </main>
  );
}
