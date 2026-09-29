import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14.5 8.5V6.8c0-.7.5-1.3 1.2-1.3H17V3h-2.1C12.6 3 11 4.6 11 6.6v1.9H9v2.7h2V21h3.5v-9.8h2.4l.4-2.7h-2.8Z" />
    </svg>
  );
}

export const socialProfiles = [
  {
    name: "Instagram",
    href: siteConfig.social.instagram,
    Icon: InstagramIcon,
  },
  {
    name: "Facebook",
    href: siteConfig.social.facebook,
    Icon: FacebookIcon,
  },
] as const;

export function SocialLinks({
  className,
  tone = "onLight",
}: {
  className?: string;
  tone?: "onLight" | "onDark";
}) {
  const iconButton =
    tone === "onDark"
      ? "text-blue-100 hover:bg-white/10 hover:text-himoon-yellow"
      : "text-himoon-blue hover:bg-himoon-cream hover:text-himoon-yellow";

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {socialProfiles.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors",
            iconButton,
          )}
        >
          <Icon className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  );
}
