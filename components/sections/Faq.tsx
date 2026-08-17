import type { Locale, SiteConfig } from "@/config/types";
import type { Dictionary } from "@/config/i18n";
import Reveal from "@/components/ui/Reveal";
import styles from "./Faq.module.css";

export default function Faq({
  config,
  dict,
  locale,
}: {
  config: SiteConfig;
  dict: Dictionary;
  locale: Locale;
}) {
  if (!config.faq?.length) return null;

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <Reveal>
          <h2 className={styles.heading}>{dict.nav.faq}</h2>
        </Reveal>
        <div className={styles.list}>
          {config.faq.map((item, i) => (
            <Reveal key={item.question[locale]} delay={i * 50}>
              <details className={styles.item}>
                <summary>
                  <h3 className={styles.question}>{item.question[locale]}</h3>
                </summary>
                <p>{item.answer[locale]}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
