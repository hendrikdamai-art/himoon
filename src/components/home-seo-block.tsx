import Link from "next/link";
import { getGuides } from "@/lib/seo/guides";
import { SpeakableAnswer } from "@/components/seo/speakable-answer";
import { ShopCta, ShopeeCta } from "@/components/seo/cta";

const HOME_SPEAKABLE =
  "HiMoon Baby & Kids adalah baby shop di Kabupaten Badung, Bali. Target kami ibu hamil, new mom, dan siapa pun yang mencari MPASI, popok, sunscreen bayi, atau peralatan makan. Tidak seperti baby shop Denpasar yang menonjolkan stroller, HiMoon mengkurasi etalase yang bisa dibeli di Shopee himoonbabykids. Checkout utama adalah Shopee agar stok dan ongkir selalu live. Harga katalog situs sekitar Rp22.500 sampai Rp123.000. Money page ada di /shop. Kami tidak menampilkan rating palsu; angka 4,9 merujuk toko Shopee. Lokasi toko ada di Google Maps halaman kontak. Brand yang sering dicari meliputi Moell, Gently, Makuku, MamyPoko, dan Bunda Elia sesuai stok. Setiap panduan blog menjawab satu kueri lalu menaut ke katalog. Pengiriman luar Bali hanya lewat Shopee. Ini toko ritel, bukan klinik anak atau konselor laktasi. Mulai dari halaman /shop lalu lanjut checkout Shopee.";

export function HomeSeoBlock() {
  const guides = getGuides().slice(0, 6);

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-bold text-himoon-blue">
          Baby Shop Bali: dari Google ke Shopee
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
