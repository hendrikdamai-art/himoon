import { cn } from "@/lib/utils";

export function SpeakableAnswer({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      id={id}
      data-speakable="true"
      className={cn(
        "rounded-2xl border border-amber-200 bg-white p-6 text-base leading-relaxed text-himoon-muted shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
