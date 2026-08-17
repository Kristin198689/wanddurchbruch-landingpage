import styles from "./HeroScene.module.css";

export default function HeroInterior({
  finalInterior,
  interiorRef,
}: {
  finalInterior: { desktop: string; mobile: string };
  interiorRef: (el: HTMLImageElement | null) => void;
}) {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={finalInterior.desktop} />
      <img
        ref={interiorRef}
        src={finalInterior.mobile}
        alt=""
        className={styles.interior}
        aria-hidden="true"
      />
    </picture>
  );
}
