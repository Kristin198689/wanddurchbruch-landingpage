import type { Locale, SiteConfig } from "@/config/types";
import styles from "./About.module.css";

export default function About({ config, locale }: { config: SiteConfig; locale: Locale }) {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>{config.about.heading[locale]}</h2>
        <p className={styles.body}>{config.about.body[locale]}</p>
      </div>
    </section>
  );
}
