import { NextAuthProvider } from "@/components/core/provider/NextAuthProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/core/provider/ThemeProvider";
import { poppins } from "@/lib/utils/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: "Firestarta.dev",
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
            {props.children}
            <Toaster position="top-center" />
          </NextAuthProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
