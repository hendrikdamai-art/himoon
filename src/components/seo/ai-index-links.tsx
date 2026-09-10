import Link from "next/link";

/** Discreet AI citation links on commercial pages (not the global public footer). */
export function AiIndexLinks() {
  return (
    <nav aria-label="AI index" className="mt-8 text-xs text-himoon-muted">
      <p>
        AI index:{" "}
        <Link href="/llms.txt" className="font-semibold text-himoon-blue underline">
          /llms.txt
        </Link>
        {" · "}
        <Link href="/llms-full.txt" className="font-semibold text-himoon-blue underline">
          /llms-full.txt
        </Link>
        {" · "}
        <Link href="/shop" className="font-semibold text-himoon-blue underline">
          Baby Shop
        </Link>
      </p>
    </nav>
  );
}
