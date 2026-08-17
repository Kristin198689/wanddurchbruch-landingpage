import activeConfig from "@/config/active.config";
import { getDictionary } from "@/config/i18n";
import type { Locale } from "@/config/types";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import CtaBanner from "@/components/sections/CtaBanner";
import ContactForm from "@/components/sections/ContactForm";
import FaqSchema from "@/components/SchemaOrg/FaqSchema";
import PricingSchema from "@/components/SchemaOrg/PricingSchema";

export default async function LangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (
    activeConfig.locales.includes(rawLang as Locale) ? rawLang : activeConfig.defaultLocale
  ) as Locale;
  const dict = getDictionary(lang);

  return (
    <main>
      <PricingSchema config={activeConfig} locale={lang} />
      <FaqSchema config={activeConfig} locale={lang} />
      <Hero config={activeConfig} locale={lang} />
      <Services config={activeConfig} dict={dict} locale={lang} />
      <Process config={activeConfig} dict={dict} locale={lang} />
      <About config={activeConfig} locale={lang} />
      <Testimonials config={activeConfig} dict={dict} locale={lang} />
      <Pricing config={activeConfig} dict={dict} locale={lang} />
      <Faq config={activeConfig} dict={dict} locale={lang} />
      <CtaBanner config={activeConfig} locale={lang} />
      <ContactForm config={activeConfig} dict={dict} locale={lang} />
    </main>
  );
}
