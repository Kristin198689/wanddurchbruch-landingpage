// Copy this file to `config/clients/<client-id>.config.ts`, fill in the
// content below, then point `config/active.config.ts` at it.
// All text is per-locale (de/en/uk/ar) — drop locales you don't need from
// `locales` below, but keep all four keys filled in LocalizedText fields
// (TypeScript requires them; unused locales just won't be routed to).

import type { SiteConfig } from "../types";

const config: SiteConfig = {
  clientId: "TODO_CLIENT_ID",

  brand: {
    name: "TODO Brand Name",
  },

  theme: {
    accent: "#111114",
    accentContrast: "#f5f5f4",
  },

  defaultLocale: "de",
  locales: ["de", "en", "uk", "ar"],

  seo: {
    // Page-specific title only — do NOT include the brand name here, the
    // root layout's title template adds it once automatically. See
    // SEO-BLUEPRINT.md Section 14 for the "brand appears twice" bug this avoids.
    title: { de: "TODO Titel", en: "TODO Title", uk: "TODO Заголовок", ar: "TODO عنوان" },
    description: {
      de: "TODO Beschreibung",
      en: "TODO Description",
      uk: "TODO Опис",
      ar: "TODO الوصف",
    },
    // What the business actually is — pick one, don't default without thinking:
    schemaType: "Organization",
  },

  hero: {
    // No trailing period on this headline — see SEO-BLUEPRINT.md Section 8.
    headline: { de: "TODO Headline", en: "TODO Headline", uk: "TODO Заголовок", ar: "TODO عنوان رئيسي" },
    subheadline: {
      de: "TODO Subheadline",
      en: "TODO Subheadline",
      uk: "TODO Підзаголовок",
      ar: "TODO عنوان فرعي",
    },
    ctaLabel: {
      de: "Jetzt anfragen",
      en: "Get in touch",
      uk: "Залишити заявку",
      ar: "تواصل معنا",
    },
  },

  services: [
    {
      title: {
        de: "TODO Leistung 1",
        en: "TODO Service 1",
        uk: "TODO Послуга 1",
        ar: "TODO الخدمة 1",
      },
      description: {
        de: "TODO Beschreibung",
        en: "TODO Description",
        uk: "TODO Опис",
        ar: "TODO الوصف",
      },
    },
    {
      title: {
        de: "TODO Leistung 2",
        en: "TODO Service 2",
        uk: "TODO Послуга 2",
        ar: "TODO الخدمة 2",
      },
      description: {
        de: "TODO Beschreibung",
        en: "TODO Description",
        uk: "TODO Опис",
        ar: "TODO الوصف",
      },
    },
    {
      title: {
        de: "TODO Leistung 3",
        en: "TODO Service 3",
        uk: "TODO Послуга 3",
        ar: "TODO الخدمة 3",
      },
      description: {
        de: "TODO Beschreibung",
        en: "TODO Description",
        uk: "TODO Опис",
        ar: "TODO الوصف",
      },
    },
  ],

  // Optional — the numbered "how it works" section. Remove entirely if the
  // page doesn't need one (the section renders nothing when unset).
  process: [
    {
      title: { de: "TODO Schritt 1", en: "TODO Step 1", uk: "TODO Крок 1", ar: "TODO الخطوة 1" },
      description: { de: "TODO Text", en: "TODO Text", uk: "TODO Текст", ar: "TODO النص" },
    },
    {
      title: { de: "TODO Schritt 2", en: "TODO Step 2", uk: "TODO Крок 2", ar: "TODO الخطوة 2" },
      description: { de: "TODO Text", en: "TODO Text", uk: "TODO Текст", ar: "TODO النص" },
    },
  ],

  about: {
    heading: { de: "TODO Über uns", en: "TODO About", uk: "TODO Про нас", ar: "TODO من نحن" },
    body: { de: "TODO Text", en: "TODO Text", uk: "TODO Текст", ar: "TODO النص" },
  },

  // Real client quotes only — never invent a testimonial. Leave commented
  // out (or an empty array) until real quotes exist; the section renders
  // nothing when `testimonials` is unset/empty.
  // testimonials: [
  //   { quote: { de: "", en: "", uk: "", ar: "" }, author: "", role: { de: "", en: "", uk: "", ar: "" } },
  // ],

  // Real business facts for Schema.org / local SEO — every field optional.
  // Fill in ONLY once the client provides the real fact; never invent an
  // address, phone number, coordinates, founding date, or social profile.
  // Leave `business` entirely unset if none of this is known yet.
  // business: {
  //   address: { streetAddress: "", postalCode: "", addressLocality: "", addressCountry: "" },
  //   geo: { latitude: 0, longitude: 0 }, // real geocoded value, e.g. via OpenStreetMap Nominatim
  //   phone: "",
  //   sameAs: [], // real, findable-by-brand-name social profile URLs only
  //   person: { name: "" }, // only if a real named individual is willing to be public
  // },

  pricing: [
    {
      name: { de: "Starter", en: "Starter", uk: "Starter", ar: "الأساسية" },
      price: "TODO",
      features: [
        { de: "TODO Feature", en: "TODO Feature", uk: "TODO Опція", ar: "TODO ميزة" },
      ],
    },
  ],

  faq: [
    {
      question: {
        de: "TODO Frage?",
        en: "TODO Question?",
        uk: "TODO Питання?",
        ar: "TODO سؤال؟",
      },
      answer: {
        de: "TODO Antwort.",
        en: "TODO Answer.",
        uk: "TODO Відповідь.",
        ar: "TODO الإجابة.",
      },
    },
  ],

  // Optional final conversion banner shown right before the contact form.
  cta: {
    heading: { de: "TODO CTA-Überschrift", en: "TODO CTA heading", uk: "TODO Заголовок CTA", ar: "TODO عنوان الدعوة" },
    subheading: { de: "TODO", en: "TODO", uk: "TODO", ar: "TODO" },
    buttonLabel: {
      de: "Jetzt anfragen",
      en: "Get in touch",
      uk: "Залишити заявку",
      ar: "تواصل معنا",
    },
  },

  contact: {
    heading: {
      de: "Kontakt aufnehmen",
      en: "Get in touch",
      uk: "Зв'язатися з нами",
      ar: "تواصل معنا",
    },
    subheading: { de: "TODO", en: "TODO", uk: "TODO", ar: "TODO" },
    telegramEnabled: true,
  },

  footer: {
    legalLinks: [
      {
        label: { de: "Impressum", en: "Legal notice", uk: "Реквізити", ar: "بيانات قانونية" },
        href: "/impressum",
      },
      {
        label: {
          de: "Datenschutz",
          en: "Privacy",
          uk: "Конфіденційність",
          ar: "الخصوصية",
        },
        href: "/datenschutz",
      },
    ],
  },
};

export default config;
