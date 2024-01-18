import Hero from "@/components/core/hero/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";

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
        <Button asChild>
          <Link href="https://github.com/mattsince87/nextauth-prisma">
            <Github className="h-4" />
            Get started now
          </Link>
        </Button>
      </Hero>

      <div className="container">
        <p>Hello</p>
      </div>
    </>
  );
}
