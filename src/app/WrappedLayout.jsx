"use client";

import "./globals.css";
import React from "react";
import Background from "@/components/three/Background/Background";
import Header from "@/components/ui/Header/Header";
import Animate from "@/app/Animate";

const WrappedLayout = ({ children }) => {
    const MemoizedBackground = React.memo(Background);

    return (
        <>
            <MemoizedBackground />
            <Header/>
            <Animate children={children} />
        </>
    );
};

export default WrappedLayout;
