import { getServerSession } from "next-auth";
import Link from "next/link";
import { GithubButton } from "@/components/GithubButton";
import { SignOutButton } from "@/components/SignOutButton";

export default async function Header() {
  const session = await getServerSession();
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
        {!session && <GithubButton />}
        {session && <SignOutButton />}
        <Link href="/">Home</Link>
        <Link href="/users">Users</Link>
        {session && <Link href="/account">Account</Link>}
      </nav>
      <hr />
    </header>
  );
}
