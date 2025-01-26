import {useCallback, useEffect} from "react";

export const useWheelRotation = (isDragging, api, rotationYRef) => {
    const SCROLL_ROTATION_SPEED = 0.005;

    const handleWheel = useCallback(
        (e) => {
            if (isDragging) {
                e.preventDefault();
                const delta = e.deltaY * SCROLL_ROTATION_SPEED;
                rotationYRef.current += delta;
                api.rotation.set(0, rotationYRef.current, 0);
            }
        },
        [isDragging, api]
    );

    useEffect(() => {
        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => window.removeEventListener("wheel", handleWheel, { passive: false });
    }, [handleWheel]);

    return rotationYRef;
};