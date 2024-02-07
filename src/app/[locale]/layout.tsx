import { NextAuthProvider } from "@/components/core/provider/NextAuthProvider";
import { Toaster } from "@/components/ui/sonner";
import { poppins } from "@/lib/utils/fonts";

import "@/styles/globals.css";

type LayoutProps = {
  params: { locale: string };
  modal: React.ReactNode;
  children: React.ReactNode;
};

export default function RootLayout({ params, children, modal }: LayoutProps) {
  const { locale } = params;
  return (
    <html
      lang={locale}
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
