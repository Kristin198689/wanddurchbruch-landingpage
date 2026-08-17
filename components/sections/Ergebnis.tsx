import type { Locale, SiteConfig } from "@/config/types";
import Reveal from "@/components/ui/Reveal";
import styles from "./Ergebnis.module.css";

export default function Ergebnis({ config, locale }: { config: SiteConfig; locale: Locale }) {
  if (!config.ergebnis) return null;
  const { ergebnis } = config;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.text}>
          <span className={`${styles.index} index`}>07</span>
          <h2 className={styles.heading}>
            {ergebnis.headingLines[0][locale]}
            <br />
            {ergebnis.headingLines[1][locale]}
            <br />
            {ergebnis.headingLines[2][locale]}
          </h2>
          <p className={styles.body}>{ergebnis.body[locale]}</p>
        </Reveal>
        <Reveal delay={100} className={styles.frame}>
          <picture>
            <source media="(min-width: 768px)" srcSet={ergebnis.image.desktop} />
            <img src={ergebnis.image.mobile} alt="" className={styles.image} />
          </picture>
        </Reveal>
      </div>
    </section>
  );
}
