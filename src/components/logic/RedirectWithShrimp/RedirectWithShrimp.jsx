"use client";

import React from 'react';
import styles from './index.module.css';
import { useSceneStore } from "@/stores/useSceneStore";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { v4 as uuidv4 } from "uuid";

const RedirectWithShrimp = ({ model, url, name, camera }) => {
    const addShrimp = useSceneStore((state) => state.addShrimp);
    const setCameraPosition = useSceneStore((state) => state.setCameraPosition);
    const setCameraTarget = useSceneStore((state) => state.setCameraTarget);
    const pathname = usePathname();

    const normalizePath = (path) => path.replace(/\/+$/, '');
    const normalizedPathname = normalizePath(pathname);
    const normalizedUrl = normalizePath(url);

    const playAnimation = () => {
        if (normalizedPathname === normalizedUrl) {
            return;
        }
        const newShrimp = { model: model, id: uuidv4() };
        setCameraPosition(camera.position);
        setCameraTarget(camera.target);
        addShrimp(newShrimp);
    };

    return (
        <Link className={`${styles.container} ${normalizedPathname === normalizedUrl && styles.active}`} href={url} onClick={playAnimation}>
            {name}
        </Link>
    );
};

export default RedirectWithShrimp;
