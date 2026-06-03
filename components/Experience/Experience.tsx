"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Tag from "@/components/Tag/Tag";
import Reveal from "@/components/Reveal/Reveal";
import ProjectDetail from "@/components/ProjectDetail/ProjectDetail";
import { PROJECTS, TECH, WORK, type Project } from "./data";
import styles from "./index.module.css";

type TabId = "projects" | "tech" | "work";

const EASE = [0.22, 0.61, 0.36, 1] as const;

const TABS: { id: TabId; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "tech", label: "Technologies" },
  { id: "work", label: "Work" },
];

export default function Experience() {
  const [tab, setTab] = useState<TabId>("projects");
  const [selected, setSelected] = useState<Project | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <>
      <Reveal as="section" className={styles.exp}>
        <div className={styles.head}>
        <div>
          <span className={styles.eyebrow}>The work</span>
          <h2>Experience</h2>
        </div>
        <div className={styles.tabs} role="tablist">
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              role="tab"
              aria-selected={tab === id}
              className={tab === id ? styles.tabActive : undefined}
              onClick={() => setTab(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={tab}
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
      {tab === "projects" && (
        <div>
          <div className={styles.projList}>
            {PROJECTS.map((p, i) => (
              <button
                key={p.id}
                className={styles.proj}
                onClick={() => {
                  setSelected(p);
                  setDetailOpen(true);
                }}
              >
                <span className={styles.idx}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.meta}>
                  {p.cat && <span className={styles.cat}>{p.cat}</span>}
                  <span className={styles.name}>{p.name}</span>
                  {p.tags && p.tags.length > 0 && (
                    <span className={styles.tagrow}>
                      {p.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </span>
                  )}
                </span>
                <span className={styles.go}>
                  <ArrowUpRight weight="bold" />
                </span>
              </button>
            ))}
          </div>
          <p className={styles.foot}>
            And much more
            <br />
            (smaller experiments &amp; work under NDA)
          </p>
        </div>
      )}

      {tab === "tech" && (
        <div className={styles.techList}>
          {TECH.map((card) => (
            <div key={card.num} className={styles.techRow}>
              <span className={styles.idx}>{card.num}</span>
              <div className={styles.techBody}>
                <h3 className={styles.techTitle}>{card.title}</h3>
                <div className={styles.techNames}>
                  {card.chips.map((c) => (
                    <span key={c} className={styles.techName}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "work" && (
        <div className={styles.timeline}>
          {WORK.map((item) => (
            <div key={item.company} className={styles.tlItem}>
              <div className={styles.tlDate}>{item.date}</div>
              <div className={styles.tlBody}>
                <span className={styles.ti}>{item.title}</span>
                <h3 className={styles.co}>{item.company}</h3>
                {item.description && <p>{item.description}</p>}
                {item.bullets && item.bullets.length > 0 && (
                  <ul className={styles.bullets}>
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                <span className={styles.tagrow}>
                  {item.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      </motion.div>

      </Reveal>

      <ProjectDetail
        project={selected}
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
        onClosed={() => setSelected(null)}
      />
    </>
  );
}
