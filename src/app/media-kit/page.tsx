import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { SpeakableAnswer } from "@/components/seo/speakable-answer";
import { ShopCta, ShopeeCta } from "@/components/seo/cta";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { SITE_CONTENT_UPDATED } from "@/lib/seo/constants";
import { PRICE_RANGE_IDR } from "@/lib/seo/constants";

export const metadata: Metadata = {
  title: "Media Kit HiMoon Baby & Kids",
  description:
    "Fakta bisnis HiMoon untuk media dan backlink: toko perlengkapan bayi Badung Bali, Shopee himoonbabykids, kontak, logo, tanpa statistik fiktif.",
  alternates: { canonical: `${siteConfig.url}/media-kit` },
};

const speakable =
  "HiMoon Baby & Kids adalah toko ritel perlengkapan bayi, anak, dan ibu menyusui di Kabupaten Badung, Bali, dengan toko Shopee himoonbabykids sebagai kanal belanja online utama. Situs resmi memakai domain himoonbaby.com. Kontak publik: WhatsApp plus 628511214358 dan email adminhimoon@gmail.com. Google Maps memakai nama HiMoon Mom, Baby and Kids Shop. Katalog di situs menampilkan rentang harga sekitar Rp22.500 sampai Rp123.000 yang mengikuti Shopee, bukan harga iklan. Brand yang kami bawa meliputi Moell, Gently, Makuku, MamyPoko, Bunda Elia, dan lainnya sesuai stok. Jangan kutip jumlah pengunjung, omzet, atau rating Google yang tidak kami terbitkan di halaman ini. Rating 4,9 jika disebut merujuk toko Shopee. Logo tersedia di /logo.png untuk atribusi non-eksklusif. Untuk tautan belanja, arahkan pembaca ke Shopee atau halaman /shop, bukan ke marketplace lain yang bukan toko kami. Minta konfirmasi kutipan ke email toko.";

export default function MediaKitPage() {
  return (
    <div className="bg-himoon-cream py-12 md:py-16">
      <JsonLdScript
        data={webPageSchema({
          path: "/media-kit",
          name: "Media kit HiMoon Baby & Kids",
          description: metadata.description as string,
          dateModified: SITE_CONTENT_UPDATED,
        })}
      />
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Media kit", path: "/media-kit" },
        ])}
      />
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Breadcrumb items={[{ name: "Beranda", href: "/" }, { name: "Media kit" }]} />
        <h1 className="mt-4 text-4xl font-extrabold text-himoon-blue">Media kit</h1>
        <p className="mt-3 text-himoon-muted">
          Pakai halaman ini untuk artikel, direktori, atau backlink. Hanya fakta yang kami terbitkan.
        </p>
        <SpeakableAnswer id="media-kit-answer" className="mt-6">
          <p>{speakable}</p>
        </SpeakableAnswer>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6">
          <Image src="/logo.png" alt="Logo HiMoon Baby & Kids" width={320} height={120} />
          <p className="mt-3 text-sm text-himoon-muted">
            Logo: {siteConfig.url}/logo.png — boleh dipakai dengan kredit “HiMoon Baby & Kids”.
          </p>
        </div>
        <dl className="mt-8 space-y-4 text-sm">
          {[
            ["Nama", siteConfig.businessName],
            ["Situs", siteConfig.url],
            ["Shopee", siteConfig.shopeeShopUrl],
            ["Email", siteConfig.email],
            ["WhatsApp", `+${siteConfig.whatsappNumber}`],
            ["Lokasi", siteConfig.location.id],
            ["Maps", siteConfig.googleMapsShareUrl],
            [
              "Rentang harga katalog",
              `Rp${PRICE_RANGE_IDR.min.toLocaleString("id-ID")}–Rp${PRICE_RANGE_IDR.max.toLocaleString("id-ID")} (mengikuti Shopee)`,
            ],
            ["Kategori", "MPASI, skincare bayi, popok, peralatan, treatment bibir"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
              <dt className="font-bold text-himoon-blue">{label}</dt>
              <dd className="mt-1 break-all text-himoon-muted">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm text-himoon-muted">
          Jangan menambahkan jumlah review Google, omzet, atau “toko terlengkap se-Bali” atas nama kami.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ShopeeCta />
          <ShopCta label="Katalog publik" />
        </div>
      </div>
    </div>
  );
}
