import activeConfig from "@/config/active.config";
import { getDictionary } from "@/config/i18n";
import type { Locale } from "@/config/types";
import HeroScene from "@/components/hero/HeroScene";
import Statement from "@/components/sections/Statement";
import Services from "@/components/sections/Services";
import StatikSafety from "@/components/sections/StatikSafety";
import Process from "@/components/sections/Process";
import BrickDivider from "@/components/sections/BrickDivider";
import StickyVideo from "@/components/sections/StickyVideo";
import Ergebnis from "@/components/sections/Ergebnis";
import EditorialGallery from "@/components/sections/EditorialGallery";
import Faq from "@/components/sections/Faq";
import ContactForm from "@/components/sections/ContactForm";
import { SectionStack } from "@/components/ui/SectionStack";
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

      <HeroScene config={activeConfig} locale={lang} />
      <Statement config={activeConfig} locale={lang} />
      <Services config={activeConfig} dict={dict} locale={lang} />
      <StatikSafety config={activeConfig} locale={lang} />
      <Process config={activeConfig} dict={dict} locale={lang} />
      <BrickDivider />
      <SectionStack
        mobile
        base={<StickyVideo config={activeConfig} locale={lang} />}
        cover={<Ergebnis config={activeConfig} locale={lang} />}
      />
      <EditorialGallery config={activeConfig} dict={dict} locale={lang} />
      <Faq config={activeConfig} dict={dict} locale={lang} />
      <ContactForm config={activeConfig} dict={dict} locale={lang} />
    </main>
  );
}
