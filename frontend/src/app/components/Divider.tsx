"use client";

import styles from "./Divider.module.css";

type DividerProps = {
  flip?: boolean;
  /** pixels to overlap; defaults to 20 */
  overlapPx?: number;
};

export default function Divider({ flip = false, overlapPx = 30 }: DividerProps) {
  // expose overlap size as a CSS var on the element
  const style: React.CSSProperties = { "--overlap": `${overlapPx}px` } as React.CSSProperties;

  return (
    <div
      className={[
        styles.divider,
        flip ? styles.flip : "",
        flip ? styles.overlapAbove : styles.overlapBelow,
      ].join(" ")}
      style={style}
      aria-hidden="true"
    />
  );
}
