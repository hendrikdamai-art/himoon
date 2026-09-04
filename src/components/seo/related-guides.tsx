import Link from "next/link";
import type { BlogPost } from "@/types/catalog";

export function RelatedGuides({ guides }: { guides: BlogPost[] }) {
  if (guides.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-himoon-blue">Panduan terkait</h2>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={`/blog/${guide.slug}`}
              className="block rounded-xl border border-slate-200 bg-white p-4 hover:border-himoon-yellow"
            >
              <p className="text-sm font-bold text-himoon-blue">{guide.title.id}</p>
              <p className="mt-1 text-xs text-himoon-muted">{guide.excerpt.id}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
