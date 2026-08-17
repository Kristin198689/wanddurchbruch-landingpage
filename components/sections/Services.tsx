import type { Locale, SiteConfig } from "@/config/types";
import type { Dictionary } from "@/config/i18n";
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
        <h2 className={styles.heading}>{dict.nav.services}</h2>
        <div className={styles.grid}>
          {config.services.map((service) => (
            <div key={service.title[locale]} className={styles.card}>
              <h3>{service.title[locale]}</h3>
              <p>{service.description[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
