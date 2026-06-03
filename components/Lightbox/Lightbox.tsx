"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "@phosphor-icons/react/dist/ssr";
import styles from "./index.module.css";

type Props = {
  src: string | null;
  alt: string;
  onClose: () => void;
};

/**
 * Full-screen image viewer. Layered above any other portal (z-index higher
 * than ProjectDetail), so it can open while the side panel is open without
 * fighting for stacking order. Escape handling lives in the parent that owns
 * the open state — that way Esc closes the lightbox first, then the panel.
 */
export default function Lightbox({ src, alt, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const open = src !== null;

  return createPortal(
    <div
      className={`${styles.root} ${open ? styles.rootOpen : ""}`}
      aria-hidden={!open}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      {open && (
        <>
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close image viewer"
          >
            <X weight="bold" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className={styles.img}
            onClick={(e) => e.stopPropagation()}
          />
        </>
      )}
    </div>,
    document.body,
  );
}
