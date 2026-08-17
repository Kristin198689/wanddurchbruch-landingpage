import type { Locale, SiteConfig } from "@/config/types";
import type { Dictionary } from "@/config/i18n";
import Reveal from "@/components/ui/Reveal";
import styles from "./EditorialGallery.module.css";

export default function EditorialGallery({
  config,
  dict,
  locale,
}: {
  config: SiteConfig;
  dict: Dictionary;
  locale: Locale;
}) {
  if (!config.gallery?.length) return null;

  return (
    <section id="gallery" className={styles.section}>
      <div className="container">
        <Reveal>
          <h2 className={styles.heading}>{dict.nav.gallery}</h2>
        </Reveal>
        <div className={styles.grid}>
          {config.gallery.map((item, i) => (
            <Reveal
              key={item.label[locale]}
              delay={i * 80}
              className={`${styles.item} ${styles[item.role]}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt="" className={styles.image} />
              <span className={styles.caption}>
                <span className={`${styles.index} index`}>{String(i + 1).padStart(2, "0")}</span>
                <span>{item.label[locale]}</span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
