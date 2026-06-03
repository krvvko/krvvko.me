"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { FlagRef } from "./types";

const COUNT = 18;
const RISE_TOP = 3.6;
const RISE_BOTTOM = -3.6;

type Bubble = {
  x: number;
  z: number;
  y: number;
  speed: number;
  scale: number;
  drift: number;
  phase: number;
};

const seed = (): Bubble => ({
  x: (Math.random() - 0.5) * 6.5,
  z: (Math.random() - 0.5) * 3 - 0.5,
  y: RISE_BOTTOM + Math.random() * (RISE_TOP - RISE_BOTTOM),
  speed: 0.25 + Math.random() * 0.55,
  scale: 0.05 + Math.random() * 0.13,
  drift: (Math.random() - 0.5) * 0.4,
  phase: Math.random() * Math.PI * 2,
});

// One persistent Bubbles instance lives in the layout, so the simulation
// state is a module-level singleton — kept out of hooks so the render loop
// can mutate it (React Compiler forbids mutating memoized values).
const BUBBLES: Bubble[] = Array.from({ length: COUNT }, seed);

type Props = { active: boolean; reduce: FlagRef };

/** Faceted low-poly bubbles drifting upward, as if the shrimp is underwater. */
export default function Bubbles({ active, reduce }: Props) {
  const group = useRef<THREE.Group>(null);
  const meshes = useRef<(THREE.Mesh | null)[]>([]);
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1, 0), []);

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    g.visible = active;
    if (!active || reduce.current) return;

    const t = state.clock.elapsedTime;
    for (let i = 0; i < BUBBLES.length; i++) {
      const b = BUBBLES[i];
      const m = meshes.current[i];
      if (!m) continue;
      b.y += b.speed * dt;
      if (b.y > RISE_TOP) {
        b.y = RISE_BOTTOM;
        b.x = (Math.random() - 0.5) * 6.5;
        b.z = (Math.random() - 0.5) * 3 - 0.5;
      }
      m.position.set(b.x + Math.sin(t * 0.8 + b.phase) * b.drift, b.y, b.z);
      m.rotation.x = t * 0.3 + b.phase;
      m.rotation.y = t * 0.2 + b.phase;
    }
  });

  return (
    <group ref={group}>
      {BUBBLES.map((b, i) => (
        <mesh
          key={i}
          ref={(el) => {
            meshes.current[i] = el;
          }}
          geometry={geometry}
          position={[b.x, b.y, b.z]}
          scale={b.scale}
        >
          <meshStandardMaterial
            color="#d4f1ff"
            transparent
            opacity={0.4}
            roughness={0.1}
            metalness={0.15}
            flatShading
          />
        </mesh>
      ))}
    </group>
  );
}
