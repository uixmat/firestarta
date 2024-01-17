import { getServerSession } from "next-auth";
import Link from "next/link";
import { GithubButton } from "@/components/GithubButton";
import { SignOutButton } from "@/components/SignOutButton";

export default async function Header() {
  const session = await getServerSession();
  return (
    <header className="sticky top-0 z-40 border-b flex w-full backdrop-blur-xl transition-all bg-background">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Home
          </Link>
          <Link
            href="/users"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Users
          </Link>
          {!session && <GithubButton />}
          {session && <SignOutButton />}
        </nav>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end gap-6 text-sm">
          {session && (
            <Link
              href="/account"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Account
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
