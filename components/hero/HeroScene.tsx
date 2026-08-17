"use client";

import { useCallback, useRef } from "react";
import type { Locale, SiteConfig } from "@/config/types";
import HeroFragments from "./HeroFragments";
import HeroInterior from "./HeroInterior";
import HeroCutLine from "./HeroCutLine";
import HeroDustCanvas from "./HeroDustCanvas";
import { useHeroTimeline, type HeroRefs } from "./useHeroTimeline";
import styles from "./HeroScene.module.css";

export default function HeroScene({ config, locale }: { config: SiteConfig; locale: Locale }) {
  const refs = useRef<HeroRefs>({
    scene: null,
    wallBase: null,
    fragments: [null, null, null, null, null, null, null, null, null],
    interior: null,
    depth: null,
    outlineRect: null,
    segTop: null,
    segRight: null,
    segBottom: null,
    segLeft: null,
    marks: [null, null, null],
    initialContent: null,
    finalContent: null,
  });
  // Read every frame by HeroDustCanvas, written every scroll tick by the
  // ScrollTrigger onUpdate — a plain mutable ref, not React state, so the
  // canvas repaints at 60fps without re-rendering the component tree.
  const progressRef = useRef(0);

  useHeroTimeline(refs, progressRef);

  const setScene = useCallback((el: HTMLElement | null) => {
    refs.current.scene = el;
  }, []);
  const setWallBase = useCallback((el: HTMLImageElement | null) => {
    refs.current.wallBase = el;
  }, []);
  const setInterior = useCallback((el: HTMLImageElement | null) => {
    refs.current.interior = el;
  }, []);
  const setDepth = useCallback((el: HTMLElement | null) => {
    refs.current.depth = el;
  }, []);
  const setOutline = useCallback((el: SVGRectElement | null) => {
    refs.current.outlineRect = el;
  }, []);
  const setSegTop = useCallback((el: SVGLineElement | null) => {
    refs.current.segTop = el;
  }, []);
  const setSegRight = useCallback((el: SVGLineElement | null) => {
    refs.current.segRight = el;
  }, []);
  const setSegBottom = useCallback((el: SVGLineElement | null) => {
    refs.current.segBottom = el;
  }, []);
  const setSegLeft = useCallback((el: SVGLineElement | null) => {
    refs.current.segLeft = el;
  }, []);
  const setInitialContent = useCallback((el: HTMLElement | null) => {
    refs.current.initialContent = el;
  }, []);
  const setFinalContent = useCallback((el: HTMLElement | null) => {
    refs.current.finalContent = el;
  }, []);

  const setFrag0 = useCallback((el: HTMLImageElement | null) => {
    refs.current.fragments[0] = el;
  }, []);
  const setFrag1 = useCallback((el: HTMLImageElement | null) => {
    refs.current.fragments[1] = el;
  }, []);
  const setFrag2 = useCallback((el: HTMLImageElement | null) => {
    refs.current.fragments[2] = el;
  }, []);
  const setFrag3 = useCallback((el: HTMLImageElement | null) => {
    refs.current.fragments[3] = el;
  }, []);
  const setFrag4 = useCallback((el: HTMLImageElement | null) => {
    refs.current.fragments[4] = el;
  }, []);
  const setFrag5 = useCallback((el: HTMLImageElement | null) => {
    refs.current.fragments[5] = el;
  }, []);
  const setFrag6 = useCallback((el: HTMLImageElement | null) => {
    refs.current.fragments[6] = el;
  }, []);
  const setFrag7 = useCallback((el: HTMLImageElement | null) => {
    refs.current.fragments[7] = el;
  }, []);
  const setFrag8 = useCallback((el: HTMLImageElement | null) => {
    refs.current.fragments[8] = el;
  }, []);
  const fragmentRefs = [
    setFrag0,
    setFrag1,
    setFrag2,
    setFrag3,
    setFrag4,
    setFrag5,
    setFrag6,
    setFrag7,
    setFrag8,
  ];

  const setMark0 = useCallback((el: HTMLSpanElement | null) => {
    refs.current.marks[0] = el;
  }, []);
  const setMark1 = useCallback((el: HTMLSpanElement | null) => {
    refs.current.marks[1] = el;
  }, []);
  const setMark2 = useCallback((el: HTMLSpanElement | null) => {
    refs.current.marks[2] = el;
  }, []);
  const markRefs = [setMark0, setMark1, setMark2];

  const { hero } = config;

  return (
    <section ref={setScene} className={styles.scene} aria-label={hero.headline[locale]}>
      <HeroInterior finalInterior={hero.assets.finalInterior} interiorRef={setInterior} />

      <HeroFragments
        wallTexture={hero.assets.wallTexture}
        wallBaseRef={setWallBase}
        fragmentRefs={fragmentRefs}
        depthRef={setDepth}
      />

      <HeroDustCanvas progressRef={progressRef} />

      <HeroCutLine
        markLabels={hero.markLabels}
        locale={locale}
        outlineRef={setOutline}
        segTopRef={setSegTop}
        segRightRef={setSegRight}
        segBottomRef={setSegBottom}
        segLeftRef={setSegLeft}
        markRefs={markRefs}
      />

      <div className={`container ${styles.contentWrap}`}>
        <div ref={setInitialContent} className={styles.content}>
          <p className={`${styles.eyebrow} eyebrow`}>{hero.eyebrow[locale]}</p>
          <h1 className={styles.headline}>{hero.headline[locale]}</h1>
          <p className={styles.subheadline}>{hero.subheadline[locale]}</p>
          <a href="#contact" className={styles.cta}>
            {hero.ctaLabel[locale]}
          </a>
        </div>

        <div ref={setFinalContent} className={`${styles.content} ${styles.finalContent}`}>
          <h2 className={styles.headline}>{hero.finalHeadline[locale]}</h2>
          <p className={styles.subheadline}>{hero.finalSubheadline[locale]}</p>
          <a href="#contact" className={styles.cta}>
            {hero.finalCtaLabel[locale]}
          </a>
        </div>
      </div>
    </section>
  );
}
