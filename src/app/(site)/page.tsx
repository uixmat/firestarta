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
import FAQs from "@/components/marketing/faqs/FAQs";
import International from "@/components/marketing/international/International";
import LemonSqueezyLogo from "@/components/logos/lemonsqueezy";

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
        <div className="relative grid items-center justify-center grid-cols-2 gap-12 p-6 mb-10 text-xl md:grid-cols-3 lg:grid-cols-6">
          <NextLogo className="max-w-full" />
          <PrismaLogo className="max-w-full" fill="currentColor" />
          <SupabaseLogo className="max-w-full" variant="color" />
          <ShadcnuiLogo className="max-w-full" fill="currentColor" />
          <TailwindLogo className="max-w-full" variant="color" />
          <LemonSqueezyLogo className="max-w-full" variant="color" />
        </div>
        <Button asChild>
          <Link href="https://github.com/mattsince87/nextauth-prisma">
            <Github className="h-4" />
            Start your SaaS now!
          </Link>
        </Button>
      </Hero>

      <div className="container">
        <Features />
        <Integrations />
        <Databases />
        <International />
        <Testimonials />
        <FAQs />
      </div>
    </>
  );
}
