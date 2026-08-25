"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "@phosphor-icons/react/dist/ssr";
import Media from "@/components/Media/Media";
import type { Shot } from "@/components/Experience/data";
import styles from "./index.module.css";

type Props = {
  shot: Shot | null;
  alt: string;
  onClose: () => void;
};

/**
 * Full-screen image viewer. Layered above any other portal (z-index higher
 * than ProjectDetail), so it can open while the side panel is open without
 * fighting for stacking order. Escape handling lives in the parent that owns
 * the open state — that way Esc closes the lightbox first, then the panel.
 */
export default function Lightbox({ shot, alt, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const open = shot !== null;

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
          {/* Keyed by source: the loaded flag inside Media is per-source, and
              the viewer stays mounted while the user moves between shots. */}
          <Media
            key={shot.src}
            src={shot.src}
            alt={alt}
            width={shot.w}
            height={shot.h}
            fit="viewport"
            eager
            className={styles.media}
            onClick={(e) => e.stopPropagation()}
          />
        </>
      )}
    </div>,
    document.body,
  );
}
