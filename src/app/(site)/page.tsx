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
            <p className="text-lg text-pretty">
              Bootstrap your next SaaS application using tools you&apos;re
              familiar with.
            </p>
          </>
        }
      >
        <div className="relative grid grid-cols-2 gap-12 p-6 mb-10 text-xl md:grid-cols-3 lg:grid-cols-6">
          <div className="flex items-center justify-center">
            <NextLogo className="max-w-full" />
          </div>
          <div className="flex items-center justify-center">
            <PrismaLogo className="max-w-full" fill="currentColor" />
          </div>
          <div className="flex items-center justify-center">
            <SupabaseLogo className="max-w-full" variant="color" />
          </div>
          <div className="flex items-center justify-center">
            <ShadcnuiLogo className="max-w-full" fill="currentColor" />
          </div>
          <div className="flex items-center justify-center">
            <TailwindLogo className="max-w-full" variant="color" />
          </div>
          <div className="flex items-center justify-center">
            <LemonSqueezyLogo className="max-w-full" variant="color" />
          </div>
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
