"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "@/lib/i18n/language-provider";
import { shopCategories } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const categoryMenuLabels: Record<(typeof shopCategories)[number]["slug"], string> = {
    mpasi: t.shopMenu.mpasi,
    "perawatan-kulit-bayi": t.shopMenu.babySkincare,
    popok: t.shopMenu.popok,
    "peralatan-bayi": t.shopMenu.peralatanBayi,
    "perawatan-bibir": t.shopMenu.treatmentBibir,
  };

  const shopLinks = [
    { href: "/shop", label: t.shopMenu.all },
    ...shopCategories.map((category) => ({
      href: `/shop/${category.slug}`,
      label: categoryMenuLabels[category.slug],
    })),
  ];

  const navLinks = [
    { href: "/about", label: t.nav.about },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt="HiMoon Baby & Kids"
            width={140}
            height={48}
            className="h-10 w-auto object-contain md:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.slice(0, 1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-himoon-blue transition-colors hover:text-himoon-yellow"
            >
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-semibold text-himoon-blue transition-colors hover:text-himoon-yellow"
              aria-expanded={shopOpen}
            >
              {t.nav.shop}
              <ChevronDown className="h-4 w-4" />
            </button>
            {shopOpen ? (
              <div className="absolute left-0 top-full z-50 min-w-[220px] rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
                {shopLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-himoon-blue hover:bg-himoon-cream"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-himoon-blue transition-colors hover:text-himoon-yellow"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden sm:flex" />
          <button
            type="button"
            className="rounded-lg p-2 text-himoon-blue lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <LanguageSwitcher className="mb-4" />
          <div className="flex flex-col gap-1">
            <Link
              href="/about"
              className="rounded-lg px-3 py-2 font-semibold text-himoon-blue hover:bg-himoon-cream"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.about}
            </Link>
            <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-himoon-muted">
              {t.nav.shop}
            </p>
            {shopLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-5 py-2 text-sm text-himoon-blue hover:bg-himoon-cream"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn("rounded-lg px-3 py-2 font-semibold text-himoon-blue hover:bg-himoon-cream")}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
