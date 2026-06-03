"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { useFittedModel } from "./useFittedModel";
import { easeOutBack } from "./ease";

const URL = "/three/table/scene.gltf";
const SPAWN_TIME = 0.5;

type Props = { position: [number, number, number]; size: number };

/**
 * Static surface the shrimp lands on. The collider is auto-built as a trimesh
 * straight from the model's geometry, so no hitbox is authored by hand. On
 * mount it pops in from nothing — the wrapper starts at full scale so the
 * trimesh is built at the right size, and useFrame drives the visual scale.
 */
export default function Table({ position, size }: Props) {
  const { object, offset, scale } = useFittedModel(URL, size);
  const anim = useRef<THREE.Group>(null);
  const spawnT = useRef(0);

  useFrame((_, delta) => {
    const g = anim.current;
    if (!g || spawnT.current >= 1) return;
    spawnT.current = Math.min(1, spawnT.current + delta / SPAWN_TIME);
    g.scale.setScalar(easeOutBack(spawnT.current));
  });

  return (
    <RigidBody type="fixed" colliders="trimesh" position={position}>
      <group ref={anim} scale={1}>
        <group scale={scale}>
          <primitive object={object} position={offset.toArray()} />
        </group>
      </group>
    </RigidBody>
  );
}

useGLTF.preload(URL);
