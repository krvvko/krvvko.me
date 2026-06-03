"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Button from "@/components/Button/Button";
import Tag from "@/components/Tag/Tag";
import Lightbox from "@/components/Lightbox/Lightbox";
import type { Project } from "@/components/Experience/data";
import styles from "./index.module.css";

type Props = {
  project: Project | null;
  open: boolean;
  onClose: () => void;
  onClosed: () => void;
};

export default function ProjectDetail({
  project,
  open,
  onClose,
  onClosed,
}: Props) {
  // Portal target only exists in the browser; render nothing until mounted so
  // SSR and the first client paint agree.
  const [mounted, setMounted] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  // Canonical client-only portal gate: server and first client render both
  // return null, then we flip on mount — keeps hydration in sync.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      // Lightbox is layered on top of the modal, so Esc dismisses it first.
      if (lightboxSrc) setLightboxSrc(null);
      else onClose();
    };
    document.addEventListener("keydown", onKey);
    // Lock the page scroll. The scroll container is the documentElement (html
    // has a fixed height + explicit overflow-x, so a body lock wouldn't take);
    // scrollbar-gutter:stable keeps the layout from shifting while it's hidden.
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, onClose, lightboxSrc]);

  // Make sure the lightbox doesn't survive the modal closing.
  useEffect(() => {
    if (!open) setLightboxSrc(null);
  }, [open]);

  if (!mounted) return null;

  const meta = project
    ? [
        project.year && { k: "Year", v: project.year },
        project.role && { k: "Role", v: project.role },
        project.status && { k: "Status", v: project.status },
      ].filter(Boolean)
    : [];

  // Rendered into <body> via a portal so it escapes <main>'s stacking context
  // (z-index:1) and its own z-index sits above the fixed nav.
  return createPortal(
    <>
      <div
        className={`${styles.scrim} ${open ? styles.scrimOpen : ""}`}
        onClick={onClose}
      />
      <aside
        className={`${styles.detail} ${open ? styles.detailOpen : ""}`}
        aria-hidden={!open}
        onTransitionEnd={(e) => {
          if (e.target === e.currentTarget && !open) onClosed();
        }}
      >
        {project && (
          <>
            <div className={styles.top}>
              {project.cat ? (
                <span className={styles.cat}>{project.cat}</span>
              ) : (
                <span />
              )}
              <button
                className={styles.close}
                onClick={onClose}
                aria-label="Close"
              >
                <X weight="bold" />
              </button>
            </div>

            <div className={styles.body}>
              <h2>{project.name}</h2>

              {meta.length > 0 && (
                <div className={styles.meta}>
                  {meta.map(
                    (m) =>
                      m && (
                        <div key={m.k}>
                          <div className={styles.k}>{m.k}</div>
                          <div className={styles.v}>{m.v}</div>
                        </div>
                      ),
                  )}
                </div>
              )}

              {/* Portrait projects render all phone shots together as a series.
                  Landscape projects lead with a single hero shot and stack the
                  rest after the description. */}
              {project.portrait && project.shots.length > 0 && (
                <div className={`${styles.gallery} ${styles.galleryGrid}`}>
                  {project.shots.map((src) => (
                    <button
                      key={src}
                      type="button"
                      className={styles.shotBtn}
                      onClick={() => setLightboxSrc(src)}
                      aria-label="Open image"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`${project.name} screenshot`}
                        loading="lazy"
                        decoding="async"
                        className={styles.shot}
                      />
                    </button>
                  ))}
                </div>
              )}

              {!project.portrait && project.shots[0] && (
                <div className={styles.gallery}>
                  <button
                    type="button"
                    className={styles.shotBtn}
                    onClick={() => setLightboxSrc(project.shots[0])}
                    aria-label="Open image"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.shots[0]}
                      alt={`${project.name} screenshot`}
                      loading="lazy"
                      decoding="async"
                      className={styles.shot}
                    />
                  </button>
                </div>
              )}

              {project.lead && <p className={styles.lead}>{project.lead}</p>}

              {!project.portrait && project.shots.length > 1 && (
                <div className={styles.gallery}>
                  {project.shots.slice(1).map((src) => (
                    <button
                      key={src}
                      type="button"
                      className={styles.shotBtn}
                      onClick={() => setLightboxSrc(src)}
                      aria-label="Open image"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`${project.name} screenshot`}
                        loading="lazy"
                        decoding="async"
                        className={styles.shot}
                      />
                    </button>
                  ))}
                </div>
              )}

              {project.highlights && project.highlights.length > 0 && (
                <>
                  <h4>What I did</h4>
                  <ul className={styles.high}>
                    {project.highlights.map((h) => (
                      <li key={h}>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {project.stack && project.stack.length > 0 && (
                <>
                  <h4>Stack</h4>
                  <div className={styles.tagrow}>
                    {project.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                </>
              )}

              {project.links && project.links.length > 0 && (
                <>
                  <h4>Links</h4>
                  <div className={styles.links}>
                    {project.links.map(({ label, href }) => (
                      <Button
                        key={label}
                        href={href}
                        variant="ghost"
                        external
                        icon={<ArrowUpRight weight="bold" />}
                      >
                        {label}
                      </Button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </aside>

      <Lightbox
        src={lightboxSrc}
        alt={project ? `${project.name} screenshot` : ""}
        onClose={() => setLightboxSrc(null)}
      />
    </>,
    document.body
  );
}
