import type { Locale, SiteConfig } from "@/config/types";
import type { Dictionary } from "@/config/i18n";
import styles from "./Footer.module.css";

export default function Footer({
  config,
  dict,
  locale,
}: {
  config: SiteConfig;
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>
          © {new Date().getFullYear()} {config.brand.name} — {dict.footer.rights}
        </span>

        {config.footer.legalLinks && (
          <nav className={styles.links}>
            {config.footer.legalLinks.map((link) => (
              <a key={link.href} href={`/${locale}${link.href}`}>
                {link.label[locale]}
              </a>
            ))}
          </nav>
        )}
      </div>
    </footer>
  );
}
