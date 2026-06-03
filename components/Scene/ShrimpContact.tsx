"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFittedModel } from "./useFittedModel";
import { easeOutBack } from "./ease";
import type { FlagRef, PointerRef } from "./types";

const URL = "/three/shrimp_contact/scene.gltf";
const SPAWN_TIME = 0.5;

type Props = { pointer: PointerRef; reduce: FlagRef; active: boolean };

export default function ShrimpContact({ pointer, reduce, active }: Props) {
  const group = useRef<THREE.Group>(null);
  const spawn = useRef<THREE.Group>(null);
  const spawnT = useRef(0);
  const { object, offset, scale } = useFittedModel(URL, 1.6);
  const { viewport } = useThree();

  // Sits to the right so the contact copy and social cards stay clear of it.
  const baseX = viewport.width * 0.26;

  useFrame((state, dt) => {
    const g = group.current;
    const s = spawn.current;
    if (!g || !s) return;
    g.visible = active;
    // Replay the pop-in each time the contact page is entered.
    if (!active) {
      spawnT.current = 0;
      s.scale.setScalar(0);
      return;
    }
    if (spawnT.current < 1) {
      spawnT.current = Math.min(1, spawnT.current + dt / SPAWN_TIME);
      s.scale.setScalar(easeOutBack(spawnT.current));
    }

    const p = pointer.current;
    const calm = reduce.current;
    // Right of center, only drifting a little toward the cursor with easing.
    const bob = calm ? 0 : Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
    const targetX = baseX + (calm ? 0 : p.x * 0.4);
    const targetY = calm ? 0 : p.y * 0.3 + bob;
    g.position.x = THREE.MathUtils.damp(g.position.x, targetX, 2.2, dt);
    g.position.y = THREE.MathUtils.damp(g.position.y, targetY, 2.2, dt);
    // turn toward the cursor noticeably, on top of the small drift
    const turnY = calm ? 0 : p.x * 0.6;
    const turnX = calm ? 0 : -p.y * 0.3;
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, turnY, 2.2, dt);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, turnX, 2.2, dt);
  });

  return (
    <group ref={group}>
      <group ref={spawn} scale={0}>
        {/* base yaw turns the model from facing +X to facing the camera */}
        <group scale={scale} rotation={[0, -Math.PI / 2, 0]}>
          <primitive object={object} position={offset.toArray()} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(URL);
