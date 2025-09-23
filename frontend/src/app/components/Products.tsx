"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Products.module.css";

import productsData from "@/data/products.json";

type Product = {
  id: string;
  name: string;
  description?: string;
  image: string;
  art?: string;
  category?: string;
  price: number;
  colour?: string;
  ingredients?: string[];
  brandTitle?: string;
  brandSubtitle?: string;
  brandCategory?: string;
};

const ALL_PRODUCTS = productsData as Product[];
const PRODUCTS: Product[] = ALL_PRODUCTS.slice(0, 3);

export default function Products() {
  return (
    <section className={styles.products}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Our Signature Products</h2>

        <ul className={styles.grid}>
          {PRODUCTS.map((p, i) => (
            <li key={p.id} className={styles.item}>
              <div
                className={styles.thumbWrap}
                style={
                  { ["--bg-colour" as any]: p.colour ?? "#EDEDED" } as React.CSSProperties
                }
              >
                {/* Native SVG background + hover color overlay */}
                <div className={styles.maskBg} aria-hidden />

                {/* Crossfade: masked image (default) */}
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className={`${styles.thumbBase} ${styles.thumbMasked}`}
                  sizes="(max-width: 900px) 100vw, 360px"
                  priority={i < 3}
                />

                {/* Crossfade: unmasked full image (hover) */}
                <Image
                  src={p.image}
                  alt="" /* decorative duplicate */
                  fill
                  className={`${styles.thumbBase} ${styles.thumbFull}`}
                  sizes="(max-width: 900px) 100vw, 360px"
                  priority={i < 3}
                  aria-hidden
                />
              </div>

              <div className={styles.info}>
                <h3 className={styles.title}>{p.name}</h3>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.allWrap}>
          <Link href="/shop" className={styles.allBtn}>
            View all products
          </Link>
        </div>
      </div>
    </section>
  );
}
