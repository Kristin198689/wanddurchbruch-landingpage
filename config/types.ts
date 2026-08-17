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
    headline: LocalizedText;
    subheadline: LocalizedText;
    ctaLabel: LocalizedText;
  };

  services: ServiceItem[];

  process?: ProcessStep[];

  about: {
    heading: LocalizedText;
    body: LocalizedText;
  };

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
