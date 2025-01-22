'use client'

import {AnimatePresence, motion} from "framer-motion";
import FrozenRoute from "@/app/FrozenRoute";
import React from "react";
import {usePathname} from "next/navigation";

const Animate = ({children}) => {
    const pathname = usePathname();

    return(
        <AnimatePresence mode="wait">
            <motion.div className={'motion-div'} key={pathname} style={{pointerEvents: 'none'}}>
                <FrozenRoute>{children}</FrozenRoute>
            </motion.div>
        </AnimatePresence>
    )
}

export default Animate;