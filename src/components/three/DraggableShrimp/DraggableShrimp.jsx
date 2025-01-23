"use client";

import React, { useState, useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";
import {useSceneStore} from "@/stores/useSceneStore";

const DEBUG_PHYSICS = process.env.NEXT_PUBLIC_DEBUG_PHYSICS === "true";

export default function DraggableShrimp({
                                            baseScene,
                                            physicsSize = [0.5, 0.5, 0.5],
                                            scale = 1,
                                            modelOffset = [0, 0, 0],
                                            initialPosition = [0, 1, 0],
                                            id
                                        }) {
    const DRAG_Y = 0.65;
    const SCROLL_ROTATION_SPEED = 0.005;

    useEffect(() => {
        baseScene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = false;
            }
        });
    }, [baseScene]);

    const [physicsRef, api] = useBox(() => ({
        mass: 1,
        args: physicsSize,
        position: initialPosition,
    }));

    const { camera, mouse } = useThree();
    const [isDragging, setIsDragging] = useState(false);
    const [offset2D, setOffset2D] = useState(new THREE.Vector2());
    const [rotationY, setRotationY] = useState(0);
    const planeRef = useRef(new THREE.Plane(new THREE.Vector3(0, 1, 0), -DRAG_Y));
    const raycasterRef = useRef(new THREE.Raycaster());
    const tempVec = useRef(new THREE.Vector3());

    const [isVisible, setIsVisible] = useState(false); // For animation visibility control
    const markShrimpDeleted = useSceneStore((s) => s.markShrimpDeleted);
    const removeShrimp = useSceneStore((s) => s.removeShrimp);
    const shrimp = useSceneStore((s) => s.shrimps.find((shrimp) => shrimp.id === id));

    // Animation for scale and opacity using react-spring
    const { animatedScale, animatedOpacity } = useSpring({
        animatedScale: isVisible ? scale : 0,
        animatedOpacity: isVisible ? 1 : 0,
        config: {
            tension: 120,
            friction: 14,
            duration: 500
        },
        onRest: () => {
            if (shrimp?.isDeleted) {
                removeShrimp(id);
            }
        },
    });

    useEffect(() => {
        setIsVisible(true); // Trigger the animation when the component mounts
    }, []);

    useEffect(() => {
        function handlePointerUp() {
            setIsDragging(false);
            document.body.style.cursor = "default";
        }
        window.addEventListener("pointerup", handlePointerUp);
        return () => window.removeEventListener("pointerup", handlePointerUp);
    }, []);

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
        return () => window.removeEventListener("wheel", handleWheel, { passive: false });
    }, [isDragging, api]);

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

    useFrame(() => {
        if (shrimp?.isDeleted) return;

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
        if (tempVec.current.y < -2 && !shrimp?.isDeleted) {
            markShrimpDeleted(id);
        }
    });

    return (
        <animated.group
            ref={physicsRef}
            scale={animatedScale}
            position={initialPosition}
            opacity={animatedOpacity}
        >
            <primitive object={baseScene.clone()} position={modelOffset} />
            <mesh
                onPointerDown={onPointerDown}
                onPointerOver={onPointerOver}
                onPointerOut={onPointerOut}
            >
                <boxGeometry args={physicsSize} />
                <meshBasicMaterial
                    wireframe={DEBUG_PHYSICS}
                    color="red"
                    transparent
                    opacity={DEBUG_PHYSICS ? 0.5 : 0}
                />
            </mesh>
        </animated.group>
    );
}
