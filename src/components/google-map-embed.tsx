import { siteConfig } from "@/lib/site-config";

type GoogleMapEmbedProps = {
  title?: string;
  className?: string;
};

export function GoogleMapEmbed({
  title = siteConfig.businessName,
  className = "",
}: GoogleMapEmbedProps) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>
      <iframe
        title={title}
        src={siteConfig.googleMapsEmbedUrl}
        className="h-[360px] w-full border-0 md:h-[420px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
