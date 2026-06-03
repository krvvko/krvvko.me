"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  delay?: number;
};

const EASE = [0.22, 0.61, 0.36, 1] as const;

export default function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
}: Props) {
  const reduce = useReducedMotion();

  const props = {
    className,
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: EASE, delay },
  } as const;

  if (as === "section") {
    return <motion.section {...props}>{children}</motion.section>;
  }
  return <motion.div {...props}>{children}</motion.div>;
}
