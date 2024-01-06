import React from "react";
import ASCIIDonut from "../ASCIIDonut";
import './index.css';
import {AnimationOnScroll} from "react-animation-on-scroll";
import 'animate.css/animate.min.css';
import Experience from "../Experience";
import {usePreferences} from "../../utils/PreferencesContext";

const Main = () => {

    const {translation} = usePreferences();

    return (
        <>
            <section className="main-top">
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <div className="main-text">
                        <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
                            <span>{translation.home.area}</span>
                        </AnimationOnScroll>
                        <div className="main-text-large">
                            <AnimationOnScroll animateIn="animate__fadeInDown delay-25" animateOnce={true}>
                                <span className="main-text-large-span"><span className="text-primary-gradient">KRVVKO</span>.ME</span>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInDown delay-50" animateOnce={true}>
                                <span className="main-text-large-span">{translation.home.webDev} <span className="text-primary-gradient">{translation.home.frontend}</span></span>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInDown delay-75" animateOnce={true}>
                                <span className="main-text-large-span">{translation.home.crafting} <span className="text-primary-gradient">{translation.home.websites}</span> {translation.home.ofAny}</span>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInDown delay-100" animateOnce={true}>
                                <span className="main-text-large-span">{translation.home.complexityWith} <span className="text-primary-gradient">{translation.home.artistic}</span> {translation.home.flair}</span>
                            </AnimationOnScroll>
                        </div>
                        <AnimationOnScroll animateIn="animate__fadeInDown delay-125" animateOnce={true}>
                            <span>{translation.home.version} {translation.home.tanzanite}</span>
                        </AnimationOnScroll>
                    </div>
                </AnimationOnScroll>

                <div className="donut-container">
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <ASCIIDonut/>
                    </AnimationOnScroll>
                </div>
            </section>
            <Experience />
        </>
    )
}

export default Main;