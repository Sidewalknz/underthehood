"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Decorative images around the hero */}
      <Image
        src="/icons/bg-fork.svg"
        alt=""
        width={180}
        height={120}
        className={`${styles.decor} ${styles.decor1}`}
        aria-hidden="true"
      />
      <Image
        src="/icons/bg-tongs.svg"
        alt=""
        width={160}
        height={160}
        className={`${styles.decor} ${styles.decor2}`}
        aria-hidden="true"
      />
      <Image
        src="/icons/bg-bbq.svg"
        alt=""
        width={200}
        height={200}
        className={`${styles.decor} ${styles.decor3}`}
        aria-hidden="true"
      />
      <Image
        src="/icons/bg-fire.svg"
        alt=""
        width={220}
        height={220}
        className={`${styles.decor} ${styles.decor4}`}
        aria-hidden="true"
      />

      <div className={styles.inner}>
        <h1 className={styles.title}>
          Smoked to <br />
          <span className={styles.highlight}>Perfection</span>
        </h1>

        <p className={styles.subtitle}>
          Bringing authentic BBQ flavors straight from the hood to your table.
        </p>

        <div className={styles.actions}>
          <Link href="/bbqservices" className={styles.primaryBtn}>
            Explore Services
          </Link>
          <Link href="/shop" className={styles.secondaryBtn}>
            Visit Shop
          </Link>
        </div>
      </div>
    </section>
  );
}
