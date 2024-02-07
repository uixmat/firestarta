import { NextAuthProvider } from "@/components/core/provider/NextAuthProvider";
import { Toaster } from "@/components/ui/sonner";
import { poppins } from "@/lib/utils/fonts";
import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: "Firestarta.dev - Your Next.js bootstrap",
  description:
    "Firestarta.dev is a Next.js bootstrap for your future projects with Authentication, Prisma and Postgres.",
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({
  children,
  params,
  modal,
}: LocaleLayoutProps) {
  return (
    <html
      lang={params.locale}
      className={`${poppins.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans antialiased bg-background dark">
        <NextAuthProvider>
          {children}
          {modal}
          <Toaster position="top-center" richColors />
        </NextAuthProvider>
      </body>
    </html>
  );
}
