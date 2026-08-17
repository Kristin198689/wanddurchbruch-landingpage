"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type HeroRefs = {
  scene: HTMLElement | null;
  wallBase: HTMLElement | null;
  fragments: (HTMLElement | null)[];
  interior: HTMLElement | null;
  depth: HTMLElement | null;
  outlineRect: SVGRectElement | null;
  segTop: SVGLineElement | null;
  segRight: SVGLineElement | null;
  segBottom: SVGLineElement | null;
  segLeft: SVGLineElement | null;
  marks: (HTMLElement | null)[];
  initialContent: HTMLElement | null;
  finalContent: HTMLElement | null;
};

// Deterministic, hand-authored per-fragment physics — index matches the 3×3
// grid in HeroScene.module.css (row-major: 0-2 top row, 3-5 middle, 6-8
// bottom). Each fragment gets its own delay inside the 68–82% break window,
// its own rotation and horizontal drift, so nothing falls in sync.
const FRAGMENTS = [
  { delayFrac: 0.0, rotate: -7, xVw: -2, fallPct: 150 },
  { delayFrac: 0.42, rotate: 5, xVw: 1.5, fallPct: 175 },
  { delayFrac: 0.14, rotate: -4, xVw: 3, fallPct: 140 },
  { delayFrac: 0.62, rotate: 8, xVw: -3, fallPct: 185 },
  { delayFrac: 0.22, rotate: -9, xVw: 0.5, fallPct: 155 },
  { delayFrac: 0.78, rotate: 4, xVw: 2.5, fallPct: 135 },
  { delayFrac: 0.48, rotate: -5, xVw: -1.5, fallPct: 190 },
  { delayFrac: 0.06, rotate: 7, xVw: 1, fallPct: 165 },
  { delayFrac: 0.7, rotate: -6, xVw: 2, fallPct: 150 },
];

const BREAK_START = 68;
const BREAK_SPAN = 12; // fragments start within [68, 80]
const BREAK_DURATION = 9; // each fall takes 9 units, tail bleeds into the settle phase

export function useHeroTimeline(refsObj: RefObject<HeroRefs>, progressRef: { current: number }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const r = refsObj.current;
    if (!r.scene) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Segment lengths depend on rendered layout (percentage-based SVG
    // coordinates), so measure them once per mount instead of hardcoding.
    const segments = [r.segTop, r.segRight, r.segBottom, r.segLeft].filter(
      (el): el is SVGLineElement => el !== null
    );
    for (const seg of segments) {
      const len = seg.getTotalLength();
      gsap.set(seg, { strokeDasharray: len, strokeDashoffset: len });
    }

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        // Static before → after, no pin, no scrub.
        gsap.set(r.interior, { opacity: 1 });
        gsap.set(r.finalContent, { opacity: 0 });
        gsap.set(r.initialContent, { opacity: 1 });
        gsap.to(
          [r.wallBase, ...r.fragments, r.depth, r.outlineRect, ...segments],
          {
            opacity: 0,
            duration: 0.6,
            delay: 0.2,
            ease: "power1.out",
            scrollTrigger: { trigger: r.scene, start: "top 70%", once: true },
          }
        );
        gsap.to(r.initialContent, {
          opacity: 0,
          duration: 0.4,
          delay: 0.2,
          scrollTrigger: { trigger: r.scene, start: "top 70%", once: true },
        });
        gsap.to(r.finalContent, {
          opacity: 1,
          duration: 0.4,
          delay: 0.5,
          scrollTrigger: { trigger: r.scene, start: "top 70%", once: true },
        });
        return;
      }

      const mm = gsap.matchMedia();

      const buildTimeline = (vhMultiplier: number) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: r.scene,
            start: "top top",
            end: () => `+=${window.innerHeight * vhMultiplier}`,
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              progressRef.current = self.progress;
            },
          },
          defaults: { ease: "none" },
        });

        // 0–15: hold. Nothing scheduled — the static first screen.

        // 15–30: marking — hairline outline + three numbered marks, staggered.
        tl.to(r.outlineRect, { opacity: 1, duration: 4 }, 16);
        r.marks.forEach((mark, i) => {
          tl.to(mark, { opacity: 1, y: 0, duration: 2.5 }, 18 + i * 3.5);
        });

        // 30–50: precise cut-line — top, side, bottom, then the close segment.
        // Mirrored for RTL via the CSS transform on the whole <svg> group.
        tl.to(r.segTop, { strokeDashoffset: 0, duration: 6 }, 30);
        tl.to(r.segRight, { strokeDashoffset: 0, duration: 6 }, 35);
        tl.to(r.segBottom, { strokeDashoffset: 0, duration: 6 }, 40);
        tl.to(r.segLeft, { strokeDashoffset: 0, duration: 7 }, 44);

        // 50–68: separation — depth shadow, marks fade, first faint dust
        // (handled by HeroDustCanvas reading progressRef; nothing to tween here).
        tl.to(r.depth, { opacity: 0.85, duration: 14 }, 52);
        r.marks.forEach((mark) => {
          tl.to(mark, { opacity: 0, duration: 4 }, 60);
        });
        tl.to(r.initialContent, { opacity: 0, y: -14, duration: 6 }, 60);

        // 68–82: controlled breakthrough — nine independent fragments.
        FRAGMENTS.forEach((f, i) => {
          const el = r.fragments[i];
          if (!el) return;
          const start = BREAK_START + f.delayFrac * BREAK_SPAN;
          tl.to(
            el,
            {
              yPercent: f.fallPct,
              xPercent: f.xVw,
              rotate: f.rotate,
              opacity: 0,
              duration: BREAK_DURATION,
              ease: "power2.in",
            },
            start
          );
        });
        tl.to(r.interior, { opacity: 0.75, duration: 14 }, 68);

        // 82–92: dust settles, remaining wall frame dissolves, interior opens fully.
        tl.to(r.wallBase, { opacity: 0, duration: 8 }, 82);
        tl.to(r.depth, { opacity: 0, duration: 6 }, 82);
        tl.to([r.outlineRect, ...segments], { opacity: 0, duration: 6 }, 80);
        tl.to(r.interior, { opacity: 1, duration: 10 }, 82);

        // 92–100: final, calm frame.
        tl.fromTo(
          r.finalContent,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 8, ease: "power2.out" },
          92
        );

        return tl;
      };

      mm.add("(min-width: 768px)", () => {
        buildTimeline(2.8);
      });
      mm.add("(max-width: 767.98px)", () => {
        buildTimeline(1.75);
      });

      // Triggers created after the window "load" event (typical for a
      // client-hydrated section) don't get GSAP's automatic post-load
      // refresh, which otherwise left `end` unresolved until the next
      // manual scroll/resize.
      ScrollTrigger.refresh();
    }, r.scene);

    return () => ctx.revert();
    // refsObj.current is populated synchronously via ref callbacks before this
    // effect runs — an empty dep array is intentional (mount/unmount once).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
