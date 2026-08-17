import styles from "./HeroScene.module.css";

const FRAG_CLASSES = [
  styles.frag0,
  styles.frag1,
  styles.frag2,
  styles.frag3,
  styles.frag4,
  styles.frag5,
  styles.frag6,
  styles.frag7,
  styles.frag8,
];

/**
 * Wall base + nine independent fragments, all the SAME photograph. Each
 * fragment is a full-viewport <img> with its own clip-path carving a cell
 * out of the breakthrough rectangle (see HeroScene.module.css .frag0…8) —
 * that way every falling piece is a pixel-accurate slice of the real wall,
 * not a separately scaled texture. Desktop shows all nine (3×3); mobile
 * shows four (2×2, see the max-width media query) — see useHeroTimeline for
 * how each one animates independently.
 */
export default function HeroFragments({
  wallTexture,
  wallBaseRef,
  fragmentRefs,
  depthRef,
}: {
  wallTexture: { desktop: string; mobile: string };
  wallBaseRef: (el: HTMLImageElement | null) => void;
  fragmentRefs: ((el: HTMLImageElement | null) => void)[];
  depthRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div className={styles.wallLayer} aria-hidden="true">
      <picture>
        <source media="(min-width: 768px)" srcSet={wallTexture.desktop} />
        <img ref={wallBaseRef} src={wallTexture.mobile} alt="" className={styles.wallBase} />
      </picture>

      {FRAG_CLASSES.map((cls, i) => (
        <picture key={i}>
          <source media="(min-width: 768px)" srcSet={wallTexture.desktop} />
          <img
            ref={fragmentRefs[i]}
            src={wallTexture.mobile}
            alt=""
            className={`${styles.fragment} ${cls}`}
          />
        </picture>
      ))}

      <div ref={depthRef} className={styles.depth} aria-hidden="true" />
    </div>
  );
}
