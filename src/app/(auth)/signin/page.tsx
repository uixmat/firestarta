import Link from "next/link";
import { poppins } from "@/lib/utils/fonts";
import Logo from "@/components/core/brand/Logo";
import AuthForm from "@/components/core/forms/AuthForm";

export default function Signup() {
  return (
    <div className="container relative flex-col items-center justify-center h-dvh md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative flex-col hidden h-full p-10 text-white bg-muted lg:flex dark:border-r">
        <Link
          href="/"
          className="flex items-center"
          title="Firestarta - Next.js SaaS Boilerplate"
        >
          <Logo className="h-4 mr-2" />
          <span
            className={`${poppins.className} dark:text-lime-200 text-lime-500`}
          >
            <b className="text-gray-800 dark:text-white">Firestarta</b>
            <span className="hidden md:inline">.dev</span>
          </span>
        </Link>
      </div>
      <div className="flex items-center justify-center h-full p-10">
        <AuthForm variant="signin" />
      </div>
    </div>
  );
}
