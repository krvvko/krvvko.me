import {useSceneStore} from "@/stores/useSceneStore";
import {useSpring} from "@react-spring/three";

export const useShrimpAnimationState = (isVisible, scale, id, shrimp) => {
    const removeShrimp = useSceneStore((s) => s.removeShrimp);

    const { animatedScale, animatedOpacity } = useSpring({
        animatedScale: isVisible ? scale : 0,
        animatedOpacity: isVisible ? 1 : 0,
        config: {
            tension: 120,
            friction: 14,
            duration: 500,
        },
        onRest: () => {
            if (shrimp?.isDeleted) {
                removeShrimp(id);
            }
        },
    });

    return { animatedScale, animatedOpacity };
};