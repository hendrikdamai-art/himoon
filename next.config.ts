import type { NextConfig } from "next";

const llmsCache =
  "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["cursor.com", "*.cursor.com", "127.0.0.1", "localhost"],
  async headers() {
    return [
      {
        source: "/llms.txt",
        headers: [{ key: "Cache-Control", value: llmsCache }],
      },
      {
        source: "/llms-full.txt",
        headers: [{ key: "Cache-Control", value: llmsCache }],
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "down-id.img.susercontent.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "logo.clearbit.com" },
      { protocol: "https", hostname: "ui-avatars.com" },
      { protocol: "https", hostname: "ui-avatars.com" },
      { protocol: "https", hostname: "moell.co.id" },
      { protocol: "https", hostname: "www.gently.co.id" },
      { protocol: "https", hostname: "makuku.co.id" },
      { protocol: "https", hostname: "momuung.com" },
      { protocol: "https", hostname: "asibooster.com" },
      { protocol: "https", hostname: "beeme.co.id" },
      { protocol: "https", hostname: "safebaby.co.id" },
      { protocol: "https", hostname: "geababy.com" },
      { protocol: "https", hostname: "bundaelia.com" },
    ],
  },
};

export default nextConfig;
