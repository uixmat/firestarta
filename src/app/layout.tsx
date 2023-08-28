import { NextAuthProvider } from "./providers";

import "./globals.scss";
import type { Metadata } from "next";

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
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
