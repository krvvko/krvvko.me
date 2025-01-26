"use client";

import "./globals.css";
import React, {useEffect, useState} from "react";
import Background from "@/components/three/Background/Background";
import Header from "@/components/ui/Header/Header";
import Animate from "@/app/Animate";
import BackgroundMobile from "@/components/ui/BackgroundMobile/BackgroundMobile";

const WrappedLayout = ({ children }) => {
    const [isPortrait, setIsPortrait] = useState(false);

    const MemoizedBackground = React.memo(Background);

    useEffect(() => {
        const handleOrientationChange = () => {
            setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
        };
        handleOrientationChange();
        const mediaQuery = window.matchMedia("(orientation: portrait)");
        mediaQuery.addEventListener("change", handleOrientationChange);
        return () => mediaQuery.removeEventListener("change", handleOrientationChange);
    }, []);


    return (
        <>
            {isPortrait ? <BackgroundMobile /> : <MemoizedBackground />}
            <Header/>
            <Animate children={children} />
        </>
    );
};

export default WrappedLayout;
