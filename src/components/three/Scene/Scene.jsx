"use client";

import React, {useEffect} from "react";
import {Physics} from "@react-three/cannon";
import {useSceneStore} from "@/stores/useSceneStore";
import Table from "@/components/three/Table/Table";
import DraggableShrimp from "@/components/three/DraggableShrimp/DraggableShrimp";
import {useGLTF} from "@react-three/drei";

export default function Scene() {
    const shrimps = useSceneStore((s) => s.shrimps);

    const {scene: shrimpScene} = useGLTF("/three/shrimp/scene.gltf", true);
    const {scene: shrimpContactScene} = useGLTF("/three/shrimp_contact/scene.gltf", true);
    const {scene: shrimpExperienceScene} = useGLTF("/three/shrimp_experience/scene.gltf", true);

    const modelMap = {
        shrimp: shrimpScene,
        shrimp_contact: shrimpContactScene,
        shrimp_experience: shrimpExperienceScene,
    };

    return (
        <Physics>
            <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.32, 0]}
                receiveShadow={true}
            >
                <planeGeometry args={[50, 50]}/>
                <meshStandardMaterial
                    color={"#222020"}
                    metalness={0.2}
                    roughness={1}
                />
            </mesh>
            <Table />
            {shrimps.map((shrimp, index) => (
                <DraggableShrimp
                    key={index}
                    baseScene={modelMap[shrimp.model]}
                    physicsSize={[0.5, 0.45, 0.13]}
                    scale={1}
                    initialPosition={[0, 1, 0]}
                    modelOffset={[-0.18, -0.22, 0]}
                    id={shrimp.id}
                />
            ))}
        </Physics>
    );
}
