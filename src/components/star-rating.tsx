import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${rating} stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-4 w-4",
            index < rating
              ? "fill-himoon-yellow text-himoon-yellow"
              : "fill-transparent text-slate-300",
          )}
        />
      ))}
    </div>
  );
}
