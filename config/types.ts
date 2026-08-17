export type Locale = "de" | "en" | "uk" | "ar";

export interface LocalizedText {
  de: string;
  en: string;
  uk: string;
  ar: string;
}

export interface ServiceItem {
  title: LocalizedText;
  description: LocalizedText;
}

export interface PricingTier {
  name: LocalizedText;
  price: string;
  period?: LocalizedText;
  features: LocalizedText[];
  highlighted?: boolean;
}

export interface FaqItem {
  question: LocalizedText;
  answer: LocalizedText;
}

export interface ProcessStep {
  title: LocalizedText;
  description: LocalizedText;
}

/**
 * A real testimonial from a real client. Never invent one — an empty/unset
 * `testimonials` array is correct and honest when no real quotes exist yet;
 * the section simply doesn't render.
 */
export interface Testimonial {
  quote: LocalizedText;
  author: string;
  role?: LocalizedText;
}

/**
 * Real, verifiable business facts used for Schema.org / local SEO.
 * Every field is optional and MUST stay unset until the real fact is known —
 * never fill these with invented/estimated/placeholder values. A field left
 * unset is simply omitted from schema output, which is correct behavior.
 */
export interface BusinessFacts {
  /** Physical address, must match the legal/Impressum page character-for-character */
  address?: {
    streetAddress: string;
    postalCode: string;
    addressLocality: string;
    addressCountry: string;
  };
  /** Real geocoded coordinates for that exact address — never approximated */
  geo?: { latitude: number; longitude: number };
  /** Must match footer/legal page exactly */
  phone?: string;
  /** ISO 8601 date, only if genuinely documented */
  foundingDate?: string;
  /** Real, findable-by-brand-name social profiles only */
  sameAs?: string[];
  /** A real, named individual willing to be publicly associated with the business */
  person?: { name: string; url?: string };
}

export interface SiteConfig {
  /** Internal id, used for env-var prefixing / analytics — not shown to users */
  clientId: string;

  brand: {
    name: string;
    logoText?: string;
  };

  theme: {
    /** CSS color values, e.g. "#0f0f10" */
    accent: string;
    accentContrast: string;
  };

  defaultLocale: Locale;
  locales: Locale[];

  seo: {
    title: LocalizedText;
    description: LocalizedText;
    /** Schema.org type for the Organization node — pick what the business actually is */
    schemaType?: "Organization" | "ProfessionalService" | "LocalBusiness";
  };

  /** Optional — see BusinessFacts. Omit entirely for a demo/placeholder config. */
  business?: BusinessFacts;

  hero: {
    eyebrow: LocalizedText;
    /** Initial state, visible before the scroll-driven wall sequence starts. */
    headline: LocalizedText;
    subheadline: LocalizedText;
    ctaLabel: LocalizedText;
    /** Three short technical marks shown during the 15–30% marking phase, paired with 01/02/03. */
    markLabels: [LocalizedText, LocalizedText, LocalizedText];
    /** Revealed once the wall opens (92–100%). */
    finalHeadline: LocalizedText;
    finalSubheadline: LocalizedText;
    finalCtaLabel: LocalizedText;
    /** Desktop and mobile need different crops, not a scaled-down desktop image. */
    assets: {
      wallTexture: { desktop: string; mobile: string };
      finalInterior: { desktop: string; mobile: string };
    };
  };

  /** Rendered as the "application scenarios" grid (Wand entfernen, Durchgang schaffen, …). */
  services: ServiceItem[];

  process?: ProcessStep[];

  about: {
    heading: LocalizedText;
    body: LocalizedText;
  };

  /** 02 — Manifesto. Two-line editorial statement plus a short explanatory body. */
  statement?: {
    headingLines: [LocalizedText, LocalizedText];
    body: LocalizedText;
  };

  /**
   * 03 — Sicherheit / Präzision. Three trust blocks, each its own hairline-
   * divided item, not a card grid. Bodies must stay legally cautious — never
   * promise load-bearing-wall work without a real structural check, never
   * invent certificates, years of experience, or project counts.
   */
  statikSafety?: {
    heading: LocalizedText;
    items: [
      { title: LocalizedText; body: LocalizedText },
      { title: LocalizedText; body: LocalizedText },
      { title: LocalizedText; body: LocalizedText },
    ];
  };

  /** 06 — sticky video section (Video №7, wall-breakthrough-process). */
  video?: {
    heading: LocalizedText;
    assets: { mp4: string; webm: string; poster: string };
  };

  /** 07 — Ergebnis, the SectionStack cover that rises over the sticky video. */
  ergebnis?: {
    headingLines: [LocalizedText, LocalizedText, LocalizedText];
    body: LocalizedText;
    image: { desktop: string; mobile: string };
  };

  /**
   * 08 — asymmetric editorial gallery. Stock photography, not real finished
   * projects — `label` must stay generic (MATERIAL/PROZESS/…), never an
   * invented client or address. `role` drives the 12-col layout: one wide,
   * one tall, two compact.
   */
  gallery?: {
    label: LocalizedText;
    role: "wide" | "tall" | "compact";
    image: string;
  }[];

  /** Real client quotes only — see Testimonial. Omit/leave empty if none exist yet. */
  testimonials?: Testimonial[];

  pricing?: PricingTier[];
  /** ISO 4217 currency code for `pricing` prices, used in schema. Default: "EUR". */
  currency?: string;

  faq?: FaqItem[];

  /** Final conversion banner, shown right before the contact form. */
  cta?: {
    heading: LocalizedText;
    subheading: LocalizedText;
    buttonLabel: LocalizedText;
  };

  contact: {
    heading: LocalizedText;
    subheading: LocalizedText;
    /** Where server-side API route sends leads. Chat id itself stays in env. */
    telegramEnabled: boolean;
    email?: string;
  };

  footer: {
    address?: string;
    email?: string;
    legalLinks?: { label: LocalizedText; href: string }[];
  };
}
