"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navWrapper}>
          <nav className={styles.navbar} aria-label="Primary">
            <div className={styles.logo}>
              <Link href="/" aria-label="Under The Hood BBQ - Home">
                <Image
                  src="/logo1.svg"
                  alt="Under The Hood BBQ"
                  width={56}
                  height={56}
                  priority
                />
              </Link>
            </div>

            <ul className={styles.navLinks}>
              <li><Link href="/bbqservices">BBQ Services</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>

            <div
              className={`${styles.burger} ${menuOpen ? styles.active : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>

          {menuOpen && (
            <div className={`${styles.mobileNav} ${!menuOpen ? styles.hidden : ""}`}>
              <Link href="/bbqservices" onClick={() => setMenuOpen(false)}>BBQ Services</Link>
              <Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
          )}
        </div>
      </header>

      <div className={styles.offset} aria-hidden="true" />
    </>
  );
}
