"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { RigidBody, MeshCollider, type RapierRigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { useFittedModel } from "./useFittedModel";
import { easeOutBack } from "./ease";
import DeathBurst from "./DeathBurst";

const URL = "/three/shrimp_home/scene.gltf";

type Props = {
  position: [number, number, number];
  size: number;
  floorY: number;
  onFell: () => void;
};

// Orients the model to face the viewer; wheel-spin while dragging adds to it.
const BASE_YAW = -Math.PI / 2;
// The visible model sits this far above the collider so the flat legs at the
// shrimp's base rest just above the table instead of poking through it.
const BASE_LIFT = 0.02;
// Small lift above the shrimp's resting height so it glides over the table
// surface while dragged instead of scraping through it.
const DRAG_LIFT = 0.15;
// How close the shrimp's centre must get to the floor to count as "landed".
// Low enough that it actually reaches the ground before popping.
const FLOOR_DETECT = 0.32;
// Animation lengths (seconds).
const SPAWN_TIME = 0.4;
const DEATH_TIME = 0.7;

/**
 * Dynamic shrimp: pops in at the spawn point, drops under gravity onto the
 * table, and can be grabbed and dragged. While dragging it becomes a kinematic
 * body locked to a horizontal plane at a fixed height; the cursor ray hits that
 * plane, so the shrimp follows the mouse across the whole table — including far
 * corners. If it tumbles down to the floor it spins itself out of existence and
 * calls `onFell` so a fresh one can drop in. The collider is an auto-generated
 * convex hull of the model geometry.
 */
export default function DraggableShrimp({
  position,
  size,
  floorY,
  onFell,
}: Props) {
  const body = useRef<RapierRigidBody>(null);
  const anim = useRef<THREE.Group>(null);
  const [dragging, setDragging] = useState(false);
  const [deathAt, setDeathAt] = useState<[number, number, number] | null>(null);
  const dying = deathAt !== null;
  const { camera, pointer } = useThree();
  const { object, offset, scale } = useFittedModel(URL, size);
  // Separate copy used only to build the hull; it stays at the model's natural
  // height while the visible copy is lifted, opening a small gap below the legs.
  // The library builds colliders via traverseVisible, so it must stay visible —
  // we hide it with transparent (cloned) materials and disable its shadow.
  const colliderObject = useMemo(() => {
    const clone = object.clone(true);
    clone.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (!mesh.isMesh) return;
      mesh.castShadow = false;
      mesh.receiveShadow = false;
      const hide = (m: THREE.Material) => {
        const next = m.clone();
        next.transparent = true;
        next.opacity = 0;
        next.depthWrite = false;
        return next;
      };
      mesh.material = Array.isArray(mesh.material)
        ? mesh.material.map(hide)
        : hide(mesh.material);
    });
    return clone;
  }, [object]);

  const plane = useRef(new THREE.Plane());
  const dragY = useRef(position[1]);
  const raycaster = useRef(new THREE.Raycaster());
  const hit = useRef(new THREE.Vector3());

  const spawnT = useRef(0);
  const deathT = useRef(0);

  // Yaw applied while dragging, spun via the mouse wheel. BASE_YAW orients the
  // model to face the viewer; the wheel adds to it.
  const yaw = useRef(0);
  const euler = useRef(new THREE.Euler());
  const quat = useRef(new THREE.Quaternion());

  useEffect(() => {
    if (!dragging) return;
    const release = () => setDragging(false);
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      yaw.current += e.deltaY * 0.004;
    };
    window.addEventListener("pointerup", release);
    window.addEventListener("wheel", onWheel, { passive: false });
    document.body.style.cursor = "grabbing";
    return () => {
      window.removeEventListener("pointerup", release);
      window.removeEventListener("wheel", onWheel);
      document.body.style.cursor = "";
    };
  }, [dragging]);

  useFrame((_, delta) => {
    const g = anim.current;
    if (!g) return;

    // Pop-in: scale from nothing up to full with a little overshoot.
    if (spawnT.current < 1) {
      spawnT.current = Math.min(1, spawnT.current + delta / SPAWN_TIME);
      g.scale.setScalar(easeOutBack(spawnT.current));
    }

    // Death: the shrimp pops away while a bubble-coloured burst sprays out (see
    // DeathBurst, rendered below), then we ask for a replacement.
    if (deathAt) {
      deathT.current = Math.min(1, deathT.current + delta / DEATH_TIME);
      const t = deathT.current;
      // Quick pop-out, gone well before the particles finish their arc.
      g.scale.setScalar(Math.max(0, 1 - t / 0.3));
      body.current?.setNextKinematicTranslation({
        x: deathAt[0],
        y: deathAt[1],
        z: deathAt[2],
      });
      if (t >= 1) onFell();
      return;
    }

    if (dragging && body.current) {
      // Lock to a horizontal plane (normal = up) at the fixed drag height, then
      // project the cursor ray onto it so the shrimp follows the mouse across
      // the whole table surface, far corners included.
      plane.current.set(new THREE.Vector3(0, 1, 0), -dragY.current);
      raycaster.current.setFromCamera(pointer, camera);
      if (raycaster.current.ray.intersectPlane(plane.current, hit.current)) {
        body.current.setNextKinematicTranslation({
          x: hit.current.x,
          y: dragY.current,
          z: hit.current.z,
        });
      }
      // Wheel-driven spin around the vertical axis (added to the base facing).
      euler.current.set(0, BASE_YAW + yaw.current, 0);
      quat.current.setFromEuler(euler.current);
      body.current.setNextKinematicRotation(quat.current);
      return;
    }

    // Settled on (or rolled onto) the floor — begin the despawn.
    const p = body.current?.translation();
    if (p && p.y < floorY + FLOOR_DETECT) {
      setDeathAt([p.x, p.y, p.z]);
    }
  });

  return (
    <>
    <RigidBody
      ref={body}
      colliders={false}
      position={position}
      rotation={[0, BASE_YAW, 0]}
      type={dragging || dying ? "kinematicPosition" : "dynamic"}
      restitution={0.15}
      friction={1}
      linearDamping={0.5}
      angularDamping={0.6}
    >
      {/* Hitbox: a hull of the model at its natural height (rendered invisibly
          via transparent materials so traverseVisible still finds it). */}
      <MeshCollider type="hull">
        <group scale={scale}>
          <primitive object={colliderObject} position={offset.toArray()} />
        </group>
      </MeshCollider>

      {/* Visible model, lifted by BASE_LIFT above the hitbox. Starts at full
          scale so spawn timing matches; useFrame drives the visual pop-in. */}
      <group ref={anim} scale={1} position={[0, BASE_LIFT, 0]}>
        <group
          scale={scale}
          onPointerDown={(e) => {
            if (dying) return;
            e.stopPropagation();
            const t = body.current?.translation();
            if (t) dragY.current = t.y + DRAG_LIFT;
            setDragging(true);
          }}
          onPointerOver={() => {
            if (!dying) document.body.style.cursor = "grab";
          }}
          onPointerOut={() => {
            if (!dragging) document.body.style.cursor = "";
          }}
        >
          <primitive object={object} position={offset.toArray()} />
        </group>
      </group>
    </RigidBody>
    {deathAt && <DeathBurst position={deathAt} />}
    </>
  );
}

useGLTF.preload(URL);
