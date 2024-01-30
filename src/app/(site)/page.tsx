import Hero from "@/components/core/hero/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
import type { Metadata } from "next";
import GradientText from "@/components/core/gradient-text/GradientText";

import NextLogo from "@/components/logos/next";
import PrismaLogo from "@/components/logos/prisma";
import ShadcnuiLogo from "@/components/logos/shadcnui";
import SupabaseLogo from "@/components/logos/supabase";
import TailwindLogo from "@/components/logos/tailwind";

import Features from "@/components/marketing/features/Features";
import Testimonials from "@/components/marketing/testimonials/Testimonials";
import Integrations from "@/components/marketing/integrations/Integrations";
import Databases from "@/components/marketing/databases/Databases";

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
        title="Build faster, build better!"
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
          <NextLogo />
          <PrismaLogo fill="currentColor" />
          <SupabaseLogo fill="currentColor" />
          <ShadcnuiLogo fill="currentColor" />
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
        <Integrations />
        <Databases />
        <Testimonials />
      </div>
    </>
  );
}
