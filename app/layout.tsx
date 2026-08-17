import type { Metadata } from "next";
import type { ReactNode } from "react";
import activeConfig from "@/config/active.config";
import { SITE_DOMAIN } from "@/lib/siteUrl";

// A single, site-wide title template: pages supply only their own specific
// title text via generateMetadata (app/[lang]/layout.tsx), never the brand
// suffix — appending it manually there as well would render it twice
// ("Page | Brand | Brand"), a bug this pattern exists specifically to avoid.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_DOMAIN),
  title: {
    default: activeConfig.seo.title[activeConfig.defaultLocale],
    template: `%s | ${activeConfig.brand.name}`,
  },
  description: activeConfig.seo.description[activeConfig.defaultLocale],
  openGraph: {
    siteName: activeConfig.brand.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Root layout intentionally has no <html>/<body> — those live in
// app/[lang]/layout.tsx so <html lang> / dir can be set per locale.
// (Valid App Router pattern: exactly one layout in the tree owns html/body.)
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
