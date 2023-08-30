import Link from "next/link";
import { GithubButton } from "@/components/GithubButton";
import { SignOutButton } from "@/components/SignOutButton";

export const Header = () => {
  return (
    <header>
      <h1>NextAuth</h1>
      <p>
        <a href="https://next-auth.js.org/getting-started/example">NextAuth</a>{" "}
        using the OAuth{" "}
        <a href="https://next-auth.js.org/providers/github">Github Provider</a>{" "}
        with both server and client side rendered session data while using
        Next.js 13 <b>app directory</b> and <b>Route Handlers</b>.
      </p>

      <nav>
        <GithubButton />
        <SignOutButton />
        <Link href="/">Home</Link>
        <Link href="/users">Users</Link>
      </nav>
      <hr />
    </header>
  );
};
