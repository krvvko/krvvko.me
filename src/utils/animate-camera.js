import {useFrame, useThree} from "@react-three/fiber";
import * as THREE from "three";
import {useSceneStore} from "@/stores/useSceneStore";
import {useRef} from "react";
import {sceneConfig} from "@/utils/scene-config";

export default function AnimateCamera() {
    const { camera } = useThree();

    const cameraPosition = useSceneStore((s) => s.cameraPosition);
    const cameraTarget = useSceneStore((s) => s.cameraTarget);

    const currentTargetRef = useRef(new THREE.Vector3(...cameraTarget));

    useFrame(() => {
        const desiredPos = new THREE.Vector3(...cameraPosition);
        camera.position.lerp(desiredPos, sceneConfig.lerpValue);

        const desiredTarget = new THREE.Vector3(...cameraTarget);
        currentTargetRef.current.lerp(desiredTarget, sceneConfig.lerpValue);

        camera.lookAt(currentTargetRef.current);
    });

    return null;
}
