"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroScene.module.css";

type Particle = {
  x: number; // 0..1 fraction of canvas width, base position
  y: number; // 0..1 fraction of canvas height, base position
  size: number; // px
  birth: number; // progress [0..1] at which it starts appearing
  fall: number; // how far it travels downward (fraction of canvas height) over its life
  driftAmp: number; // horizontal sway amplitude, fraction of canvas width
  driftFreq: number;
  tone: "concrete" | "warm" | "silver";
};

type Cloud = {
  x: number;
  y: number;
  radius: number; // fraction of canvas width
  birth: number;
};

const TONE_RGB: Record<Particle["tone"], string> = {
  concrete: "119,124,130",
  warm: "168,153,132",
  silver: "214,216,214",
};

// Deterministic pseudo-random: no Math.random anywhere, so the field is
// identical every render/scroll pass (no hydration mismatch, no jitter on
// scroll-back).
function seeded(i: number, salt: number) {
  const v = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return v - Math.floor(v);
}

function buildParticles(count: number): Particle[] {
  const tones: Particle["tone"][] = ["concrete", "warm", "silver"];
  return Array.from({ length: count }, (_, i) => {
    const a = seeded(i, 1);
    const b = seeded(i, 2);
    const c = seeded(i, 3);
    const d = seeded(i, 4);
    return {
      x: 0.28 + a * 0.5,
      y: 0.3 + b * 0.45,
      size: 1.5 + c * 3.5,
      birth: 0.5 + d * 0.42,
      fall: 0.12 + seeded(i, 5) * 0.3,
      driftAmp: 0.01 + seeded(i, 6) * 0.025,
      driftFreq: 1.5 + seeded(i, 7) * 2.5,
      tone: tones[i % tones.length],
    };
  });
}

function buildClouds(count: number): Cloud[] {
  return Array.from({ length: count }, (_, i) => ({
    x: 0.3 + seeded(i, 11) * 0.45,
    y: 0.35 + seeded(i, 12) * 0.4,
    radius: 0.12 + seeded(i, 13) * 0.1,
    birth: 0.52 + seeded(i, 14) * 0.2,
  }));
}

/**
 * Progress-driven, not time-driven: every particle's position is a pure
 * function of the hero's scroll progress (read each frame from
 * `progressRef.current`, written by useHeroTimeline's onUpdate). Scrolling
 * back up un-animates it correctly because nothing accumulates state.
 */
export default function HeroDustCanvas({ progressRef }: { progressRef: { current: number } }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const particles = buildParticles(isDesktop ? 78 : 26);
    const clouds = buildClouds(isDesktop ? 5 : 3);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Overall intensity envelope matching the spec's phase breakdown.
    const envelope = (p: number) => {
      if (p < 0.5) return 0;
      if (p < 0.68) return (p - 0.5) / 0.18; // ramps 0 → 1
      if (p < 0.82) return 1; // peak
      if (p < 0.92) return 1 - (p - 0.82) / 0.1; // settles 1 → 0
      if (p < 1) return 0.08 * (1 - (p - 0.92) / 0.08); // a few last motes
      return 0;
    };

    function draw(progress: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const intensity = envelope(progress);
      if (intensity <= 0.001) return;

      // Soft cloud layer
      for (const cloud of clouds) {
        if (progress < cloud.birth) continue;
        const life = Math.min(1, (progress - cloud.birth) / 0.3);
        const rise = life * 0.06;
        const grad = ctx.createRadialGradient(
          cloud.x * width,
          (cloud.y - rise) * height,
          0,
          cloud.x * width,
          (cloud.y - rise) * height,
          cloud.radius * width
        );
        const alpha = intensity * 0.16 * (1 - life * 0.4);
        grad.addColorStop(0, `rgba(150,145,138,${alpha})`);
        grad.addColorStop(1, "rgba(150,145,138,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      // Individual particles
      for (const particle of particles) {
        if (progress < particle.birth) continue;
        const life = Math.min(1, (progress - particle.birth) / (1 - particle.birth));
        const fadeOut = progress > 0.92 ? Math.max(0, 1 - (progress - 0.92) / 0.08) : 1;
        const py = (particle.y + particle.fall * life) * height;
        const px =
          (particle.x + Math.sin(life * particle.driftFreq * Math.PI * 2) * particle.driftAmp) *
          width;
        const alpha = intensity * fadeOut * (1 - life * 0.5) * 0.55;
        if (alpha <= 0.01) continue;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${TONE_RGB[particle.tone]},${alpha})`;
        ctx.arc(px, py, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    if (reduceMotion) {
      draw(0.62);
      return () => window.removeEventListener("resize", resize);
    }

    let rafId = 0;
    const loop = () => {
      draw(progressRef.current);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [progressRef]);

  return <canvas ref={canvasRef} className={styles.dustCanvas} aria-hidden="true" />;
}
