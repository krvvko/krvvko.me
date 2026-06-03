"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Same low-poly icosahedron + tint as the contact-page bubbles, so the burst
// reads as a little splash rather than blood.
const COLOR = "#d4f1ff";
const COUNT = 9;
const LIFE = 0.7;

type Seed = { dir: THREE.Vector3; speed: number; size: number; spin: number };

// Seeded once at module load: the lint rules forbid Math.random during render,
// and a fixed spray pattern is indistinguishable from a random one at a glance.
const SEEDS: Seed[] = Array.from({ length: COUNT }, () => {
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);
  const dir = new THREE.Vector3(
    Math.sin(phi) * Math.cos(theta),
    Math.abs(Math.cos(phi)) * 0.7 + 0.5, // bias the spray upward
    Math.sin(phi) * Math.sin(theta)
  ).normalize();
  return {
    dir,
    speed: 1.6 + Math.random() * 2,
    size: 0.06 + Math.random() * 0.08,
    spin: (Math.random() - 0.5) * 10,
  };
});

type Props = { position: [number, number, number] };

/**
 * One-shot particle pop: a handful of faceted shards fly outward and upward
 * from a point, arc back down under fake gravity, and shrink to nothing over
 * `LIFE` seconds. Purely visual — no physics bodies.
 */
export default function DeathBurst({ position }: Props) {
  const meshes = useRef<(THREE.Mesh | null)[]>([]);
  const t = useRef(0);

  useFrame((_, delta) => {
    t.current = Math.min(1, t.current + delta / LIFE);
    const tt = t.current;
    for (let i = 0; i < SEEDS.length; i++) {
      const m = meshes.current[i];
      if (!m) continue;
      const s = SEEDS[i];
      const dist = s.speed * tt;
      m.position.set(
        s.dir.x * dist,
        s.dir.y * dist - 3 * tt * tt, // gravity arc
        s.dir.z * dist
      );
      m.scale.setScalar(Math.max(0, s.size * (1 - tt)));
      m.rotation.x += s.spin * delta;
      m.rotation.y += s.spin * delta;
    }
  });

  return (
    <group position={position}>
      {SEEDS.map((s, i) => (
        <mesh
          key={i}
          ref={(el) => {
            meshes.current[i] = el;
          }}
          scale={s.size}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={COLOR}
            flatShading
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}
