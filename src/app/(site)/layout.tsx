import { NextAuthProvider } from "@/components/core/provider/NextAuthProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/core/header/Header";
import { ThemeProvider } from "@/components/core/provider/ThemeProvider";
import { poppins } from "@/lib/utils/fonts";
import Footer from "@/components/core/footer/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: "Firestarta.dev - Your Next.js bootstrap",
  description:
    "Firestarta.dev is a Next.js bootstrap for your future projects with Authentication, Prisma and Postgres.",
};

export default function DefaultLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`} suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className="min-h-screen font-sans antialiased bg-background">
          <NextAuthProvider>
            <Header />
            {props.children}
            <Footer />
            {props.modal}
            <Toaster position="top-center" richColors />
          </NextAuthProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
