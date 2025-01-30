"use client"

import React, {useEffect, useState} from 'react';
import BackgroundMobile from "@/components/ui/BackgroundMobile/BackgroundMobile";
import Background from "@/components/three/Background/Background";
console.log("%cWhat are you trying to find there? All sources are available on https://github.com/krvvko", "color:#FCFCFCFF; border: 2px solid #4981e8; background: #111111; padding: 6px 15px; font-size: 0.9rem; border-radius: 6px;");

const BackgroundWrapper = () => {
    const [isPortrait, setIsPortrait] = useState(false);

    useEffect(() => {
        const handleOrientationChange = () => {
            setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
        };
        handleOrientationChange();
        const mediaQuery = window.matchMedia("(orientation: portrait)");
        mediaQuery.addEventListener("change", handleOrientationChange);
        return () => mediaQuery.removeEventListener("change", handleOrientationChange);
    }, []);

    if (!isPortrait) {
        return <Background />
    } else {
        return <BackgroundMobile />;
    }
}

export default BackgroundWrapper;
