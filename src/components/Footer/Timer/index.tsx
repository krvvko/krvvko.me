import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (date: Date): string => {
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };

    const getGreeting = (date: Date): string => {
        const hour = date.getHours();
        if (hour >= 22 || hour < 6) {
            return "Good night";
        } else if (hour >= 6 && hour < 10) {
            return "Good morning";
        } else if (hour >= 10 && hour < 16) {
            return "Have a productive day";
        } else {
            return "Good evening";
        }
    };

    return(
        <div className="footer-timer-container">
            <span>{formatTime(currentTime)}</span>
            <span>{getGreeting(currentTime)}</span>
        </div>
    );
};

export default Timer;
