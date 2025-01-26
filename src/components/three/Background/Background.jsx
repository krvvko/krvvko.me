"use client";

import React, {useEffect, useRef} from "react";
import styles from "./index.module.css";
import { Canvas } from "@react-three/fiber";
import AnimateCamera from "@/utils/animate-camera";
import Scene from "@/components/three/Scene/Scene";
import {usePathname} from "next/navigation";
import {useSceneStore} from "@/stores/useSceneStore";
import {sceneConfig} from "@/utils/scene-config";

function Light() {
    const lightRef = useRef();

    return (
        <>
            <ambientLight intensity={0.15} />
            <spotLight
                shadow-bias={-0.0005}
                ref={lightRef}
                color={"#efe4ef"}
                intensity={50}
                position={[0, 5, 0]}
                castShadow={true}
                angle={60}
                penumbra={0.5}
            />
            <spotLight
                ref={lightRef}
                color={"#ed98ed"}
                intensity={50}
                position={[-3, 3, 3]}
                angle={60}
                penumbra={0.5}
            />
            <spotLight
                ref={lightRef}
                color={"#989ced"}
                intensity={50}
                position={[3, 3, -3]}
                angle={60}
                penumbra={0.5}
            />
        </>
    );
}

export default function Background() {
    const pathname = usePathname();
    const { setCamera } = useSceneStore();

    useEffect(() => {
        let config;

        if (pathname.startsWith('/project/')) {
            config = sceneConfig.urlCameraMapper['/experience'];
        } else {
            config = sceneConfig.urlCameraMapper[pathname] || sceneConfig.urlCameraMapper['default'];
        }

        setCamera(config.position, config.target);
    }, []);


    return (
        <div className={styles.container}>
            <Canvas camera={{ position: [10, 5, 10], fov: 60 }} shadows>
                <Light />
                <AnimateCamera />
                <Scene />
            </Canvas>
        </div>
    );
}
