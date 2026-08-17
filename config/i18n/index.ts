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
  };
  theme: {
    toggle: string;
  };
  contact: {
    name: string;
    email: string;
    message: string;
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
