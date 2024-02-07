import { NextAuthProvider } from "@/components/core/provider/NextAuthProvider";
import { Toaster } from "@/components/ui/sonner";
import { poppins } from "@/lib/utils/fonts";

import "@/styles/globals.css";

// interface LocaleLayoutProps {
//   children: React.ReactNode;
//   modal: React.ReactNode;
//   // params: { locale: string };
// }

export default function LocaleLayout({
  children,
  // params,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html
      // lang={params.locale}
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
