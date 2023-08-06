import React, {useEffect, useRef, useState} from 'react';
import './index.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(true);
    const [hovering, setHovering] = useState(false);
    const targetRef = useRef({ x: 0, y: 0 });
    const requestRef = useRef();

    const onMouseMove = (e) => {
        targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseEnter = () => {
        setVisible(true);
    };

    const onMouseLeave = () => {
        setVisible(false);
    };

    const onHover = () => {
        setHovering(true);
    };

    const onUnhover = () => {
        setHovering(false);
    };

    const lerp = (start, end, factor) => {
        return (1 - factor) * start + factor * end;
    };

    const animate = () => {
        if (visible) {
            const factor = 0.1;
            setPosition((prev) => ({
                x: lerp(prev.x, targetRef.current.x, factor),
                y: lerp(prev.y, targetRef.current.y, factor),
            }));
        }
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);
        document.querySelectorAll('a, button').forEach((el) => {
            el.addEventListener('mouseenter', onHover);
            el.addEventListener('mouseleave', onUnhover);
        });

        return () => {
            cancelAnimationFrame(requestRef.current);
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.querySelectorAll('a, button').forEach((el) => {
                el.removeEventListener('mouseenter', onHover);
                el.removeEventListener('mouseleave', onUnhover);
            });
        };
    }, []);

    return (
        <div
            className={`cursor ${hovering ? 'cursor--hovering' : ''} ${
                visible ? '' : 'cursor--hidden'
            }`}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
}

export default CustomCursor;