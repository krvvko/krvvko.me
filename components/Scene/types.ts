import type { RefObject } from "react";

/** Normalized cursor position (-1..1 on each axis), updated outside React. */
export type PointerRef = RefObject<{ x: number; y: number }>;

/** Live prefers-reduced-motion flag, read inside the render loop. */
export type FlagRef = RefObject<boolean>;
