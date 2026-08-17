import { SITE_DOMAIN } from "@/lib/siteUrl";
import { organizationId } from "./SchemaOrg";
import type { Locale, SiteConfig } from "@/config/types";

// Parses a real, displayed price string ("€990", "1.990 €", "$1,200") into a
// number. Returns null for anything non-numeric ("auf Anfrage" / "on
// request" / "TODO") — those tiers are excluded from the computed price
// range rather than assigned a fabricated number.
function parsePrice(price: string): number | null {
  const match = price.match(/[\d.,]{2,}/);
  if (!match) return null;
  const normalized = match[0].replace(/\.(?=\d{3}(\D|$))/g, "").replace(",", ".");
  const value = parseFloat(normalized);
  return Number.isFinite(value) ? value : null;
}

export default function PricingSchema({
  config,
  locale,
}: {
  config: SiteConfig;
  locale: Locale;
}) {
  if (!config.pricing?.length) return null;

  const numericPrices = config.pricing
    .map((tier) => parsePrice(tier.price))
    .filter((n): n is number => n !== null);

  if (numericPrices.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.seo.title[locale],
    provider: { "@id": organizationId() },
    url: `${SITE_DOMAIN}/${locale}`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: config.currency ?? "EUR",
      lowPrice: Math.min(...numericPrices),
      highPrice: Math.max(...numericPrices),
      offerCount: numericPrices.length,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
