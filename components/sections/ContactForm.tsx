"use client";

import { useState, type FormEvent } from "react";
import type { Locale, SiteConfig } from "@/config/types";
import type { Dictionary } from "@/config/i18n";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({
  config,
  dict,
  locale,
}: {
  config: SiteConfig;
  dict: Dictionary;
  locale: Locale;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>{config.contact.heading[locale]}</h2>
        <p className={styles.subheading}>{config.contact.subheading[locale]}</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            {dict.contact.name}
            <input type="text" name="name" required maxLength={200} />
          </label>
          <label>
            {dict.contact.email}
            <input type="email" name="email" required maxLength={200} />
          </label>
          <label>
            {dict.contact.message}
            <textarea name="message" rows={5} required maxLength={2000} />
          </label>

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? dict.contact.sending : dict.contact.submit}
          </button>

          {status === "success" && <p className={styles.success}>{dict.contact.success}</p>}
          {status === "error" && <p className={styles.error}>{dict.contact.error}</p>}
        </form>
      </div>
    </section>
  );
}
