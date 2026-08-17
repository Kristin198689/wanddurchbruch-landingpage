import type { MetadataRoute } from "next";
import { SITE_DOMAIN } from "@/lib/siteUrl";

// Deliberately permissive default: allow everything except the API
// namespace. No crawler user-agent is singled out for blocking — this
// includes AI-search crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.),
// which matters for GEO/AEO visibility and is worth stating explicitly
// rather than leaving as an accidental side effect of the default rule.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${SITE_DOMAIN}/sitemap.xml`,
  };
}
