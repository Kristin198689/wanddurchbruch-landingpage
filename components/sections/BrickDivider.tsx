"use client";

import { useRef } from "react";
import { useBrickFall } from "./useBrickFall";
import styles from "./BrickDivider.module.css";

const BRICK_COUNT = 40;

export default function BrickDivider() {
  const wrapRef = useRef<HTMLDivElement>(null);
  useBrickFall(wrapRef);

  return (
    <div ref={wrapRef} className={styles.wrap}>
      <div className={styles.grid} aria-hidden="true">
        {Array.from({ length: BRICK_COUNT }).map((_, i) => (
          <span key={i} data-brick className={styles.brick} />
        ))}
      </div>
    </div>
  );
}
