import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Unbounded, Golos_Text, IBM_Plex_Mono, Cairo, Noto_Kufi_Arabic } from "next/font/google";
import activeConfig from "@/config/active.config";
import { getDictionary } from "@/config/i18n";
import type { Locale } from "@/config/types";
import { getStaticAlternates } from "@/lib/alternates";
import { buildOpenGraph, buildTwitter } from "@/lib/openGraph";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg/SchemaOrg";
import "../globals.css";

// Confirmed via live Google Fonts CSS API response — cyrillic covers uk, latin covers de umlauts.
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["700", "900"],
});
const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});
// Arabic gets its own pair — never the Latin display font forced to fake-render Arabic.
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["600", "700", "800"],
});
const notoKufi = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi",
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
});

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      document.documentElement.setAttribute("data-theme", stored);
    }
  } catch (e) {}
})();
`;

export function generateStaticParams() {
  return activeConfig.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = activeConfig.locales.includes(rawLang as Locale)
    ? (rawLang as Locale)
    : activeConfig.defaultLocale;

  const title = activeConfig.seo.title[lang];
  const description = activeConfig.seo.description[lang];
  const url = `/${lang}`;

  return {
    title,
    description,
    alternates: getStaticAlternates(lang),
    openGraph: buildOpenGraph({
      title,
      description,
      url,
      locale: lang,
      siteName: activeConfig.brand.name,
    }),
    twitter: buildTwitter({ title, description }),
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;

  if (!activeConfig.locales.includes(rawLang as Locale)) {
    notFound();
  }
  const lang = rawLang as Locale;

  const dict = getDictionary(lang);
  const RTL_LOCALES: string[] = ["ar", "he", "fa"];
  const dir = RTL_LOCALES.includes(lang) ? "rtl" : "ltr";

  return (
    <html
      lang={lang}
      dir={dir}
      suppressHydrationWarning
      className={`${unbounded.variable} ${golos.variable} ${plexMono.variable} ${cairo.variable} ${notoKufi.variable}`}
      style={
        {
          "--accent": activeConfig.theme.accent,
          "--accent-contrast": activeConfig.theme.accentContrast,
        } as React.CSSProperties
      }
    >
      <body>
        <SchemaOrg config={activeConfig} locale={lang} />
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <Header config={activeConfig} dict={dict} locale={lang} />
        {children}
        <Footer config={activeConfig} dict={dict} locale={lang} />
      </body>
    </html>
  );
}
