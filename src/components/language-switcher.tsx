"use client";

import { useLanguage } from "@/lib/i18n/language-provider";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/translations";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  const toggle = (next: Locale) => setLocale(next);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Globe className="h-4 w-4 text-himoon-muted" aria-hidden />
      <span className="sr-only">{t.language}</span>
      <button
        type="button"
        onClick={() => toggle("id")}
        className={cn(
          "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
          locale === "id"
            ? "bg-himoon-blue text-white"
            : "text-himoon-muted hover:text-himoon-blue",
        )}
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => toggle("en")}
        className={cn(
          "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
          locale === "en"
            ? "bg-himoon-blue text-white"
            : "text-himoon-muted hover:text-himoon-blue",
        )}
      >
        EN
      </button>
    </div>
  );
}
