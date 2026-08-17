import type { CSSProperties } from "react";
import type { Locale, SiteConfig } from "@/config/types";
import styles from "./HeroScene.module.css";

const OP_LEFT = "var(--op-left)";
const OP_TOP = "var(--op-top)";
const OP_RIGHT = "calc(var(--op-left) + var(--op-width))";
const OP_BOTTOM = "calc(var(--op-top) + var(--op-height))";

// React's CSSProperties doesn't model SVG geometry properties (x1/y1/x2/y2),
// even though browsers support styling them since SVG2 — cast at the edge.
type LineStyle = CSSProperties & { x1: string; y1: string; x2: string; y2: string };

export default function HeroCutLine({
  markLabels,
  locale,
  outlineRef,
  segTopRef,
  segRightRef,
  segBottomRef,
  segLeftRef,
  markRefs,
}: {
  markLabels: SiteConfig["hero"]["markLabels"];
  locale: Locale;
  outlineRef: (el: SVGRectElement | null) => void;
  segTopRef: (el: SVGLineElement | null) => void;
  segRightRef: (el: SVGLineElement | null) => void;
  segBottomRef: (el: SVGLineElement | null) => void;
  segLeftRef: (el: SVGLineElement | null) => void;
  markRefs: ((el: HTMLSpanElement | null) => void)[];
}) {
  return (
    <>
      <svg className={styles.cutLine} aria-hidden="true">
        <rect ref={outlineRef} className={styles.outlineRect} />
        <line
          ref={segTopRef}
          className={styles.cutSeg}
          style={{ x1: OP_LEFT, y1: OP_TOP, x2: OP_RIGHT, y2: OP_TOP } as LineStyle}
        />
        <line
          ref={segRightRef}
          className={styles.cutSeg}
          style={{ x1: OP_RIGHT, y1: OP_TOP, x2: OP_RIGHT, y2: OP_BOTTOM } as LineStyle}
        />
        <line
          ref={segBottomRef}
          className={styles.cutSeg}
          style={{ x1: OP_RIGHT, y1: OP_BOTTOM, x2: OP_LEFT, y2: OP_BOTTOM } as LineStyle}
        />
        <line
          ref={segLeftRef}
          className={styles.cutSeg}
          style={{ x1: OP_LEFT, y1: OP_BOTTOM, x2: OP_LEFT, y2: OP_TOP } as LineStyle}
        />
      </svg>

      <div className={styles.marks} aria-hidden="true">
        {markLabels.map((label, i) => (
          <span key={i} ref={markRefs[i]} className={styles.mark}>
            <span className={styles.markIndex}>{String(i + 1).padStart(2, "0")}</span>
            <span className={styles.markLabel}>{label[locale]}</span>
          </span>
        ))}
      </div>
    </>
  );
}
