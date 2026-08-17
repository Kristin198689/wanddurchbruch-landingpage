import { SITE_DOMAIN } from "./siteUrl";
import type { Locale } from "@/config/types";
import activeConfig from "@/config/active.config";

// Builds canonical + reciprocal hreflang (incl. x-default) for a single-page-
// per-locale site. x-default always points at the site's default locale —
// never at a separate "international" page.
export function getStaticAlternates(locale: Locale, path: string = "") {
  const languageMap = Object.fromEntries(
    activeConfig.locales.map((l) => [l, `${SITE_DOMAIN}/${l}${path}`])
  );

  return {
    canonical: `${SITE_DOMAIN}/${locale}${path}`,
    languages: {
      ...languageMap,
      "x-default": `${SITE_DOMAIN}/${activeConfig.defaultLocale}${path}`,
    },
  };
}
