"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./footer";
import { Header } from "./header";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isWasteExpo =
    pathname === "/waste-expo" || pathname.startsWith("/waste-expo/");

  if (isWasteExpo) {
    return <div className="min-h-full bg-white">{children}</div>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
