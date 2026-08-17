import type { Locale, SiteConfig } from "@/config/types";
import styles from "./Hero.module.css";

export default function Hero({ config, locale }: { config: SiteConfig; locale: Locale }) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <h1 className={styles.headline}>{config.hero.headline[locale]}</h1>
        <p className={styles.subheadline}>{config.hero.subheadline[locale]}</p>
        <a href="#contact" className={styles.cta}>
          {config.hero.ctaLabel[locale]}
        </a>
      </div>
    </section>
  );
}
