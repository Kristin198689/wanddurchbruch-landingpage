// Placeholder demo content so the template runs out of the box.
// Not a real client — replace with a copy of _template.config.ts per project.

import type { SiteConfig } from "../types";

const config: SiteConfig = {
  clientId: "demo",

  brand: {
    name: "Studio Demo",
  },

  theme: {
    accent: "#111114",
    accentContrast: "#f5f5f4",
  },

  defaultLocale: "de",
  locales: ["de", "en", "uk", "ar"],

  seo: {
    // Page-specific title only — the brand suffix is added once, automatically,
    // by the root layout's title template. Adding it here too would render
    // "Page | Brand | Brand" (see SEO-BLUEPRINT.md Section 14).
    title: {
      de: "Beispiel-Landingpage",
      en: "Example Landing Page",
      uk: "Приклад лендінгу",
      ar: "صفحة هبوط تجريبية",
    },
    description: {
      de: "Wiederverwendbare Next.js-Landingpage-Vorlage für verschiedene Nischen und Kunden.",
      en: "Reusable Next.js landing page template for different niches and clients.",
      uk: "Багаторазовий шаблон лендінгу на Next.js для різних ніш і клієнтів.",
      ar: "قالب صفحة هبوط قابل لإعادة الاستخدام مبني على Next.js لمختلف المجالات والعملاء.",
    },
    schemaType: "Organization",
  },

  hero: {
    // No trailing period on hero-scale headlines (SEO-BLUEPRINT.md Section 8) —
    // a period turns a strong statement into generic agency-poster copy.
    headline: {
      de: "Eine Vorlage. Jeder Kunde",
      en: "One template. Any client",
      uk: "Один шаблон. Будь-який клієнт",
      ar: "قالب واحد. لأي عميل",
    },
    subheadline: {
      de: "Konfigurationsbasierte Landingpage — Inhalt, Farben und Texte ändern sich pro Kunde, der Code bleibt gleich.",
      en: "Config-driven landing page — content, colors and copy change per client, the code stays the same.",
      uk: "Лендінг на основі конфігурації — вміст, кольори й тексти змінюються під кожного клієнта, код лишається той самий.",
      ar: "صفحة هبوط قائمة على الإعدادات — يتغيّر المحتوى والألوان والنصوص لكل عميل، بينما يبقى الكود كما هو.",
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
        de: "Konfigurierbar",
        en: "Configurable",
        uk: "Гнучке налаштування",
        ar: "قابل للتخصيص",
      },
      description: {
        de: "Alle Inhalte liegen in einer Config-Datei pro Kunde.",
        en: "All content lives in one config file per client.",
        uk: "Весь вміст зберігається в одному конфіг-файлі на клієнта.",
        ar: "يوجد كل المحتوى في ملف إعدادات واحد لكل عميل.",
      },
    },
    {
      title: {
        de: "Mehrsprachig",
        en: "Multilingual",
        uk: "Багатомовність",
        ar: "متعدد اللغات",
      },
      description: {
        de: "Deutsch, Englisch, Ukrainisch und Arabisch von Haus aus, weitere Sprachen leicht ergänzbar.",
        en: "German, English, Ukrainian and Arabic out of the box, more locales easy to add.",
        uk: "Німецька, англійська, українська й арабська одразу з коробки, інші мови легко додати.",
        ar: "الألمانية والإنجليزية والأوكرانية والعربية جاهزة مسبقًا، ويمكن إضافة لغات أخرى بسهولة.",
      },
    },
    {
      title: {
        de: "Lead-Formular",
        en: "Lead form",
        uk: "Форма заявки",
        ar: "نموذج التواصل",
      },
      description: {
        de: "Kontaktformular sendet Anfragen direkt per Telegram.",
        en: "Contact form sends leads straight to Telegram.",
        uk: "Форма зв'язку надсилає заявки одразу в Telegram.",
        ar: "يرسل نموذج التواصل الطلبات مباشرة عبر تيليجرام.",
      },
    },
  ],

  process: [
    {
      title: {
        de: "Config kopieren",
        en: "Copy the config",
        uk: "Скопіювати конфіг",
        ar: "انسخ ملف الإعدادات",
      },
      description: {
        de: "_template.config.ts duplizieren und unter einer neuen Client-ID speichern.",
        en: "Duplicate _template.config.ts and save it under a new client id.",
        uk: "Дублюйте _template.config.ts і збережіть під новим client-id.",
        ar: "انسخ ملف _template.config.ts واحفظه تحت معرّف عميل جديد.",
      },
    },
    {
      title: {
        de: "Inhalte anpassen",
        en: "Fill in the content",
        uk: "Заповнити контент",
        ar: "املأ المحتوى",
      },
      description: {
        de: "Texte, Preise, Farben und Leistungen pro Sprache eintragen.",
        en: "Enter copy, prices, colors and services for every language.",
        uk: "Внесіть тексти, ціни, кольори й послуги для кожної мови.",
        ar: "أدخل النصوص والأسعار والألوان والخدمات لكل لغة.",
      },
    },
    {
      title: {
        de: "Config aktivieren",
        en: "Switch the active config",
        uk: "Активувати конфіг",
        ar: "فعّل ملف الإعدادات",
      },
      description: {
        de: "In active.config.ts auf die neue Datei verweisen.",
        en: "Point active.config.ts at the new file.",
        uk: "Вкажіть на новий файл у active.config.ts.",
        ar: "وجّه active.config.ts إلى الملف الجديد.",
      },
    },
    {
      title: {
        de: "Deployen",
        en: "Deploy",
        uk: "Задеплоїти",
        ar: "انشر الموقع",
      },
      description: {
        de: "Domain, Telegram-Token und Umgebungsvariablen setzen — fertig.",
        en: "Set the domain, Telegram token and environment variables — done.",
        uk: "Встановіть домен, Telegram-токен і змінні середовища — готово.",
        ar: "اضبط النطاق ورمز تيليجرام ومتغيرات البيئة — وانتهى الأمر.",
      },
    },
  ],

  about: {
    heading: {
      de: "Über die Vorlage",
      en: "About the template",
      uk: "Про шаблон",
      ar: "عن القالب",
    },
    body: {
      de: "Diese Seite ist ein Ausgangspunkt: Struktur und Komponenten bleiben stabil, während Inhalt und Branding pro Projekt über eine einzige Config-Datei ausgetauscht werden.",
      en: "This page is a starting point: structure and components stay stable while content and branding are swapped per project through a single config file.",
      uk: "Ця сторінка — відправна точка: структура й компоненти лишаються незмінними, а вміст і брендинг змінюються під кожен проєкт через один конфіг-файл.",
      ar: "هذه الصفحة نقطة انطلاق: تبقى البنية والمكوّنات ثابتة بينما يتغيّر المحتوى والهوية البصرية لكل مشروع عبر ملف إعدادات واحد.",
    },
  },

  // No testimonials here on purpose — this is a demo, not a real client,
  // so there are no real quotes to show. Inventing fake reviews would
  // violate the project's own honesty rule (CLAUDE.md). The Testimonials
  // section simply doesn't render while this stays unset; add it once a
  // real client has real quotes.

  pricing: [
    {
      name: { de: "Starter", en: "Starter", uk: "Starter", ar: "الأساسية" },
      price: "€990",
      period: { de: "einmalig", en: "one-time", uk: "одноразово", ar: "لمرة واحدة" },
      features: [
        {
          de: "1-seitige Landingpage",
          en: "1-page landing page",
          uk: "Односторінковий лендінг",
          ar: "صفحة هبوط واحدة",
        },
        {
          de: "Kontaktformular",
          en: "Contact form",
          uk: "Форма зв'язку",
          ar: "نموذج تواصل",
        },
      ],
    },
    {
      name: { de: "Pro", en: "Pro", uk: "Pro", ar: "الاحترافية" },
      price: "€1.990",
      period: { de: "einmalig", en: "one-time", uk: "одноразово", ar: "لمرة واحدة" },
      features: [
        { de: "Mehrsprachig", en: "Multilingual", uk: "Багатомовність", ar: "متعدد اللغات" },
        { de: "SEO-Setup", en: "SEO setup", uk: "SEO-налаштування", ar: "إعداد SEO" },
        {
          de: "Individuelles Design",
          en: "Custom design",
          uk: "Індивідуальний дизайн",
          ar: "تصميم مخصص",
        },
      ],
      highlighted: true,
    },
  ],

  faq: [
    {
      question: {
        de: "Kann ich die Vorlage für mehrere Kunden nutzen?",
        en: "Can I reuse this template across clients?",
        uk: "Чи можна використати шаблон для кількох клієнтів?",
        ar: "هل يمكنني إعادة استخدام هذا القالب لعملاء مختلفين؟",
      },
      answer: {
        de: "Ja — dafür ist sie gebaut. Neue Config-Datei anlegen, Inhalte anpassen, fertig.",
        en: "Yes — that's the point. Add a new config file, adjust content, done.",
        uk: "Так — саме для цього він і створений. Додайте новий конфіг-файл, змініть вміст — готово.",
        ar: "نعم — هذا هو الهدف منه بالضبط. أضف ملف إعدادات جديدًا، عدّل المحتوى، وانتهى الأمر.",
      },
    },
  ],

  cta: {
    heading: {
      de: "Bereit für den nächsten Kunden?",
      en: "Ready for the next client?",
      uk: "Готові до наступного клієнта?",
      ar: "هل أنت مستعد للعميل التالي؟",
    },
    subheading: {
      de: "Config kopieren, Inhalte anpassen, deployen — fertig ist die individuelle Landingpage.",
      en: "Copy the config, adjust the content, deploy — the custom landing page is done.",
      uk: "Скопіюйте конфіг, змініть вміст, задеплойте — індивідуальний лендінг готовий.",
      ar: "انسخ الإعدادات، عدّل المحتوى، وانشر — وستكون صفحة الهبوط المخصصة جاهزة.",
    },
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
    subheading: {
      de: "Schreiben Sie uns kurz, worum es geht.",
      en: "Tell us briefly what this is about.",
      uk: "Напишіть кілька слів про ваш запит.",
      ar: "أخبرنا باختصار عمّا يتعلق به طلبك.",
    },
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
