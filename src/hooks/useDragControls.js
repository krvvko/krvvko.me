import {useCallback, useEffect, useRef, useState} from "react";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";

export const useDragControls = (physicsRef, camera, mouse, api, planeRef, DRAG_Y) => {
    const [isDragging, setIsDragging] = useState(false);
    const [offset2D, setOffset2D] = useState(new THREE.Vector2());
    const raycasterRef = useRef(new THREE.Raycaster());

    const handlePointerDown = useCallback(
        (e) => {
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
        },
        [api, camera, mouse, physicsRef]
    );

    const handlePointerUp = useCallback(() => {
        setIsDragging(false);
        document.body.style.cursor = "default";
    }, []);

    const handlePointerOver = useCallback(
        (e) => {
            e.stopPropagation();
            if (!isDragging) {
                document.body.style.cursor = "grab";
            }
        },
        [isDragging]
    );

    const handlePointerOut = useCallback(
        (e) => {
            e.stopPropagation();
            if (!isDragging) {
                document.body.style.cursor = "default";
            }
        },
        [isDragging]
    );

    useEffect(() => {
        window.addEventListener("pointerup", handlePointerUp);
        return () => window.removeEventListener("pointerup", handlePointerUp);
    }, [handlePointerUp]);

    useFrame(() => {
        if (isDragging) {
            const desiredNDC = new THREE.Vector2(mouse.x, mouse.y).add(offset2D);
            raycasterRef.current.setFromCamera(desiredNDC, camera);
            const intersection = new THREE.Vector3();
            if (raycasterRef.current.ray.intersectPlane(planeRef.current, intersection)) {
                api.position.set(intersection.x, DRAG_Y, intersection.z);
                api.velocity.set(0, 0, 0);
                api.angularVelocity.set(0, 0, 0);
            }
        }
    });

    return {
        isDragging,
        handlePointerDown,
        handlePointerOver,
        handlePointerOut,
    };
};