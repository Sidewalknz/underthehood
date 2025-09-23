"use client";

import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Our BBQ Services</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.title}>Masterclasses</h3>
            <p className={styles.text}>
              Learn the art of BBQ with our hands-on masterclasses — from fire
              control to perfecting ribs and brisket.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>Catering</h3>
            <p className={styles.text}>
              Make your events unforgettable with slow-smoked flavors and
              authentic BBQ, served straight from the pit.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>Descaling</h3>
            <p className={styles.text}>
              Keep your grills in top shape with our professional cleaning and
              descaling service, so you can focus on the cook.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
