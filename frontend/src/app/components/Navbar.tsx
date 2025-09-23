"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navWrapper}>
          <nav className={styles.navbar} aria-label="Primary">
            {/* Left: Logo */}
            <div className={styles.logo}>
              <Link href="/" aria-label="Under The Hood BBQ - Home">
                <Image
                  src="/logo1.svg"
                  alt="Under The Hood BBQ"
                  width={56}   // larger logo
                  height={56}
                  priority
                />
              </Link>
            </div>

            {/* Right: Links */}
            <ul className={styles.navLinks}>
              <li><Link href="/bbqservices">BBQ Services</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Spacer so content doesn’t jump under the fixed header */}
      <div className={styles.offset} aria-hidden="true" />
    </>
  );
}
