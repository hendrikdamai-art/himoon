import Link from "next/link";

export function Breadcrumb({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-himoon-muted">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => (
          <li key={`${item.name}-${index}`} className="flex items-center gap-1">
            {index > 0 ? <span aria-hidden>/</span> : null}
            {item.href ? (
              <Link href={item.href} className="hover:text-himoon-blue">
                {item.name}
              </Link>
            ) : (
              <span className="font-semibold text-himoon-blue">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
