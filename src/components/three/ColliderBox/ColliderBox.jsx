import React from "react";
import { useBox } from "@react-three/cannon";

/**
 * A single box collider.
 *
 * @param {number[]} args       the [width, height, depth] of the box
 * @param {number[]} position   where to place it
 * @param {number[]} rotation   Euler angles in radians [rx, ry, rz]
 * @param {boolean}  debug      whether to show a wireframe for debugging
 */
function ColliderBox({ args, position, rotation, debug = false }) {
    const [ref] = useBox(() => ({
        type: "Static",
        args,
        position,
        rotation,
    }));

    return (
        <group ref={ref}>
            {debug && (
                <mesh>
                    <boxGeometry args={args} />
                    <meshBasicMaterial
                        wireframe
                        color="yellow"
                        transparent
                        opacity={0.5}
                    />
                </mesh>
            )}
        </group>
    );
}

export default ColliderBox;
