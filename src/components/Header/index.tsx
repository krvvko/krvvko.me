import React from "react";
import './index.css';
import AnimatedLink from "../AnimatedLink";
import Logo from "./Logo";

const Header:React.FC = () => {
    return(
        <header>
            <div className="header-left">
                <Logo />
            </div>
            <div className="header-middle">
                <AnimatedLink linkClass="header-link" to="/">home</AnimatedLink>
                <AnimatedLink linkClass="header-link" to="/about">about</AnimatedLink>
            </div>
            <div className="header-right">

            </div>
        </header>
    )
}

export default Header;