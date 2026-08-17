import type { Locale, SiteConfig } from "@/config/types";
import styles from "./StickyVideo.module.css";

/**
 * The SectionStack "base": a tall (160vh/130vh) dark section whose background
 * video fills the whole box via object-fit:cover, so whichever slice of it
 * is visible while SectionStack pins the box still reads as one continuous
 * cinematic shot. The heading is its own lightweight `position:sticky` so it
 * stays centered in view for the whole pin, independent of the video layer.
 */
export default function StickyVideo({ config, locale }: { config: SiteConfig; locale: Locale }) {
  if (!config.video) return null;
  const { video } = config;

  return (
    <section className={styles.section}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        poster={video.assets.poster}
        aria-hidden="true"
      >
        <source src={video.assets.webm} type="video/webm" />
        <source src={video.assets.mp4} type="video/mp4" />
      </video>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={`container ${styles.headingWrap}`}>
        <span className={`${styles.index} index`}>06</span>
        <h2 className={styles.heading}>{video.heading[locale]}</h2>
      </div>
    </section>
  );
}
