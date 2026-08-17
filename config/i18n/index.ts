import de from "./de";
import en from "./en";
import uk from "./uk";
import ar from "./ar";
import type { Locale } from "../types";

export interface Dictionary {
  nav: {
    services: string;
    process: string;
    about: string;
    testimonials: string;
    pricing: string;
    faq: string;
    contact: string;
    statik: string;
    gallery: string;
    menuOpen: string;
    menuClose: string;
  };
  theme: {
    toggle: string;
  };
  contact: {
    name: string;
    email: string;
    phone: string;
    city: string;
    wallType: string;
    message: string;
    timeframe: string;
    consent: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    required: string;
    invalidEmail: string;
  };
  footer: {
    rights: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = { de, en, uk, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.de;
}
