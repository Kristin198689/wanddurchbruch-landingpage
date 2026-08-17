import type { Locale, SiteConfig } from "@/config/types";
import type { Dictionary } from "@/config/i18n";
import styles from "./Testimonials.module.css";

export default function Testimonials({
  config,
  dict,
  locale,
}: {
  config: SiteConfig;
  dict: Dictionary;
  locale: Locale;
}) {
  if (!config.testimonials?.length) return null;

  return (
    <section id="testimonials" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>{dict.nav.testimonials}</h2>
        <div className={styles.grid}>
          {config.testimonials.map((item) => (
            <figure key={item.author} className={styles.card}>
              <blockquote className={styles.quote}>&ldquo;{item.quote[locale]}&rdquo;</blockquote>
              <figcaption className={styles.author}>
                {item.author}
                {item.role && <span className={styles.role}> — {item.role[locale]}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
