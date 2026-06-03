import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

/**
 * Loads a GLTF and normalizes it to a target world size regardless of the
 * model's authored units, returning a centered clone plus the scale to apply.
 */
export function useFittedModel(url: string, targetSize: number) {
  const { scene } = useGLTF(url);

  return useMemo(() => {
    const object = scene.clone(true);
    object.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
    const box = new THREE.Box3().setFromObject(object);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scale = targetSize / maxDim;
    // `height` is the fitted (post-scale) vertical extent; since the clone is
    // centered on its RigidBody, its bottom sits at position.y - height / 2.
    return { object, offset: center.multiplyScalar(-1), scale, height: size.y * scale };
  }, [scene, targetSize]);
}
