import { NextAuthProvider } from "./providers";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/core/header/Header";
import { ThemeProvider } from "@/components/core/provider/ThemeProvider";
import { poppins } from "@/lib/utils/fonts";

export const metadata: Metadata = {
  title: "Firestarta.dev - Your Next.js bootstrap",
  description:
    "Firestarta.dev is a Next.js bootstrap for your future projects with Authentication, Prisma and Postgres.",
};

export default function DefaultLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <ThemeProvider>
        <body className="min-h-screen font-sans antialiased bg-background">
          <NextAuthProvider>
            <Header />
            {props.children}
            {props.modal}
            <Toaster position="top-center" />
          </NextAuthProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
