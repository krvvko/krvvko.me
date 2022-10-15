import {Helmet} from "react-helmet";
import React from "react";

const Title = () => {

    function setTitle() {
        let t = document.location.href.split('/');

        switch (t[3]) {
            case "":
                return "Home";
            case "projects":
                return "Projects";
            case "bookmarks":
                return "Bookmarks";
            case "contact":
                return "Contact Me";
            default:
                return "404";
        }
    }

    return (
        <Helmet>
            <title>{setTitle()+` - krvvko`}</title>
        </Helmet>
    )
}

export default Title;