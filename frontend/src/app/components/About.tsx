"use client";

import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.heading}>About Under The Hood BBQ</h2>
          <p className={styles.tagline}>
            Barbecue, feed, teach, and inspire — all from our backyard to yours.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.copy}>
            <p>
              Based in <strong>Nelson, New Zealand</strong>, our ever-growing outdoor kitchen allows
              us to do what we love – barbecue, feed, teach, and inspire others. Our business is
              focused on <em>Events Catering</em>, <em>Masterclasses</em> and <em>BBQ Products</em>.
              Together we travel throughout New Zealand, sharing the love, helping others elevate
              their backyard barbecue game.
            </p>

            <p>
              We have produced a professionally recorded <strong>Online Class</strong>, giving our
              students the ability to access all they want to know, anytime, anywhere, as often as
              they need. Our in-person experiences can now go next level, with the addition of our
              custom-built <strong>Interactive BBQ Trailer</strong> to help further us in our meaty
              mission.
            </p>

            <p className={styles.pullquote}>
              We truly believe that food brings people together, so whatever you eat,{" "}
              <span className={styles.highlight}>make it good!</span>
            </p>

            <p className={styles.signature}>
              <img
                src="/icons/crown.svg"
                alt=""
                className={styles.crownIcon}
                loading="lazy"
                decoding="async"
              />
              Dave &amp; Michelle
            </p>
          </div>

          {/* Image/art block with hover fade swap */}
          <div className={styles.art}>
            <div className={styles.artBg} aria-hidden="true" />
            <img
              src="/icons/drawing-dk.svg"
              alt="Under The Hood BBQ – pit in action"
              className={`${styles.photo} ${styles.svgImg}`}
            />
            <img
              src="/images/davemichelle.webp"
              alt="Dave and Michelle"
              className={`${styles.photo} ${styles.photoImg}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
