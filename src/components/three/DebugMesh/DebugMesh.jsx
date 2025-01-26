import React from "react";

const DEBUG_PHYSICS = process.env.NEXT_PUBLIC_DEBUG_PHYSICS === "true";

const DebugMesh = ({ size }) =>
    DEBUG_PHYSICS ? (
        <mesh>
            <boxGeometry args={size} />
            <meshBasicMaterial
                wireframe={true}
                color="red"
                transparent={true}
                opacity={0.5} />
        </mesh>
    ) : null;

export default DebugMesh;