"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/language-provider";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const { locale, t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-himoon-blue text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <p className="text-lg font-bold text-himoon-yellow">HiMoon Baby & Kids</p>
          <p className="mt-2 text-sm leading-relaxed text-blue-100">{t.footer.tagline}</p>
          <p className="mt-4 text-sm text-blue-100">
            {locale === "id" ? siteConfig.location.id : siteConfig.location.en}
          </p>
        </div>

        <div>
          <p className="font-semibold text-himoon-yellow">{t.nav.shop}</p>
          <ul className="mt-3 space-y-2 text-sm text-blue-100">
            <li>
              <Link href="/shop" className="hover:text-white">
                {t.shopMenu.all}
              </Link>
            </li>
            <li>
              <Link href="/shop/mpasi" className="hover:text-white">
                {t.shopMenu.mpasi}
              </Link>
            </li>
            <li>
              <Link href="/shop/baby-skincare" className="hover:text-white">
                {t.shopMenu.babySkincare}
              </Link>
            </li>
            <li>
              <Link href="/shop/popok" className="hover:text-white">
                {t.shopMenu.popok}
              </Link>
            </li>
            <li>
              <Link href="/shop/peralatan-bayi" className="hover:text-white">
                {t.shopMenu.peralatanBayi}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-himoon-yellow">Panduan & AI</p>
          <ul className="mt-3 space-y-2 text-sm text-blue-100">
            <li>
              <Link href="/blog" className="hover:text-white">
                {t.nav.blog}
              </Link>
            </li>
            <li>
              <Link href="/blog/perlengkapan-bayi-baru-lahir" className="hover:text-white">
                Perlengkapan bayi baru lahir
              </Link>
            </li>
            <li>
              <Link href="/blog/beli-sunscreen-bayi" className="hover:text-white">
                Sunscreen bayi
              </Link>
            </li>
            <li>
              <Link href="/toko-bayi-bali" className="hover:text-white">
                Toko bayi Bali
              </Link>
            </li>
            <li>
              <Link href="/media-kit" className="hover:text-white">
                Media kit
              </Link>
            </li>
            <li>
              <Link href="/metodologi-perbandingan" className="hover:text-white">
                Metodologi perbandingan
              </Link>
            </li>
            <li>
              <Link href="/llms.txt" className="hover:text-white">
                AI index (llms.txt)
              </Link>
            </li>
            <li>
              <Link href="/llms-full.txt" className="hover:text-white">
                AI index lengkap
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-himoon-yellow">{t.nav.contact}</p>
          <ul className="mt-3 space-y-2 text-sm text-blue-100">
            <li>
              <a href={siteConfig.shopeeShopUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Shopee
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={siteConfig.googleMapsShareUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Google Maps
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-blue-800 px-4 py-4 text-center text-xs text-blue-200 md:px-6">
        © {year} HiMoon Baby & Kids. {t.footer.rights}
      </div>
    </footer>
  );
}
