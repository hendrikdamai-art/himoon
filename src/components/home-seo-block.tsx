import Link from "next/link";
import { getGuides } from "@/lib/seo/guides";
import { SpeakableAnswer } from "@/components/seo/speakable-answer";
import { ShopCta, ShopeeCta } from "@/components/seo/cta";

const HOME_SPEAKABLE =
  "HiMoon Baby & Kids adalah toko perlengkapan bayi di Kabupaten Badung, Bali. Target pelanggan kami ibu hamil, new mom, dan siapa pun yang mencari MPASI, popok, sunscreen bayi, atau peralatan makan. Belanja di toko fisik, WhatsApp, atau Shopee himoonbabykids — jalur checkout yang kami utamakan adalah Shopee agar stok dan ongkir selalu live. Harga katalog situs sekitar Rp22.500 sampai Rp123.000. Halaman belanja utama ada di /shop. Kami tidak menampilkan rating palsu; angka 4,9 merujuk toko Shopee. Untuk pertanyaan lokasi, buka Google Maps di halaman kontak. Brand yang sering dicari meliputi Moell, Gently, Makuku, MamyPoko, dan Bunda Elia sesuai stok. Panduan komersial di blog menjawab satu kueri masing-masing lalu menaut ke katalog. Pengiriman ke luar Bali hanya melalui Shopee. Ini toko ritel, bukan klinik anak atau konselor laktasi. Mulai dari halaman belanja lalu Shopee.";

export function HomeSeoBlock() {
  const guides = getGuides().slice(0, 6);

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-bold text-himoon-blue">
          Belanja niat tinggi: dari Google ke Shopee
        </h2>
        <SpeakableAnswer id="home-direct-answer" className="mt-6">
          <p>{HOME_SPEAKABLE}</p>
        </SpeakableAnswer>
        <div className="mt-6 flex flex-wrap gap-3">
          <ShopCta label="Buka halaman belanja (money page)" />
          <ShopeeCta />
        </div>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/blog/${guide.slug}`}
                className="block rounded-xl border border-slate-200 p-4 hover:border-himoon-yellow"
              >
                <p className="text-xs font-bold uppercase text-himoon-yellow">{guide.query.id}</p>
                <p className="mt-1 font-semibold text-himoon-blue">{guide.title.id}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
