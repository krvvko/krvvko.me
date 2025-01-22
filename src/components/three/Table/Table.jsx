"use client";

import React, {useEffect} from "react";
import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import NoRaycastMesh from "@/utils/no-raycast-mesh";
import ColliderBox from "@/components/three/ColliderBox/ColliderBox";

const DEBUG_PHYSICS = process.env.NEXT_PUBLIC_DEBUG_PHYSICS === "true";

/** Convenient variables */
const TABLE_PHYSICS_SIZE = [2.38, 0.5, 2.38];
const TABLE_PHYSICS_POS  = [0, 0, 0];
const TABLE_MODEL_SCALE  = 1;
const TABLE_MODEL_OFFSET = [0, -0.32, 0];
const COLLIDERS = [
    {
        args: [0.75, 0.12, 0.12],
        position: [0, 0.31, 0.32],
        rotation: [0, 0, 0],
    },
    {
        args: [0.75, 0.12, 0.12],
        position: [0, 0.31, -0.31],
        rotation: [0, 0, 0],
    },
    {
        args: [0.12, 0.12, 0.75],
        position: [0.31, 0.31, 0],
        rotation: [0, 0, 0],
    },
    {
        args: [0.12, 0.12, 0.75],
        position: [-0.31, 0.31, 0],
        rotation: [0, 0, 0],
    },
    {
        args: [0.75, 0.06, 0.75],
        position: [0, 0.28, 0],
        rotation: [0, 0, 0],
    },
];

export default function Table() {
    // Create a static physics body
    const [ref] = useBox(() => ({
        args: TABLE_PHYSICS_SIZE,
        position: TABLE_PHYSICS_POS,
        type: "Static",
    }));

    const gltf = useGLTF("/three/table/scene.gltf");

    useEffect(() => {
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                child.receiveShadow = true;
                child.castShadow = true;
                // If you don't want the table to intercept clicks, you can do:
                child.raycast = () => null;
            }
        });
    }, [gltf]);

    return (
        <group ref={ref}>
            {/* The actual table model */}
            <primitive
                object={gltf.scene}
                scale={TABLE_MODEL_SCALE}
                position={TABLE_MODEL_OFFSET}
            />

            {/* Debug box that does NOT catch pointer events */}
            {DEBUG_PHYSICS && (
                <NoRaycastMesh>
                    <boxGeometry args={TABLE_PHYSICS_SIZE} />
                    <meshBasicMaterial
                        wireframe
                        color="yellow"
                        transparent
                        opacity={0.5}
                    />
                </NoRaycastMesh>
            )}
            {COLLIDERS.map((cfg, i) => (
                <ColliderBox
                    key={i}
                    args={cfg.args}
                    position={cfg.position}
                    rotation={cfg.rotation}
                    debug={DEBUG_PHYSICS}
                />
            ))}
        </group>
    );
}
