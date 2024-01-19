import Hero from "@/components/core/hero/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";
import Testimonials from "@/components/marketing/testimonials/Testimonials";
import Features from "@/components/marketing/features/Features";

export default function Home() {
  return (
    <>
      <Hero
        size="lg"
        title={
          <>
            Build faster,{" "}
            <b className="text-transparent bg-clip-text bg-gradient bg-gradient-to-r from-lime-200 to-yellow-50">
              build better!
            </b>
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
        <div className="relative flex flex-wrap items-center justify-center gap-12 p-6 mb-10">
          <div className="absolute h-[1px] w-[80vw] min-w-[800px] max-w-[1000px] top-0 left-50 border-1 border-t border-dashed hidden md:block" />
          <div className="absolute h-[1px] w-[80vw] min-w-[800px] max-w-[1000px] bottom-0 left-50 border-1 border-t border-dashed hidden md:block" />
          <div className="absolute h-[calc(100%+100px)] w-[1px] top-50 right-0 border-1 border-r border-dashed hidden md:block" />
          <Image
            src="/logos/nextjs.svg"
            alt="Next.js"
            width={100}
            height={20}
          />
          <Image src="/logos/prisma.svg" alt="Prisma" width={120} height={47} />
          <Image
            src="/logos/shadcnui.svg"
            alt="shadcn/ui"
            width={124}
            height={20}
          />
          <Image
            src="/logos/tailwindcss.svg"
            alt="Tailwind CSS"
            width={130}
            height={21}
          />
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
