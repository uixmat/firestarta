import { NextAuthProvider } from "./providers";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/core/header/Header";
import { ThemeProvider } from "@/components/core/provider/ThemeProvider";

export const metadata: Metadata = {
  title: "NextAuth OAuth with Prisma and Postgres",
  description: "A simple example of how to use NextAuth with OAuth providers.",
};

const poppins = Poppins({
  weight: ["500", "600"],
  subsets: ["latin-ext"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <ThemeProvider>
        <body className="min-h-screen font-sans antialiased bg-background">
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
