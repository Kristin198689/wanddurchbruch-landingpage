"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Deterministic pseudo-random (no Math.random — identical every render).
function seeded(i: number, salt: number) {
  const v = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return v - Math.floor(v);
}

/**
 * Independent per-brick fall: the lower rows lose support first and the
 * break spreads upward (a real deterministic trend), but every brick also
 * gets its own jitter on top of that trend so bricks in the same row do
 * NOT move in lockstep — no accordion/wave-of-rows look, no single rigid
 * "curtain" of debris.
 */
function animateBricks(bricks: HTMLElement[], cols: number, totalDuration: number) {
  const rows = Math.ceil(bricks.length / cols);
  const tl = gsap.timeline();

  bricks.forEach((brick, i) => {
    const row = Math.floor(i / cols);
    const rowsFromBottom = rows - 1 - row;
    const trend = (rowsFromBottom / rows) * 0.55; // bottom rows start earliest
    const jitter = seeded(i, 3) * 0.4; // per-brick offset, breaks row lockstep
    const start = (trend + jitter) * totalDuration * 0.6;

    tl.to(
      brick,
      {
        y: () => window.innerHeight * (0.55 + seeded(i, 5) * 0.55),
        x: () => (seeded(i, 7) - 0.5) * 90,
        rotate: (seeded(i, 9) - 0.5) * 50,
        opacity: 0,
        duration: totalDuration * 0.4 + seeded(i, 11) * totalDuration * 0.15,
        ease: "power1.in",
      },
      start
    );
  });

  return tl;
}

export function useBrickFall(wrapRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const wrap = wrapRef.current;
    if (!wrap) return;

    const bricks = Array.from(wrap.querySelectorAll<HTMLElement>("[data-brick]")).filter(
      (el) => getComputedStyle(el).display !== "none"
    );
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.to(bricks, {
          opacity: 0,
          duration: 0.5,
          scrollTrigger: { trigger: wrap, start: "top 65%", once: true },
        });
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tl = animateBricks(bricks, 8, 10);
        ScrollTrigger.create({
          trigger: wrap,
          start: "top top",
          end: () => `+=${window.innerHeight * 1.1}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          animation: tl,
        });
      });

      mm.add("(max-width: 767.98px)", () => {
        const tl = animateBricks(bricks, 6, 10);
        ScrollTrigger.create({
          trigger: wrap,
          start: "top top",
          end: () => `+=${window.innerHeight * 0.75}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          animation: tl,
        });
      });

      // See useHeroTimeline.ts for why this explicit refresh is needed.
      ScrollTrigger.refresh();
    }, wrap);

    return () => ctx.revert();
  }, [wrapRef]);
}
