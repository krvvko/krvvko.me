import React from "react";
import ASCIIDonut from "../ASCIIDonut";
import './index.css';
import {AnimationOnScroll} from "react-animation-on-scroll";
import 'animate.css/animate.min.css';
import Experience from "../Experience";

const Main = () => {
    return (
        <>
            <section className="main-top">
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <div className="main-text">
                        <AnimationOnScroll animateIn="animate__fadeInDown">
                            <span>Home area</span>
                        </AnimationOnScroll>
                        <div className="main-text-large">
                            <AnimationOnScroll animateIn="animate__fadeInDown delay-25">
                                <span className="main-text-large-span"><span className="text-primary-gradient">KRVVKO</span>.ME</span>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInDown delay-50">
                                <span className="main-text-large-span">Web Developer - <span className="text-primary-gradient">Frontend</span></span>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInDown delay-75">
                                <span className="main-text-large-span">Crafting <span className="text-primary-gradient">Websites</span> of Any</span>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInDown delay-100">
                                <span className="main-text-large-span">Complexity with <span className="text-primary-gradient">Artistic</span> Flair</span>
                            </AnimationOnScroll>
                        </div>
                        <AnimationOnScroll animateIn="animate__fadeInDown delay-125">
                            <span>Version: Tanzanite</span>
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