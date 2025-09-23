"use client";

import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Our BBQ Services</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <img
              src="/icons/masterclasses.svg"
              alt="Masterclasses icon"
              className={styles.icon}
              loading="lazy"
              decoding="async"
            />
            <h3 className={styles.title}>Masterclasses</h3>
            <p className={styles.text}>
              Everything needed for the class is supplied and everything we cook - we eat! So rally
              your mates, wear your stretchy pants and get ready to be filled with BBQ food &
              knowledge!
            </p>
          </div>

          <div className={styles.card}>
            <img
              src="/icons/catering.svg"
              alt="Catering icon"
              className={styles.icon}
              loading="lazy"
              decoding="async"
            />
            <h3 className={styles.title}>Catering</h3>
            <p className={styles.text}>
              Under the Hood BBQ brings the irresistible allure of authentic, slow-cooked barbecue
              to events across Nelson and the top of the South Island. Our passionate team
              specialises in creating mouthwatering feasts that are sure to be a talking point long
              after the event is over.
            </p>
          </div>

          <div className={styles.card}>
            <img
              src="/icons/descaling.svg"
              alt="Descaling icon"
              className={styles.icon}
              loading="lazy"
              decoding="async"
            />
            <h3 className={styles.title}>Descaling</h3>
            <p className={styles.text}>
              If it&apos;s filthy, baked on grime or carbonised grease that&apos;s difficult to
              shift, let us make easy work of it for you. It won&apos;t remove rust (it can&apos;t
              turn back time on that) but stainless steel and ceramic finishes come up mint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
