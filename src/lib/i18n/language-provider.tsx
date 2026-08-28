"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  getTranslations,
  type Locale,
  type TranslationKey,
} from "./translations";

const LOCALE_STORAGE_KEY = "himoon-locale";

type LanguageContextValue = {
  locale: Locale;
  t: TranslationKey;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored === "id" || stored === "en") {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    document.documentElement.lang = next === "id" ? "id" : "en";
  };

  useEffect(() => {
    document.documentElement.lang = locale === "id" ? "id" : "en";
  }, [locale]);

  if (!mounted) {
    return (
      <LanguageContext.Provider
        value={{ locale: defaultLocale, t: getTranslations(defaultLocale), setLocale }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider
      value={{ locale, t: getTranslations(locale), setLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
