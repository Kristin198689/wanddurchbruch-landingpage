# CLAUDE.md — Reusable Landing Page Template

Next.js (App Router) + TypeScript strict + CSS Modules landing page,
built to be reused across niches/clients via a single config file.

## Architecture

- `config/types.ts` — the `SiteConfig` shape. All page content is typed here.
- `config/clients/*.config.ts` — one file per client/niche.
- `config/active.config.ts` — the single switch: imports whichever client
  config is currently active for this build.
- `config/i18n/*.ts` — UI chrome strings (labels, not page content), per locale.
- `app/[lang]/` — the only route tree; language is a dynamic segment.
- Components read all copy from `SiteConfig` / the dictionary — never hardcode
  client-specific text in `.tsx` files.

## New client workflow

1. `cp config/clients/_template.config.ts config/clients/<client-id>.config.ts`
2. Fill in the new file (bilingual de/en content, real accent color, etc.)
3. Point `config/active.config.ts` at the new file
4. Add `.env.local` with that client's `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID` / `SITE_URL`
5. Adjust `components/` only if the client needs a structurally different
   section — otherwise the same components serve every client
6. Fill in `business` (address/geo/phone/sameAs/person) in the client config
   only with facts the client actually gave you — see SEO section below

## Hard rules

- Never invent real client data: phone, address, email, testimonials, prices.
  Placeholder/`TODO_*` values only until the client provides real content.
- Never commit `.env.local` or any secret.
- `TELEGRAM_BOT_TOKEN` stays server-side only — never `NEXT_PUBLIC_`.
- No new npm dependencies or UI libraries without explicit approval.
- No Tailwind — CSS Modules only, matching the design tokens in `app/globals.css`.
- Keep components generic/config-driven; don't fork a component per client.
- `git push` / PR / deploy only with explicit user approval.

## Design

- Design tokens (colors, radius, container width) live in `app/globals.css`
  as CSS variables; per-client accent color is injected via `config.theme`
  in `app/[lang]/layout.tsx`.
- Light/dark theme via `data-theme` on `<html>`, no flash (`next/script`
  `beforeInteractive` in `app/[lang]/layout.tsx`), toggle in
  `components/ui/ThemeToggle.tsx`.
- Mobile-first, RTL-ready (`dir` is derived from locale in the layout).

## SEO / GEO / AEO

Engineering patterns from `~/Desktop/SEO-BLUEPRINT.md` (Volodina Web Studio's
reusable SEO blueprint) are wired into this template's infrastructure. What's
already implemented, config-driven, and needs no further code changes per client:

- **Metadata**: `app/layout.tsx` sets a single title template (`"%s | {brand}"`).
  Per-page titles in `config.seo.title` must stay brand-suffix-free — the
  template adds it once. Adding the brand in both places renders it twice
  (`Page | Brand | Brand`) — this exact bug is documented in the blueprint,
  Section 14.
- **Canonical + hreflang**: `lib/alternates.ts` — full reciprocal set +
  `x-default` pointing at `config.defaultLocale`, generated automatically for
  every locale in `config.locales`.
- **OpenGraph/Twitter**: `lib/openGraph.ts` (`buildOpenGraph`/`buildTwitter`,
  per-locale `og:locale` lookup) + `app/[lang]/opengraph-image.tsx` (generated
  per locale from `config.brand.name` + `config.hero.headline` — no stock
  photos, no invented visuals).
- **`SITE_DOMAIN`**: `lib/siteUrl.ts`, reads `SITE_URL` env var. Must be the
  real production domain in every deploy — never left on the `TODO_DOMAIN.tld`
  fallback or a preview/localhost URL (see blueprint Section 17).
- **Sitemap/robots/manifest**: `app/sitemap.ts`, `app/robots.ts`,
  `app/manifest.ts` — derive from `config.locales` automatically.
- **Schema.org**: `components/SchemaOrg/` — `SchemaOrg.tsx` (WebSite +
  Organization, stable `@id`, referenced rather than duplicated),
  `FaqSchema.tsx`, `PricingSchema.tsx` (real parsed prices only, non-numeric
  tiers like "on request" are excluded, never estimated).
- **Heading structure**: exactly one `<h1>` (Hero), FAQ accordion items use a
  real `<h3>` inside `<summary>` (not just an unlabeled disclosure widget),
  hero headline has no trailing period.

### What stays a per-client content decision (not solved by code)

These are workflow/judgment calls from the blueprint that a new client config
must apply by hand — re-read the relevant blueprint section before a content
pass, don't assume the infrastructure above covers them automatically:

- **Never invent business facts.** `config.business` (address/geo/phone/
  sameAs/person) must stay `undefined` until the client provides the real
  fact — schema simply omits whatever isn't set. Same for `config.pricing`:
  only real, currently-charged prices.
- **Native-language copywriting** (blueprint Section 7): write each locale
  as a native copywriter would, not a translation — no calque compounds, no
  unexplained jargon, no "rule of three" as a reflex.
- **One local intent per section**, not per page, since this is a one-pager:
  don't let the Services and About sections restate the same sentence in
  different words (blueprint Section 2's cannibalization logic, scaled down
  to sections instead of routes).
- **Local SEO** (blueprint Section 3): if the client has a physical location,
  state city + service area together in the hero/about copy, not only in
  `config.business.address` — schema alone doesn't help GEO/AEO if the
  visible text never says it (blueprint Section 6).
- **FAQ as an AEO device** (blueprint Section 6): phrase questions the way a
  real person would type them; answer in 1–3 self-contained sentences.
- **Content length** (blueprint Section 13): longer isn't stronger — if a
  section restates a point already made elsewhere on the page, cut it.
- **Google Search Console setup** (blueprint Section 16) and **Google
  Business Profile** (blueprint Section 3) are per-client, post-launch,
  outside this repo — not something to automate here.
