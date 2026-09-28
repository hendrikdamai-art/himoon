import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = "left",
  as = "h2",
}: SectionHeadingProps) {
  const HeadingTag = as;
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-himoon-yellow">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag className="text-3xl font-bold tracking-tight text-himoon-blue md:text-4xl">
        {title}
      </HeadingTag>
      {subtitle ? (
        <p className="mt-3 text-lg leading-relaxed text-himoon-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}
