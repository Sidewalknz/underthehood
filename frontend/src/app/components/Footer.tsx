"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.inner}>
        {/* Column 1: Contact + Socials */}
        <div className={styles.col}>
          <ul className={styles.list}>
            <li className={styles.iconRow}>
              <img
                src="/icons/crown.svg"
                alt=""
                className={styles.icon}
                loading="lazy"
                decoding="async"
              />
              <span>Dave &amp; Michelle King</span>
            </li>
            <li className={styles.iconRow}>
              <img
                src="/icons/phone.svg"
                alt=""
                className={styles.icon}
                loading="lazy"
                decoding="async"
              />
              <a href="tel:+64212420799" aria-label="Call +64 21 242 0799">
                +64 21 242 0799
              </a>
            </li>
            <li className={styles.iconRow}>
              <img
                src="/icons/email.svg"
                alt=""
                className={styles.icon}
                loading="lazy"
                decoding="async"
              />
              <a
                href="mailto:underthehoodnz@gmail.com"
                aria-label="Email underthehoodnz@gmail.com"
              >
                underthehoodnz@gmail.com
              </a>
            </li>
          </ul>

          <div className={styles.socialRow}>
            <a
              href="https://www.youtube.com/channel/UCs0-qG9ksb_iS3FgT_f0lgw?view_as=subscriber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <img
                src="/icons/youtube.svg"
                alt="YouTube"
                className={styles.socialIcon}
                loading="lazy"
                decoding="async"
              />
            </a>
            <a
              href="https://www.instagram.com/underthehoodbbq_nz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className={styles.socialIcon}
                loading="lazy"
                decoding="async"
              />
            </a>
            <a
              href="https://www.facebook.com/underthehoodbbq/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img
                src="/icons/facebook.svg"
                alt="Facebook"
                className={styles.socialIcon}
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>

        {/* Column 2: Logo only */}
        <div className={`${styles.col} ${styles.logoCol}`}>
          <img
            src="/logo2.svg"
            alt="Under The Hood BBQ logo"
            className={styles.logo}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Column 3: Sidewalk credit */}
        <div className={`${styles.col} ${styles.creditCol}`}>
          <a
            href="https://sidewalks.co.nz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Created by Sidewalk (opens in new tab)"
          >
            Created by Sidewalk
          </a>
        </div>
      </div>
    </footer>
  );
}
