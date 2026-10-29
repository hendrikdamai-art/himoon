import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/** Renders markdown-style [anchor](/path) as internal SEO links */
export function InlineLinks({ text }: { text: string }) {
  const pattern = /\[([^\]]+)\]\((\/[^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(
        <Fragment key={`t-${key++}`}>{text.slice(lastIndex, match.index)}</Fragment>,
      );
    }
    nodes.push(
      <Link
        key={`l-${key++}`}
        href={match[2]}
        className="font-semibold text-himoon-blue underline decoration-himoon-yellow/70 underline-offset-2 transition hover:text-himoon-yellow"
      >
        {match[1]}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(<Fragment key={`t-${key++}`}>{text.slice(lastIndex)}</Fragment>);
  }

  return <>{nodes}</>;
}
