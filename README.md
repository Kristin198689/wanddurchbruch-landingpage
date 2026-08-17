# Landing Template

Reusable Next.js landing page — same codebase, different client per config file.

## Stack

Next.js (App Router) · React 19 · TypeScript strict · CSS Modules

## Quick start

```bash
npm install
cp .env.local.example .env.local   # fill in Telegram bot token/chat id + SITE_URL
npm run dev
```

Open http://localhost:3000 — redirects to `/de` (default locale).

## Reusing for a new client

1. `cp config/clients/_template.config.ts config/clients/<client-id>.config.ts`
2. Fill in brand name, colors, copy (de/en/uk/ar), services, pricing, FAQ
3. In `config/active.config.ts`, import the new file instead of `demo.config`
4. Set that client's `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID` / `SITE_URL` in `.env.local`
5. Fill in `business` (address/phone/geo/person) only with facts the client
   gave you — leave it unset otherwise, never invent it

No component code needs to change for a typical niche swap — everything
content-related lives in the config file. See `CLAUDE.md` for the full
architecture, rules, and the SEO section for what's automatic vs. what's a
per-client content decision.

## Structure

```
app/[lang]/                route tree (locale-aware layout, page, OG image)
app/api/contact/           lead form endpoint → Telegram
app/sitemap.ts, robots.ts, manifest.ts
components/                Header, Footer, ThemeToggle, page sections
components/SchemaOrg/      WebSite/Organization, FAQ, Pricing JSON-LD
lib/siteUrl.ts             SITE_DOMAIN — single source of the production domain
lib/alternates.ts          canonical + hreflang
lib/openGraph.ts           OpenGraph/Twitter metadata helpers
config/types.ts            SiteConfig shape
config/clients/            one config file per client
config/active.config.ts    which client is active
config/i18n/                UI chrome strings (de/en/uk/ar)
```

## SEO checks

```bash
npm run check   # lint + type-check + build
```

Manually before shipping a client's site: verify `<title>` renders the brand
suffix exactly once, canonical/hreflang point at the real domain (not
`TODO_DOMAIN.tld`), and `config.business`/`config.pricing` contain no
invented facts. See `CLAUDE.md`'s SEO section and `~/Desktop/SEO-BLUEPRINT.md`
for the full rationale.
