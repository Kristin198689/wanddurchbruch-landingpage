import type { Locale, SiteConfig } from "@/config/types";
import Reveal from "@/components/ui/Reveal";
import styles from "./Statement.module.css";

export default function Statement({ config, locale }: { config: SiteConfig; locale: Locale }) {
  if (!config.statement) return null;
  const { statement } = config;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <p className={styles.heading}>
            {statement.headingLines[0][locale]}
            <br />
            {statement.headingLines[1][locale]}
          </p>
        </Reveal>
        <Reveal delay={90} className={styles.bodyCol}>
          <span className={`${styles.index} index`}>01</span>
          <p className={styles.body}>{statement.body[locale]}</p>
        </Reveal>
      </div>
    </section>
  );
}
