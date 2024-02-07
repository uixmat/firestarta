"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/lib/intl/navigation";
import { Languages } from "lucide-react";

export default function Lang() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      <Languages className="h-4" />
      <button onClick={() => switchLocale("en")} aria-label="Switch to English">
        🇬🇧
      </button>
      <button onClick={() => switchLocale("de")} aria-label="Switch to German">
        🇩🇪
      </button>
      <button onClick={() => switchLocale("fr")} aria-label="Switch to French">
        🇫🇷
      </button>
    </div>
  );
}
