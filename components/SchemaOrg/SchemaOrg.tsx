import { SITE_DOMAIN } from "@/lib/siteUrl";
import type { Locale, SiteConfig } from "@/config/types";

export function organizationId() {
  return `${SITE_DOMAIN}/#organization`;
}

export function personId(name: string) {
  return `${SITE_DOMAIN}/#person-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

/**
 * WebSite + Organization entities, defined once with stable @ids so every
 * other schema block on the site (FAQ, Pricing, future pages) references
 * these nodes instead of duplicating name/url/logo inline.
 *
 * Every field on `business` is optional and only emitted when present —
 * never invented. A missing fact is simply absent from the graph.
 */
export default function SchemaOrg({ config, locale }: { config: SiteConfig; locale: Locale }) {
  const orgId = organizationId();
  const business = config.business;

  const organization: Record<string, unknown> = {
    "@type": config.seo.schemaType ?? "Organization",
    "@id": orgId,
    name: config.brand.name,
    url: SITE_DOMAIN,
  };

  if (business?.address) {
    organization.address = {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      postalCode: business.address.postalCode,
      addressLocality: business.address.addressLocality,
      addressCountry: business.address.addressCountry,
    };
  }

  if (business?.geo) {
    organization.geo = {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    };
  }

  if (business?.phone) organization.telephone = business.phone;
  if (business?.foundingDate) organization.foundingDate = business.foundingDate;
  if (business?.sameAs?.length) organization.sameAs = business.sameAs;
  if (config.contact.email) organization.email = config.contact.email;

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_DOMAIN}/#website`,
    url: SITE_DOMAIN,
    name: config.brand.name,
    inLanguage: locale,
    publisher: { "@id": orgId },
  };

  const graph: Record<string, unknown>[] = [organization, website];

  if (business?.person) {
    graph.push({
      "@type": "Person",
      "@id": personId(business.person.name),
      name: business.person.name,
      url: business.person.url ?? SITE_DOMAIN,
      worksFor: { "@id": orgId },
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
