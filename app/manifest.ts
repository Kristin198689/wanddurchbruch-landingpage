import type { MetadataRoute } from "next";
import activeConfig from "@/config/active.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: activeConfig.brand.name,
    short_name: activeConfig.brand.logoText ?? activeConfig.brand.name,
    start_url: `/${activeConfig.defaultLocale}`,
    display: "standalone",
    background_color: activeConfig.theme.accentContrast,
    theme_color: activeConfig.theme.accent,
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
