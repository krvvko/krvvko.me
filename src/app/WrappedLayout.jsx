"use client";

import "./globals.css";
import React from "react";
import Animate from "@/app/Animate";

const WrappedLayout = ({ children }) => {
    return (
        <Animate children={children} />
    );
};

export default WrappedLayout;
