// Single source of truth for the production domain — every canonical URL,
// hreflang entry, sitemap URL, OpenGraph URL, and schema URL reads from here.
//
// This must always resolve to the real production domain, even when the app
// happens to be rendering on a preview/staging deployment — otherwise
// preview URLs leak into canonical tags, sitemap entries, and JSON-LD.
// Set SITE_URL in the deployment's real environment; the fallback below is
// a placeholder only, replace it before shipping this client's site.
export const SITE_DOMAIN = (process.env.SITE_URL?.trim() || "https://TODO_DOMAIN.tld").replace(
  /\/$/,
  ""
);
