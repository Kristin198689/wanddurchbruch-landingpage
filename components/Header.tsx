import Link from "next/link";
import type { Locale, SiteConfig } from "@/config/types";
import type { Dictionary } from "@/config/i18n";
import ThemeToggle from "./ui/ThemeToggle";
import MobileMenu from "./ui/MobileMenu";
import styles from "./Header.module.css";

export default function Header({
  config,
  dict,
  locale,
}: {
  config: SiteConfig;
  dict: Dictionary;
  locale: Locale;
}) {
  const otherLocales = config.locales.filter((l) => l !== locale);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href={`/${locale}`} className={styles.brand}>
          DURCH<span className={styles.brandSlash}>/</span>BRUCH
        </Link>

        <nav className={styles.nav} aria-label="Main">
          <a href="#services">{dict.nav.services}</a>
          {config.statikSafety && <a href="#statik">{dict.nav.statik}</a>}
          {config.process && <a href="#process">{dict.nav.process}</a>}
          {config.gallery && <a href="#gallery">{dict.nav.gallery}</a>}
          {config.faq && <a href="#faq">{dict.nav.faq}</a>}
          <a href="#contact">{dict.nav.contact}</a>
        </nav>

        <div className={styles.actions}>
          <div className={styles.locales}>
            {otherLocales.map((l) => (
              <Link key={l} href={`/${l}`} className={styles.localeSwitch}>
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
          <ThemeToggle label={dict.theme.toggle} />
          <MobileMenu config={config} dict={dict} locale={locale} />
        </div>
      </div>
    </header>
  );
}
