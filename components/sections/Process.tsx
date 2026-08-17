import type { Locale, SiteConfig } from "@/config/types";
import type { Dictionary } from "@/config/i18n";
import styles from "./Process.module.css";

export default function Process({
  config,
  dict,
  locale,
}: {
  config: SiteConfig;
  dict: Dictionary;
  locale: Locale;
}) {
  if (!config.process?.length) return null;

  return (
    <section id="process" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>{dict.nav.process}</h2>
        <ol className={styles.list}>
          {config.process.map((step, index) => (
            <li key={step.title[locale]} className={styles.step}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className={styles.stepTitle}>{step.title[locale]}</h3>
                <p className={styles.stepDescription}>{step.description[locale]}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
