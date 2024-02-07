import { Link } from "@/lib/intl/navigation";
import Logo from "@/components/core/brand/Logo";
import AuthForm from "@/components/core/forms/AuthForm";
import type { Metadata } from "next";
import styles from "./page.module.scss";
import { Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: "Firestarta.dev - Sign in / Sign up",
  description:
    "Sign in or create an account with the options priovided to get started with Firestarta.dev.",
};

export default function SigninPage() {
  return (
    <div className="container relative flex-col items-center justify-center h-dvh md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div
        className={`relative justify-center flex-col hidden h-full p-10 text-white lg:flex ${styles.bgGrid}`}
      >
        <Link
          href="/"
          className="flex items-center"
          title="Firestarta - Next.js SaaS Boilerplate"
        >
          <Logo className="h-[120px] mr-2" />
        </Link>
      </div>
      <div className="flex items-center justify-center h-full p-10">
        <Button asChild className="absolute top-3 right-3" variant="ghost">
          <Link href="/">
            <Undo2 className="w-4 h-4 mr-2" /> Go back
          </Link>
        </Button>
        <AuthForm variant="signin" />
      </div>
    </div>
  );
}
