import React from "react";
import './index.css';
import Timer from "./Timer";
import {AnimationOnScroll} from "react-animation-on-scroll";

const Footer = () => {
    return(
        <footer>
            <AnimationOnScroll animateIn="animate__fadeInUp delay-10" offset={10} animateOnce={true}>
                <div className="footer-left">
                    <span>2020-{new Date().getFullYear()} © krvvko.me</span>
                    <span>Version: Tanzanite</span>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp delay-20" offset={10} animateOnce={true}>
                <div className="footer-right">
                    <Timer/>
                </div>
            </AnimationOnScroll>
        </footer>
    )
}

export default Footer;