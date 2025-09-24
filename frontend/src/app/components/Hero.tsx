"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Scroll reveal
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const els = Array.from(
      section.querySelectorAll<HTMLElement>(`.${styles.animate}`)
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.in);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Desktop parallax
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduce) return;

    const isWide = () => window.matchMedia("(min-width: 1024px)").matches;

    const items = Array.from(
      section.querySelectorAll<HTMLElement>(`.${styles.parallax}`)
    );

    const depthMap = new Map<HTMLElement, number>();
    items.forEach((el) => {
      const d =
        el.classList.contains(styles.decor1) ? 8 :
        el.classList.contains(styles.decor2) ? 10 :
        el.classList.contains(styles.decor3) ? 12 :
        el.classList.contains(styles.decor4) ? 9  :
        el.classList.contains(styles.deer)   ? 11 :
        8;
      depthMap.set(el, d);
    });

    let raf = 0;
    let mouseX = 0, mouseY = 0;
    let currX = 0, currY = 0;
    const ease = 0.08;
    const maxShift = 18;

    const onMove = (e: MouseEvent) => {
      if (!isWide()) return;
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX = (x - 0.5) * 2;
      mouseY = (y - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      currX += (mouseX - currX) * ease;
      currY += (mouseY - currY) * ease;

      items.forEach((el) => {
        const depth = depthMap.get(el) || 8;
        const scale = depth / 10;
        const tx = -currX * maxShift * scale;
        const ty = -currY * maxShift * scale;
        el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
      });

      if (Math.abs(currX - mouseX) > 0.001 || Math.abs(currY - mouseY) > 0.001) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    section.addEventListener("mousemove", onMove);
    return () => {
      section.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
      items.forEach((el) => (el.style.transform = "translate3d(0,0,0)"));
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero} aria-label="Hero">
      {/* Decorative parallax images */}
      <span className={`${styles.parallax} ${styles.decor1}`} aria-hidden="true">
        <Image src="/icons/bg-fork.svg" alt="" width={180} height={120} className={styles.decor} priority />
      </span>

      <span className={`${styles.parallax} ${styles.decor2}`} aria-hidden="true">
        <Image src="/icons/bg-tongs.svg" alt="" width={160} height={160} className={styles.decor} />
      </span>

      <span className={`${styles.parallax} ${styles.decor3}`} aria-hidden="true">
        <Image src="/icons/bg-bbq.svg" alt="" width={200} height={200} className={styles.decor} />
      </span>

      <span className={`${styles.parallax} ${styles.decor4}`} aria-hidden="true">
        <Image src="/icons/bg-fire.svg" alt="" width={220} height={220} className={styles.decor} />
      </span>

      {/* Deer next to text */}
      <span className={`${styles.parallax} ${styles.deer}`} aria-hidden="true">
        <Image src="/icons/deer.svg" alt="" width={120} height={120} className={styles.decor} />
      </span>

      <div className={styles.inner}>
        <h1 className={`${styles.title} ${styles.animate} ${styles.delay0}`}>
          Smoked to <br />
          <span className={styles.highlight}>Perfection</span>
        </h1>

        <p className={`${styles.subtitle} ${styles.animate} ${styles.delay1}`}>
          Bringing <span className={styles.magicHighlight}>authentic BBQ flavour</span> straight from the hood to your table.
        </p>

        <div className={`${styles.actions} ${styles.animate} ${styles.delay2}`}>
          <Link href="/bbqservices" className={styles.primaryBtn}>Explore Services</Link>
          <Link href="/shop" className={styles.secondaryBtn}>Visit Shop</Link>
        </div>
      </div>
    </section>
  );
}
