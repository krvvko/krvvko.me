import React from "react";
import './index.css';
import Timer from "./Timer";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {usePreferences} from "../../utils/PreferencesContext";

const Footer = () => {
    const {translation} = usePreferences();

    return(
        <footer>
            <AnimationOnScroll animateIn="animate__fadeInUp delay-10" offset={0} animateOnce={true}>
                <div className="footer-left">
                    <span className="footer-copyright">2020-{new Date().getFullYear()} © <span className="footer-username">krvvko.me</span></span>
                    <span className="footer-version">{translation.footer.version}: <span className="footer-version-exact">Tanzanite</span></span>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp delay-20" offset={0} animateOnce={true}>
                <div className="footer-right">
                    <Timer/>
                </div>
            </AnimationOnScroll>
        </footer>
    )
}

export default Footer;