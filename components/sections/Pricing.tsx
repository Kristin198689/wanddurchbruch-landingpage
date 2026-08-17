import type { Locale, SiteConfig } from "@/config/types";
import type { Dictionary } from "@/config/i18n";
import styles from "./Pricing.module.css";

export default function Pricing({
  config,
  dict,
  locale,
}: {
  config: SiteConfig;
  dict: Dictionary;
  locale: Locale;
}) {
  if (!config.pricing?.length) return null;

  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>{dict.nav.pricing}</h2>
        <div className={styles.grid}>
          {config.pricing.map((tier) => (
            <div
              key={tier.name[locale]}
              className={`${styles.card} ${tier.highlighted ? styles.highlighted : ""}`}
            >
              <h3>{tier.name[locale]}</h3>
              <p className={styles.price}>
                {tier.price}
                {tier.period && <span> / {tier.period[locale]}</span>}
              </p>
              <ul>
                {tier.features.map((feature) => (
                  <li key={feature[locale]}>{feature[locale]}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
