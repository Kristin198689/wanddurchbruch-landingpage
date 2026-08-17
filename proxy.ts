import { NextResponse, type NextRequest } from "next/server";
import activeConfig from "@/config/active.config";
import type { Locale } from "@/config/types";

function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return activeConfig.defaultLocale;

  // Only the browser's top-preference language decides the redirect.
  // Browsers commonly send a header like "ru-RU,ru;q=0.9,en;q=0.8" — falling
  // through to a lower-priority tag like "en" here would show English to a
  // Russian-speaking visitor instead of the intended default (German).
  // Anything other than the site's actual primary language means "unknown
  // visitor, use the default", not "guess from whatever else is listed".
  const [firstTag] = acceptLanguage.split(",");
  const primary = firstTag.trim().split(";")[0].split("-")[0].toLowerCase();

  if ((activeConfig.locales as string[]).includes(primary)) {
    return primary as Locale;
  }

  return activeConfig.defaultLocale;
}

export function proxy(request: NextRequest) {
  const locale = detectLocale(request.headers.get("accept-language"));
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: ["/"],
};
