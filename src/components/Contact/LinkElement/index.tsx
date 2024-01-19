import React from "react";
import './index.css';
import {Link} from "react-router-dom";
import {LinkElementProps} from "../../../utils/interfaces";

const LinkElement = ({title, link, username, icon}: LinkElementProps) => {
    return (
        <Link to={link} className="contact-me-link-top" target="_blank" rel="noreferrer">
            <div className="contact-link-element-text">
                <div className="contact-link-element-text-element">
                    <span>{title}</span>
                </div>
                <div className="contact-link-element-text-element">
                    <span>{username}</span>
                </div>
            </div>
            <i className={`icon ${icon} link-element-icon`}></i>
        </Link>
    )
}

export default LinkElement;