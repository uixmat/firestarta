import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { SignOutButton } from "./SignOutButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserRound, UserRoundCog } from "lucide-react";
import { poppins } from "@/lib/utils/fonts";
import Logo from "../brand/Logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { Switch } from "../theme/Switch";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="fixed top-0 z-40 flex w-full transition-all border-b backdrop-blur-xl bg-background/60">
      <div className="container flex items-center h-14 max-w-screen-2xl">
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="flex items-center"
            title="Firestarta - Next.js SaaS Boilerplate"
          >
            <Logo className="h-4 mr-2" />
            <span className={`${poppins.className} text-lime-200`}>
              <b className="text-white">Firestarta</b>.dev
            </span>
          </Link>
          <Link
            href="/users"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Users
          </Link>
        </nav>
        <div className="relative flex items-center justify-between flex-1 gap-2 space-x-2 text-sm md:justify-end">
          <Switch />
          {!session && (
            <>
              <Button asChild size="sm" variant="ghost">
                <Link href="/signin">sign in</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/signup">Get started</Link>
              </Button>
            </>
          )}
          {session && (
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={session?.user?.image as string} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={2} alignOffset={-5}>
                <DropdownMenuLabel>
                  <p>{session?.user?.name}</p>
                  <p className="text-xs font-normal text-foreground/60">
                    {session?.user?.email}
                  </p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/account">
                    <span className="flex items-center gap-1">
                      <UserRoundCog className="h-4" /> Account
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {/* use anchor to avoid intercepting route */}
                  {/* <a href={`/users/${session.user.id}`} rel="prefetch">
                    <span className="flex items-center gap-1">
                      <UserRound className="h-4" /> Profile anchor
                    </span>
                  </a> */}
                  <Link href={`/users/${session.user.id}`}>
                    <span className="flex items-center gap-1">
                      <UserRound className="h-4" /> Profile
                    </span>
                  </Link>
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
