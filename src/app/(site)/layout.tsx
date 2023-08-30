import { NextAuthProvider } from "./providers";

import "./globals.scss";
import styles from "./page.module.scss";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "NextAuth OAuth Example",
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
          <main className={styles.main}>
            <Header />
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
