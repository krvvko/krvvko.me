import { OrbitControls } from '@react-three/drei';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { useRef, useEffect } from 'react';
import './index.css';
function Camera() {
    const { camera } = useThree();
    camera.position.z = 1;
    return null;
}

function Scene() {
    const gltf = useLoader(GLTFLoader, '/scene.gltf');
    const modelRef = useRef();

    const rotationScaleX = 0.15;
    const rotationScaleY = 0.05;
    const initialTilt = -45 * (Math.PI / 180);
    const easing = 0.05;
    const targetRotation = useRef({ x: initialTilt, y: Math.PI });
    const moveAmplitude = 0.03;
    const movePeriod = 3;
    const pausePeriod = 0;
    const startY = 1;
    const elapsedTime = useRef(0);

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const x = (clientX / window.innerWidth) * 2 - 1;
        const y = -(clientY / window.innerHeight) * 2 + 1;

        targetRotation.current.x = -y * Math.PI * rotationScaleY + initialTilt;
        targetRotation.current.y = x * Math.PI * rotationScaleX + Math.PI;
    };

    useFrame((state, delta) => {
        elapsedTime.current += delta;

        const movementTime = elapsedTime.current % (movePeriod + pausePeriod);
        const movementPosition = movementTime < movePeriod
            ? (1 - Math.cos((movementTime / movePeriod) * 2 * Math.PI)) / 2
            : 0;

        if (modelRef.current) {
            modelRef.current.position.y = startY + movementPosition * moveAmplitude;
        }

        if (modelRef.current) {
            modelRef.current.rotation.x += (targetRotation.current.x - modelRef.current.rotation.x) * easing;
            modelRef.current.rotation.y += (targetRotation.current.y - modelRef.current.rotation.y) * easing;
        }
    });

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <>
            <ambientLight intensity={2.5} />
            <pointLight position={[0, 2, 0]} />
            <primitive
                object={gltf.scene}
                position={[0, 1, 0]}
                ref={modelRef}
                rotation={[0, 0, 0]}
            />
        </>
    );
}

function ShrimpModel() {
    return (
        <Canvas className="shrimp-canvas">
            <Camera />
            <Scene />
            <OrbitControls
                target={[0, 1, 0]}
                enableZoom={false}
                enableRotate={false}
                enablePan={false}
                minDistance={0.55}
                maxDistance={0.55}
                minPolarAngle={35 * (Math.PI / 180)}
                maxPolarAngle={35 * (Math.PI / 180)}
            />
        </Canvas>
    );
}

export default ShrimpModel;
