import {ContactDescriptionElementProps} from "../../../utils/interfaces";
import React from "react";

const ContactDescriptionElement = ({title, amount, suffix = null}: ContactDescriptionElementProps) => {
    return (
        <div className="contact-me-desc-element">
            <span>{title}</span>
            <span>{amount}{suffix}</span>
        </div>
    )
}

export default ContactDescriptionElement;