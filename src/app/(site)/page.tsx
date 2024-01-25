import Hero from "@/components/core/hero/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";
import Testimonials from "@/components/marketing/testimonials/Testimonials";
import Features from "@/components/marketing/features/Features";
import type { Metadata } from "next";
import GradientText from "@/components/core/gradient-text/GradientText";

import NextLogo from "@/components/logos/next";
import PrismaLogo from "@/components/logos/prisma";
import ShadcnuiLogo from "@/components/logos/shadcnui";
import SupabaseLogo from "@/components/logos/supabase";
import TailwindLogo from "@/components/logos/tailwind";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: "Firestarta.dev - Your Next.js bootstrap",
  description:
    "Firestarta.dev is a Next.js bootstrap for your future projects with Authentication, Prisma and Postgres.",
};

export default function Home() {
  return (
    <>
      <Hero
        size="lg"
        title={
          <>
            Build faster, <GradientText>build better!</GradientText>
          </>
        }
        description={
          <>
            <p>
              Bootstrap your next application with tools you&apos;re familiar
              with.
            </p>
            <p>
              Built on Next.js & Prisma for scalability with full authentication
              using NextAuth out the box.
            </p>
          </>
        }
      >
        <div className="relative flex flex-wrap items-center justify-center gap-12 p-6 mb-10 text-xl">
          <div className="absolute h-[1px] w-[80vw] min-w-[800px] max-w-[1000px] top-0 left-50 border-1 border-t border-dashed hidden md:block" />
          <div className="absolute h-[1px] w-[80vw] min-w-[800px] max-w-[1000px] bottom-0 left-50 border-1 border-t border-dashed hidden md:block" />
          <div className="absolute h-[calc(100%+100px)] w-[1px] top-50 right-0 border-1 border-r border-dashed hidden md:block" />
          <NextLogo />
          <PrismaLogo />
          <SupabaseLogo />
          <ShadcnuiLogo />
          <TailwindLogo />
        </div>
        <Button asChild>
          <Link href="https://github.com/mattsince87/nextauth-prisma">
            <Github className="h-4" />
            Get started now
          </Link>
        </Button>
      </Hero>

      <div className="container">
        <Features />
        <Testimonials />
      </div>
    </>
  );
}
