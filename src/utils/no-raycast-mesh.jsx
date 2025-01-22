"use client";
import React, { useRef, useEffect } from "react";

export default function NoRaycastMesh(props) {
    const meshRef = useRef();

    useEffect(() => {
        if (meshRef.current) {
            meshRef.current.raycast = () => null;
        }
    }, []);

    return <mesh ref={meshRef} {...props} />;
}
