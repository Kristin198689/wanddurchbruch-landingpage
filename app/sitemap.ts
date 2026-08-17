import type { MetadataRoute } from "next";
import activeConfig from "@/config/active.config";
import { SITE_DOMAIN } from "@/lib/siteUrl";

// Single-page-per-locale site: one sitemap entry per locale's homepage.
// `lastModified` is intentionally omitted — there is no genuine per-locale
// "last changed" date in the config; a build-time timestamp on every URL is
// a freshness signal search engines learn to distrust, so it's better left
// absent than faked. The bare domain root ("/") is not listed — it 308-
// redirects to the default locale and is never itself indexable content.
export default function sitemap(): MetadataRoute.Sitemap {
  return activeConfig.locales.map((locale) => ({
    url: `${SITE_DOMAIN}/${locale}`,
    changeFrequency: "monthly",
    priority: locale === activeConfig.defaultLocale ? 1.0 : 0.9,
  }));
}
