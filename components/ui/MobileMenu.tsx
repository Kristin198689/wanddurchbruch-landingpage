"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import type { Locale, SiteConfig } from "@/config/types";
import type { Dictionary } from "@/config/i18n";
import styles from "./MobileMenu.module.css";

export default function MobileMenu({
  config,
  dict,
  locale,
}: {
  config: SiteConfig;
  dict: Dictionary;
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const otherLocales = config.locales.filter((l) => l !== locale);

  useEffect(() => {
    // Standard SSR-safe "has mounted" flag: document.body only exists on the
    // client, so the portal target can't be resolved during server render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const panel = (
    <div
      id="mobile-menu-panel"
      className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
    >
      <nav className={styles.nav} aria-label="Mobile" onClick={() => setOpen(false)}>
        <a href="#services">{dict.nav.services}</a>
        {config.process && <a href="#process">{dict.nav.process}</a>}
        <a href="#about">{dict.nav.about}</a>
        {config.testimonials && <a href="#testimonials">{dict.nav.testimonials}</a>}
        {config.pricing && <a href="#pricing">{dict.nav.pricing}</a>}
        {config.faq && <a href="#faq">{dict.nav.faq}</a>}
        <a href="#contact">{dict.nav.contact}</a>
      </nav>

      {otherLocales.length > 0 && (
        <div className={styles.locales}>
          {otherLocales.map((l) => (
            <Link key={l} href={`/${l}`} className={styles.localeLink}>
              {l.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`${styles.bar} ${open ? styles.barOpenTop : ""}`} />
        <span className={`${styles.bar} ${open ? styles.barOpenHide : ""}`} />
        <span className={`${styles.bar} ${open ? styles.barOpenBottom : ""}`} />
      </button>

      {mounted ? createPortal(panel, document.body) : null}
    </div>
  );
}
