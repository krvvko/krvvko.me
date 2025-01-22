"use client";

import React, { useState, useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const DEBUG_PHYSICS = process.env.NEXT_PUBLIC_DEBUG_PHYSICS === "true";

export default function DraggableShrimp({
                                            model = "shrimp",
                                            physicsSize = [0.5, 0.5, 0.5],
                                            scale = 1,
                                            modelOffset = [0, 0, 0],
                                            initialPosition = [0, 1, 0],
                                        }) {
    const DRAG_Y = 0.65;
    const SCROLL_ROTATION_SPEED = 0.005;

    const { scene } = useGLTF(`/three/${model}/scene.gltf`, true);

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = false;
            }
        });
    }, [scene]);

    const [physicsRef, api] = useBox(() => ({
        mass: 1,
        args: physicsSize,
        position: initialPosition,
    }));

    // Drag logic
    const { camera, mouse } = useThree();
    const [isDragging, setIsDragging] = useState(false);
    const [offset2D, setOffset2D] = useState(new THREE.Vector2());
    const [rotationY, setRotationY] = useState(0);

    const planeRef = useRef(new THREE.Plane(new THREE.Vector3(0, 1, 0), -DRAG_Y));
    const raycasterRef = useRef(new THREE.Raycaster());
    const tempVec = useRef(new THREE.Vector3());

    // Release drag on pointer up
    useEffect(() => {
        function handlePointerUp() {
            setIsDragging(false);
            document.body.style.cursor = "default";
        }
        window.addEventListener("pointerup", handlePointerUp);
        return () => {
            window.removeEventListener("pointerup", handlePointerUp);
        };
    }, []);

    // Scroll => rotate if dragging
    useEffect(() => {
        function handleWheel(e) {
            if (isDragging) {
                e.preventDefault();
                setRotationY((oldVal) => {
                    const newVal = oldVal + e.deltaY * SCROLL_ROTATION_SPEED;
                    api.rotation.set(0, newVal, 0);
                    return newVal;
                });
            }
        }
        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => {
            window.removeEventListener("wheel", handleWheel, { passive: false });
        };
    }, [isDragging, api]);

    // Pointer down => start dragging
    const onPointerDown = (e) => {
        e.stopPropagation();
        setIsDragging(true);
        document.body.style.cursor = "grabbing";

        api.velocity.set(0, 0, 0);
        api.angularVelocity.set(0, 0, 0);

        const shrimpPos = new THREE.Vector3();
        physicsRef.current.getWorldPosition(shrimpPos);

        const shrimpNDC = shrimpPos.clone().project(camera);
        const pointerNDC = new THREE.Vector2(mouse.x, mouse.y);
        const diff = new THREE.Vector2().subVectors(shrimpNDC, pointerNDC);
        setOffset2D(diff);
    };

    // Cursor changes
    const onPointerOver = (e) => {
        e.stopPropagation();
        if (!isDragging) {
            document.body.style.cursor = "grab";
        }
    };
    const onPointerOut = (e) => {
        e.stopPropagation();
        if (!isDragging) {
            document.body.style.cursor = "default";
        }
    };

    // Each frame => drag or respawn if below table
    useFrame(() => {
        if (isDragging) {
            const desiredNDC = new THREE.Vector2(mouse.x, mouse.y).add(offset2D);
            raycasterRef.current.setFromCamera(
                { x: desiredNDC.x, y: desiredNDC.y },
                camera
            );
            const intersection = new THREE.Vector3();
            if (raycasterRef.current.ray.intersectPlane(planeRef.current, intersection)) {
                api.position.set(intersection.x, DRAG_Y, intersection.z);
                api.velocity.set(0, 0, 0);
                api.angularVelocity.set(0, 0, 0);
            }
        }

        physicsRef.current.getWorldPosition(tempVec.current);
        if (tempVec.current.y < -2) {
            api.position.set(...initialPosition);
            api.velocity.set(0, 0, 0);
            api.angularVelocity.set(0, 0, 0);
            setRotationY(0);
            api.rotation.set(0, 0, 0);
        }
    });

    return (
        <group ref={physicsRef}>
            <primitive object={scene.clone()} scale={scale} position={modelOffset} />
            <mesh onPointerDown={onPointerDown} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
                <boxGeometry args={physicsSize} />
                <meshBasicMaterial
                    wireframe={DEBUG_PHYSICS}
                    color="red"
                    transparent
                    opacity={DEBUG_PHYSICS ? 0.5 : 0}
                />
            </mesh>
        </group>
    );
}
