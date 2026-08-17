"use client";

/**
 * Ported from premium-consulting-template/components/SectionStack (same
 * mechanic, unchanged): the base section pins to the bottom of the viewport
 * via a computed sticky offset, while the cover section scrolls up over it
 * on a higher z-index — a physical "next section rises and covers the
 * previous one", not a fade/opacity trick.
 */
import { type CSSProperties, type ReactNode, useEffect, useRef } from "react";
import styles from "./SectionStack.module.css";

type SectionStackProps = {
  base: ReactNode;
  cover: ReactNode;
  mobile?: boolean;
  className?: string;
};

type StackStyle = CSSProperties & {
  "--section-stack-top"?: string;
};

export function SectionStack({ base, cover, mobile = false, className }: SectionStackProps) {
  const baseRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const baseElement = baseRef.current;
    const stackElement = stackRef.current;
    if (!baseElement || !stackElement) return;

    const updateStickyTop = () => {
      const baseHeight = baseElement.getBoundingClientRect().height;
      const viewportHeight = window.innerHeight;

      // For a tall base section, top is negative: the section scrolls fully
      // first, then pins with its bottom edge at the bottom of the screen.
      const stickyTop = Math.min(0, viewportHeight - baseHeight);
      stackElement.style.setProperty("--section-stack-top", `${stickyTop}px`);
    };

    updateStickyTop();

    const resizeObserver = new ResizeObserver(updateStickyTop);
    resizeObserver.observe(baseElement);
    window.addEventListener("resize", updateStickyTop);
    window.addEventListener("orientationchange", updateStickyTop);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateStickyTop);
      window.removeEventListener("orientationchange", updateStickyTop);
    };
  }, []);

  const rootClassName = [styles.stack, mobile ? styles.mobileEnabled : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={stackRef} className={rootClassName} style={{ "--section-stack-top": "0px" } as StackStyle}>
      <div ref={baseRef} className={styles.base}>
        {base}
      </div>
      <div className={styles.cover}>{cover}</div>
    </div>
  );
}
