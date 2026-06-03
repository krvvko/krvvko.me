"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { usePathname } from "next/navigation";
import * as THREE from "three";
import HomePhysics from "./HomePhysics";
import ShrimpContact from "./ShrimpContact";
import Bubbles from "./Bubbles";
import styles from "./index.module.css";

// Home camera orbits the table: distance/pitch/yaw place it on a sphere around
// the target point and it always looks back at that target, so the table stays
// the focus while the target offset pushes it toward the right side of frame.
const HOME_CAM = {
  distance: 8.5,
  pitch: 24,
  yaw: -35,
  target: [-0.1, -1, -2.4] as [number, number, number],
  fov: 34,
};

const DEG = Math.PI / 180;

const HOME_VIEW = (() => {
  const phi = HOME_CAM.pitch * DEG;
  const theta = HOME_CAM.yaw * DEG;
  const target = new THREE.Vector3(...HOME_CAM.target);
  const pos = new THREE.Vector3(
    target.x + HOME_CAM.distance * Math.cos(phi) * Math.sin(theta),
    target.y + HOME_CAM.distance * Math.sin(phi),
    target.z + HOME_CAM.distance * Math.cos(phi) * Math.cos(theta)
  );
  const m = new THREE.Matrix4().lookAt(pos, target, new THREE.Vector3(0, 1, 0));
  const rot = new THREE.Euler().setFromRotationMatrix(m);
  return {
    position: [pos.x, pos.y, pos.z] as [number, number, number],
    rotation: [rot.x, rot.y, rot.z] as [number, number, number],
  };
})();

/**
 * Persistent 3D background. Mounted once in the root layout so the WebGL
 * context and both models survive client-side navigation instead of
 * reinitialising per page. Home and Contact each show their own shrimp; on
 * other routes the canvas is hidden with CSS while staying warm.
 */
const HOME = "/";
const CONTACT = "/contact";

export default function Scene() {
  const pathname = usePathname();
  const isHome = pathname === HOME;
  const isContact = pathname === CONTACT;
  const visible = isHome || isContact;
  // The 3D scene is desktop-only — it's purely decorative and would chew
  // battery, frame budget, and bandwidth on mobile devices for no payoff.
  const [mobile, setMobile] = useState(false);

  // Cursor + reduced-motion live outside React state: the canvas has
  // pointer-events:none, so R3F never sees the pointer — we track it on window
  // and read these refs inside the render loop (no re-renders, no setState).
  const pointer = useRef({ x: 0, y: 0 });
  const reduce = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const apply = () => setMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (mobile) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyMotion = () => {
      reduce.current = mq.matches;
    };
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    applyMotion();
    mq.addEventListener("change", applyMotion);
    window.addEventListener("pointermove", onMove);
    return () => {
      mq.removeEventListener("change", applyMotion);
      window.removeEventListener("pointermove", onMove);
    };
  }, [mobile]);

  // On home the canvas is interactive (grab the shrimp), so the hero overlay
  // is made pointer-transparent — see globals.css body[data-home]. On mobile
  // the scene is gone, so main must stay normally interactive.
  useEffect(() => {
    if (mobile) {
      delete document.body.dataset.home;
      return;
    }
    document.body.dataset.home = isHome ? "true" : "false";
  }, [isHome, mobile]);

  if (mobile) return null;

  return (
    <div
      className={styles.scene}
      data-hidden={!visible}
      data-interactive={isHome}
      aria-hidden="true"
    >
      <Canvas
        shadows
        frameloop={visible ? "always" : "demand"}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        {/* Camera is shared, so it switches per route: contact keeps the
            straight-on framing; home looks down from an angle at the table. */}
        <PerspectiveCamera
          makeDefault
          fov={isHome ? HOME_CAM.fov : 45}
          position={isHome ? HOME_VIEW.position : [0, 0, 5]}
          rotation={isHome ? HOME_VIEW.rotation : [0, 0, 0]}
        />

        {/* lighting tuned to the site palette: even hemisphere fill (sky/page
            above, warm below) plus ambient lift so no face stays dark, a warm
            key (casts the shrimp/table shadow), a cool underwater fill, and a
            coral/accent rim */}
        <hemisphereLight color="#ffffff" groundColor="#f4d6cc" intensity={0.95} />
        <ambientLight color="#eef0f5" intensity={0.7} />
        <directionalLight
          color="#fff3ec"
          position={[4, 7, 5]}
          intensity={1.15}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-near={0.5}
          shadow-camera-far={30}
          shadow-camera-left={-8}
          shadow-camera-right={8}
          shadow-camera-top={8}
          shadow-camera-bottom={-8}
          shadow-bias={-0.0004}
          shadow-radius={10}
          shadow-blurSamples={24}
        />
        <directionalLight color="#cfe0ff" position={[-5, -2, 2]} intensity={0.55} />
        <directionalLight color="#f4795b" position={[0, -3, -4]} intensity={0.4} />
        <Suspense fallback={null}>
          {isHome && <HomePhysics />}
          <ShrimpContact pointer={pointer} reduce={reduce} active={isContact} />
          <Bubbles active={isContact} reduce={reduce} />
        </Suspense>
      </Canvas>
    </div>
  );
}
