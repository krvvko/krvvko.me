import React from "react";
import './index.css';
import Timer from "./Timer";
import {AnimationOnScroll} from "react-animation-on-scroll";

const Footer = () => {
    return(
        <footer>
            <AnimationOnScroll animateIn="animate__fadeInUp delay-10" offset={10} animateOnce={true}>
                <div className="footer-left">
                    <span className="footer-copyright">2020-{new Date().getFullYear()} © <span className="footer-username">krvvko.me</span></span>
                    <span className="footer-version">Version: <span className="footer-version-exact">Tanzanite</span></span>
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