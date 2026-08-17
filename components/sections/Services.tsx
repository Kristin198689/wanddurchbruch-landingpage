import type { Locale, SiteConfig } from "@/config/types";
import type { Dictionary } from "@/config/i18n";
import Reveal from "@/components/ui/Reveal";
import styles from "./Services.module.css";

export default function Services({
  config,
  dict,
  locale,
}: {
  config: SiteConfig;
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <Reveal>
          <h2 className={styles.heading}>{dict.nav.services}</h2>
        </Reveal>
        <div className={styles.grid}>
          {config.services.map((service, i) => (
            <Reveal key={service.title[locale]} delay={i * 60}>
              <div className={styles.card}>
                <span className={`${styles.index} index`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.cardTitle}>{service.title[locale]}</h3>
                <p className={styles.cardBody}>{service.description[locale]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
