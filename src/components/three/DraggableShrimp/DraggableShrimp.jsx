"use client";

import React, { useState, useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import { animated as animatedSpring, useTransition } from "react-spring";
import { animated as animatedThree } from "@react-spring/three";
import * as THREE from "three";
import { useSceneStore } from "@/stores/useSceneStore";
import { useShrimpAnimationState } from "@/hooks/useShrimpAnimationState";
import DebugMesh from "@/components/three/DebugMesh/DebugMesh";
import { useWheelRotation } from "@/hooks/useWheelRotation";
import ShrimpModel from "@/components/three/DraggableShrimp/ShrimpModel";
import { useDragControls } from "@/hooks/useDragControls";
import { sceneConfig } from "@/utils/scene-config";
import { Html } from "@react-three/drei";
import DragMe from "@/components/three/DragMe/DragMe";

const DEBUG_PHYSICS = process.env.NEXT_PUBLIC_DEBUG_PHYSICS === "true";

export default function DraggableShrimp({
                                            baseScene,
                                            physicsSize,
                                            scale,
                                            modelOffset,
                                            initialPosition,
                                            id,
                                        }) {
    const markShrimpDeleted = useSceneStore((s) => s.markShrimpDeleted);
    const shrimp = useSceneStore((s) =>
        s.shrimps.find((shrimp) => shrimp.id === id)
    );

    const { camera, mouse } = useThree();

    const [isVisible, setIsVisible] = useState(false);
    const [showDragMe, setShowDragMe] = useState(false);

    const planeRef = useRef(
        new THREE.Plane(new THREE.Vector3(0, 1, 0), -sceneConfig.shrimp_drag_y)
    );
    const rotationYRef = useRef(0);
    const tempVec = useRef(new THREE.Vector3());

    const { animatedScale, animatedOpacity } = useShrimpAnimationState(
        isVisible,
        scale,
        id,
        shrimp
    );

    const [physicsRef, api] = useBox(() => ({
        mass: 1,
        args: physicsSize,
        position: initialPosition,
    }));

    const {
        isDragging,
        handlePointerDown,
        handlePointerOver,
        handlePointerOut,
    } = useDragControls(
        physicsRef,
        camera,
        mouse,
        api,
        planeRef,
        sceneConfig.shrimp_drag_y
    );

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        baseScene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = false;
            }
        });
    }, [baseScene]);

    useWheelRotation(isDragging, api, rotationYRef);

    useFrame(() => {
        if (shrimp?.isDeleted) return;

        physicsRef.current.getWorldPosition(tempVec.current);
        if (tempVec.current.y < -2 && !shrimp?.isDeleted) {
            markShrimpDeleted(id);
        }
    });

    useEffect(() => {
        let showTimeout;
        let hideTimeout;

        if (id === "init" && !shrimp?.isDeleted) {
            showTimeout = setTimeout(() => {
                setShowDragMe(true);

                hideTimeout = setTimeout(() => {
                    setShowDragMe(false);
                }, 5000);
            }, 5000);
        }

        return () => {
            if (showTimeout) clearTimeout(showTimeout);
            if (hideTimeout) clearTimeout(hideTimeout);
        };
    }, [id, shrimp?.isDeleted]);

    const transitions = useTransition(showDragMe, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 200 },
    });

    return (
        <animatedThree.group
            ref={physicsRef}
            scale={animatedScale}
            position={initialPosition}
            opacity={animatedOpacity}
        >
            <ShrimpModel baseScene={baseScene} modelOffset={modelOffset} />
            <DebugMesh size={physicsSize} />
            <mesh
                onPointerDown={handlePointerDown}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
            >
                <boxGeometry args={physicsSize} />
                <meshBasicMaterial
                    wireframe={DEBUG_PHYSICS}
                    color="red"
                    transparent={true}
                    opacity={DEBUG_PHYSICS ? 0.5 : 0}
                />
            </mesh>
            {transitions(
                (styles, item) =>
                    item && (
                        <Html position={[0, 0.25, 0]} center style={{pointerEvents: 'none'}}>
                            <animatedSpring.div
                                style={{
                                    ...styles,
                                    pointerEvents: 'none',
                                }}
                            >
                                <DragMe />
                            </animatedSpring.div>
                        </Html>
                    )
            )}
        </animatedThree.group>
    );
}