import type { Metadata } from "next";
import { SITE_DOMAIN } from "./siteUrl";
import type { Locale } from "@/config/types";

// og:locale lookup — never guess or reuse one locale for every language.
const OG_LOCALES: Record<Locale, string> = {
  de: "de_DE",
  en: "en_US",
  uk: "uk_UA",
  ar: "ar_AR",
};

export function getOgLocale(locale: Locale): string {
  return OG_LOCALES[locale] ?? "en_US";
}

export function buildOpenGraph({
  title,
  description,
  url,
  locale,
  siteName,
  image,
}: {
  title: string;
  description: string;
  url: string;
  locale: Locale;
  siteName: string;
  image?: string;
}): NonNullable<Metadata["openGraph"]> {
  return {
    title,
    description,
    url,
    siteName,
    type: "website",
    locale: getOgLocale(locale),
    images: image ? [{ url: `${SITE_DOMAIN}${image}`, width: 1200, height: 630 }] : undefined,
  };
}

export function buildTwitter({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image?: string;
}): NonNullable<Metadata["twitter"]> {
  return {
    card: "summary_large_image",
    title,
    description,
    images: image ? [`${SITE_DOMAIN}${image}`] : undefined,
  };
}
