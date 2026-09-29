"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const HIDDEN_CHROME_PATHS = new Set(["/links"]);

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome =
    HIDDEN_CHROME_PATHS.has(pathname) || pathname.startsWith("/links/");

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
