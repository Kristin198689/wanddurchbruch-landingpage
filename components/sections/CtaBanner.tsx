import type { Locale, SiteConfig } from "@/config/types";
import styles from "./CtaBanner.module.css";

export default function CtaBanner({ config, locale }: { config: SiteConfig; locale: Locale }) {
  if (!config.cta) return null;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>{config.cta.heading[locale]}</h2>
        <p className={styles.subheading}>{config.cta.subheading[locale]}</p>
        <a href="#contact" className={styles.button}>
          {config.cta.buttonLabel[locale]}
        </a>
      </div>
    </section>
  );
}
