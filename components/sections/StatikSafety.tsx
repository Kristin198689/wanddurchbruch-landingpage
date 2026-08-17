import type { Locale, SiteConfig } from "@/config/types";
import Reveal from "@/components/ui/Reveal";
import styles from "./StatikSafety.module.css";

export default function StatikSafety({
  config,
  locale,
}: {
  config: SiteConfig;
  locale: Locale;
}) {
  if (!config.statikSafety) return null;
  const { statikSafety } = config;

  return (
    <section id="statik" className={styles.section}>
      <div className="container">
        <Reveal>
          <h2 className={styles.heading}>{statikSafety.heading[locale]}</h2>
        </Reveal>
        <div className={styles.items}>
          {statikSafety.items.map((item, i) => (
            <Reveal key={item.title[locale]} delay={i * 90} className={styles.item}>
              <span className={`${styles.index} index`}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.itemTitle}>{item.title[locale]}</h3>
              <p className={styles.itemBody}>{item.body[locale]}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
