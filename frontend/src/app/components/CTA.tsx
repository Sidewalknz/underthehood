"use client";

import Link from "next/link";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta} id="contact-cta" aria-labelledby="cta-title">
      {/* optional painted background strip */}
      <div className={styles.bar} aria-hidden="true" />

      <div className={styles.inner}>
        <h2 className={styles.title} id="cta-title">
          Ready to fire up your next event?
        </h2>
        <p className={styles.subtitle}>
          Catering, masterclasses, or product questions. Reach out and let’s make it
          unforgettable.
        </p>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.primaryBtn}>
            Get in touch
          </Link>
          <Link href="/bbqservices" className={styles.secondaryBtn}>
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
