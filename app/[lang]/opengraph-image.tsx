import { ImageResponse } from "next/og";
import activeConfig from "@/config/active.config";
import type { Locale } from "@/config/types";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// No generateImageMetadata() here on purpose: this file already lives inside
// the [lang] dynamic segment, so Next.js generates one image per locale from
// `params` alone. Adding generateImageMetadata() would create N image
// variants that all get attached to every page's og:image simultaneously.
export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = (
    activeConfig.locales.includes(rawLang as Locale) ? rawLang : activeConfig.defaultLocale
  ) as Locale;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: activeConfig.theme.accentContrast,
          color: activeConfig.theme.accent,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 600, opacity: 0.7, marginBottom: 24 }}>
          {activeConfig.brand.name}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 1000 }}>
          {activeConfig.hero.headline[lang]}
        </div>
      </div>
    ),
    { ...size }
  );
}
