import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { GithubButton } from "@/components/GithubButton";
import { SignOutButton } from "@/components/SignOutButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="fixed top-0 z-40 border-b flex w-full backdrop-blur-xl transition-all bg-background">
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
        </nav>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end gap-6 text-sm relative">
          {session && (
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <Avatar>
                  <AvatarImage src={session?.user?.image as string} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <p>{session?.user?.name}</p>
                  <p className="text-xs font-normal text-foreground/60">
                    {session?.user?.email}
                  </p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/account">Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={`/users/${session.user.id}`}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SignOutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
}
