import { NextAuthProvider } from "./providers";

import "@/styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "NextAuth OAuth with Prisma and MongoDB",
  description: "A simple example of how to use NextAuth with OAuth providers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <main className="bg-slate-500">
            <Header />
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
