import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import styles from "./ProductPage.module.css";
import productsData from "@/data/products.json";

type Product = {
  id: string;
  name: string;
  description?: string;
  image: string;
  thumbnail?: string;
  category?: string;
  price: number;
  colour?: string;
  ingredients?: string[];
  brandTitle?: string;     // e.g. "ALL PURPOSE"
  brandSubtitle?: string;  // e.g. "GPS"
  brandCategory?: string;  // e.g. "RUB"
};

const PRODUCTS: Product[] = productsData as Product[];

function getProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;           // ✅ Next 15 expects params as a Promise
  const product = getProduct(id);
  if (!product) return notFound();

  const otherProducts = PRODUCTS.filter((p) => p.id !== product.id);

  return (
    <main className={styles.wrap}>
      <div className={styles.pageOffset} aria-hidden="true" />

      {/* set CSS var for the colour shape */}
      <div
        className={styles.inner}
        style={{ "--product-color": product.colour || undefined } as CSSProperties}
      >
        {/* LEFT: product image */}
        <aside className={styles.left}>
          <div className={styles.imageCard}>
            <div className={styles.productImgWrap}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className={styles.productImg}
                sizes="(max-width: 1200px) 100vw, 560px"
                priority
              />
            </div>
          </div>
        </aside>

        {/* CENTER: product information */}
        <article className={styles.center}>
          <section className={styles.content}>
            {product.description && <p className={styles.desc}>{product.description}</p>}

            {product.ingredients?.length ? (
              <div className={styles.ingredientsBlock}>
                <h2 className={styles.h2}>Ingredients</h2>
                <ul className={styles.ingredients}>
                  {product.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Price + Add to Cart in same row */}
            <div className={styles.actions}>
              <div className={styles.heroPrice}>£{product.price.toFixed(2)}</div>
              <Link href={`/shop/add/${product.id}`} className={styles.primaryBtn}>
                Add to cart
              </Link>
            </div>
          </section>

          {/* BRAND LOCKUP (bottom of this section) */}
          {(product.brandTitle || product.brandSubtitle || product.brandCategory) && (
            <div className={styles.brandLockup}>
              <div className={styles.brandShape} aria-hidden="true" />
              {product.brandTitle && <span className={styles.brandTitleBig}>{product.brandTitle}</span>}
              {product.brandSubtitle && <span className={styles.brandSubtitleHuge}>{product.brandSubtitle}</span>}
              {product.brandCategory && <span className={styles.brandCategoryBig}>{product.brandCategory}</span>}
            </div>
          )}
        </article>

        {/* RIGHT: thumbnails only (other products) */}
        <aside className={styles.right} aria-label="Other products">
          <div className={styles.pickerInner}>
            <ul className={styles.pickerList}>
              {otherProducts.map((p) => {
                const active = p.id === product.id;
                const thumbSrc = p.thumbnail || p.image;

                return (
                  <li key={p.id}>
                    <Link
                      href={`/shop/${p.id}`}
                      className={`${styles.pickerItem} ${active ? styles.active : ""}`}
                      aria-label={p.name}
                    >
                      <div className={styles.pickerThumb}>
                        <Image
                          src={thumbSrc}
                          alt=""
                          fill
                          sizes="200px"
                          className={styles.pickerImg}
                        />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
