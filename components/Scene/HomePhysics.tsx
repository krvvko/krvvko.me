"use client";

import { useMemo, useState } from "react";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import Table from "./Table";
import DraggableShrimp from "./DraggableShrimp";

// Scene sits to the right of the hero copy.
const X = 1.4;
const TABLE_URL = "/three/table/scene.gltf";
const TABLE_Y = -1.0;
const TABLE_SIZE = 2.4;
const SHRIMP_SPAWN: [number, number, number] = [X, 1.6, 0];

/**
 * Physics world for the home page: a static table with the shrimp dropping
 * onto it from above. Mounted only while on home so the simulation isn't
 * running off-screen. The floor is aligned to the foot of the table; a shrimp
 * that tumbles down to it pops out of existence and a fresh one drops in.
 */
export default function HomePhysics() {
  const { scene } = useGLTF(TABLE_URL);
  // Floor sits flush with the bottom of the (centered) table model.
  const floorY = useMemo(() => {
    const size = new THREE.Vector3();
    new THREE.Box3().setFromObject(scene).getSize(size);
    const scale = TABLE_SIZE / (Math.max(size.x, size.y, size.z) || 1);
    return TABLE_Y - (size.y * scale) / 2;
  }, [scene]);

  // Bumping the key remounts the shrimp at the spawn point, replaying its
  // drop-in animation — used to respawn after one falls to the floor.
  const [spawnId, setSpawnId] = useState(0);

  return (
    <Physics gravity={[0, -9.81, 0]}>
      <Table position={[X, TABLE_Y, 0]} size={TABLE_SIZE} />
      <DraggableShrimp
        key={spawnId}
        position={SHRIMP_SPAWN}
        size={0.65}
        floorY={floorY}
        onFell={() => setSpawnId((n) => n + 1)}
      />

      {/* Invisible ground that only renders the shadow the table (and shrimp)
          cast, sitting flush with the floor. */}
      <mesh
        position={[X, floorY, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[24, 14]} />
        <shadowMaterial transparent opacity={0.22} />
      </mesh>

      <RigidBody type="fixed">
        <CuboidCollider args={[10, 0.1, 5]} position={[0, floorY - 0.1, 0]} />
        <CuboidCollider args={[0.1, 4, 5]} position={[X - 4, 0, 0]} />
        <CuboidCollider args={[0.1, 4, 5]} position={[X + 4, 0, 0]} />
      </RigidBody>
    </Physics>
  );
}
