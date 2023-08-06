import React from "react";
import './index.css';
import ShrimpModel from "../ShrimpModel";
import WelcomeText from "../WelcomeText";
import WaveWelcomeBg from "../WaveWelcomeBg";
import ScrollDown from "../ScrollDown";

const WelcomeScreen = () => {
    return (
        <div className="welcome-screen">
            <div className="welcome-left">
                <WelcomeText />
            </div>
            <div className="welcome-right">
                <ShrimpModel />
            </div>
            <WaveWelcomeBg />
            <ScrollDown />
        </div>
    )
}

export default WelcomeScreen;