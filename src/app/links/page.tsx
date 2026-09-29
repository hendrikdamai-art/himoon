import type { Metadata } from "next";
import Image from "next/image";
import {
  ChevronRight,
  Globe,
  Instagram,
  MapPin,
  MessageCircle,
  ShoppingBag,
  Store,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "HiMoon Baby & Kids Shop",
  description:
    "Tautan resmi HiMoon Baby & Kids Shop — website, Shopee, WhatsApp, Instagram, dan Tokopedia.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  alternates: { canonical: `${siteConfig.url}/links` },
  openGraph: {
    title: "HiMoon Baby & Kids Shop",
    description: "Toko perlengkapan bayi di Abianbase, Mengwi, Badung.",
    url: `${siteConfig.url}/links`,
    images: ["/logo.png"],
  },
};

const links = [
  {
    href: siteConfig.url,
    label: "Website",
    hint: "himoonbaby.com",
    icon: Globe,
    iconClass: "bg-himoon-blue text-white",
  },
  {
    href: siteConfig.shopeeShopUrl,
    label: "Shopee",
    hint: "himoonbabykids",
    icon: ShoppingBag,
    iconClass: "bg-[#EE4D2D] text-white",
  },
  {
    href: siteConfig.whatsappProfileUrl,
    label: "WhatsApp",
    hint: "Chat pesanan & stok",
    icon: MessageCircle,
    iconClass: "bg-[#25D366] text-white",
  },
  {
    href: siteConfig.social.instagram,
    label: "Instagram",
    hint: "@admin.himoon",
    icon: Instagram,
    iconClass: "bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] text-white",
  },
  {
    href: siteConfig.social.tokopedia,
    label: "Tokopedia",
    hint: "HiMoon Baby & Kids Shop",
    icon: Store,
    iconClass: "bg-[#03AC0E] text-white",
  },
] as const;

export default function LinksPage() {
  return (
    <div className="relative flex min-h-dvh flex-col items-center px-5 pb-16 pt-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,166,35,0.22)_0%,_transparent_46%),linear-gradient(180deg,_#fffdf9_0%,_#f7f1e8_100%)]"
      />

      <main className="relative z-10 w-full max-w-[400px]">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-[28px] bg-white p-4 shadow-[0_16px_40px_rgba(30,58,95,0.10)] ring-1 ring-himoon-blue/10">
            <Image
              src="/logo.png"
              alt="HiMoon Baby & Kids Shop"
              width={220}
              height={220}
              className="h-[132px] w-[132px] object-contain"
              priority
            />
          </div>
          <h1 className="mt-6 text-[1.7rem] font-extrabold leading-tight tracking-tight text-himoon-blue">
            HiMoon Baby & Kids Shop
          </h1>
          <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-himoon-muted">
            <MapPin className="h-3.5 w-3.5 text-himoon-yellow" strokeWidth={2.4} />
            Abianbase, Mengwi, Badung
          </p>
          <p className="mt-3 max-w-[18rem] text-[13px] leading-relaxed text-himoon-muted">
            Toko perlengkapan bayi, anak &amp; ibu menyusui. Belanja via Shopee atau datang ke toko.
          </p>
        </div>

        <ul className="mt-8 space-y-3">
          {links.map((link) => {
            const Icon = link.icon;
            const isWebsite = link.href === siteConfig.url;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={isWebsite ? undefined : "_blank"}
                  rel={isWebsite ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-3.5 rounded-2xl border border-white/80 bg-white/90 px-3.5 py-3 shadow-[0_8px_24px_rgba(30,58,95,0.06)] ring-1 ring-slate-200/70 backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(30,58,95,0.10)]"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${link.iconClass}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <span className="min-w-0 flex-1 text-left">
                    <span className="block text-[15px] font-extrabold leading-none text-himoon-blue">
                      {link.label}
                    </span>
                    <span className="mt-1 block truncate text-xs font-semibold text-himoon-muted">
                      {link.hint}
                    </span>
                  </span>
                  <ChevronRight
                    className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-himoon-yellow"
                    strokeWidth={2.4}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
