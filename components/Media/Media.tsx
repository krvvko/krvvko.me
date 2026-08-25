"use client";

import { useState, type CSSProperties } from "react";
import styles from "./index.module.css";

export type Props = {
  src: string;
  alt: string;
  /** Intrinsic pixel size of the asset. Required — it's what lets the
   *  skeleton reserve the exact box the media will occupy. */
  width: number;
  height: number;
  /** `width` fills the container (capped at the asset's intrinsic width so
   *  small shots are never upscaled); `viewport` fits the media inside the
   *  viewport, the way a full-screen viewer needs. */
  fit?: "width" | "viewport";
  eager?: boolean;
  /** Decoration only (shadow, cursor, enter animation) — sizing stays here. */
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
};

/**
 * Sources the browser has already decoded during this session. Re-opening a
 * project remounts the gallery, and a cached image paints on the first frame —
 * without this the skeleton would flash over media that's ready to show.
 */
const decoded = new Set<string>();

/**
 * Image/GIF with a skeleton placeholder that occupies the exact same box as the
 * loaded media, so nothing on the page moves once the bytes arrive. The box is
 * derived from the asset's intrinsic dimensions via `aspect-ratio`, which means
 * every entry in `PROJECTS` carries its real width and height.
 *
 * Mount one per source (`key={src}`) — the loaded state is per-source.
 */
export default function Media({
  src,
  alt,
  width,
  height,
  fit = "width",
  eager = false,
  className,
  onClick,
}: Props) {
  const [loaded, setLoaded] = useState(() => decoded.has(src));

  const markLoaded = () => {
    decoded.add(src);
    setLoaded(true);
  };

  return (
    <span
      className={[
        styles.frame,
        fit === "viewport" ? styles.fitViewport : styles.fitWidth,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      // Intrinsic size is per-asset, so it can only reach CSS as a variable.
      style={{ "--media-w": width, "--media-h": height } as CSSProperties}
      data-loaded={loaded || undefined}
      onClick={onClick}
    >
      <span className={styles.skeleton} aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        // A cached image can finish decoding before React attaches `onLoad`,
        // so check `complete` the moment the node exists.
        ref={(el) => {
          if (el?.complete && el.naturalWidth > 0) markLoaded();
        }}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={styles.img}
        onLoad={markLoaded}
        // Leaving the skeleton spinning forever on a broken asset is worse
        // than showing the browser's own broken-image state.
        onError={markLoaded}
      />
    </span>
  );
}
