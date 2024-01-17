import { NextAuthProvider } from "./providers";

import "@/styles/globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/core/header/Header";
import { ThemeProvider } from "@/components/core/provider/ThemeProvider";

export const metadata: Metadata = {
  title: "NextAuth OAuth with Prisma and Postgres",
  description: "A simple example of how to use NextAuth with OAuth providers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="min-h-screen bg-background font-sans antialiased">
          <NextAuthProvider>
            <Header />
            {children}
            <Toaster position="top-center" />
          </NextAuthProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
