import './index.css'
import {Helmet} from "react-helmet";
import React from "react";

const Title = () => {

    document.getElementById("root").style.height = "100vh";
    document.getElementById("root").style.overflowY = "hidden";

    const handleClick = async event => {
        const box = event.currentTarget;
        document.getElementById("root").style.height = "100%";
        setTimeout(() => {
            box.style.display = 'none';
        }, 700);
    };


    function setTitle() {
        let t = document.location.href.split('/');

        switch (t[3]) {
            case "projects#main":
            case "projects":
                return "Projects";
            case "bookmarks#main":
            case "bookmarks":
                return "Bookmarks";
            case "contacts#main":
            case "contacts":
                return "Contact Me";
            case "creation#main":
            case "creation":
                return "Creation";
            default:
                return "404";
        }
    }

    return (
        <>
            <Helmet>
                <title>{setTitle()+` - krvvko`}</title>
            </Helmet>
            <a href="#main" className="creation-header" onClick={handleClick}>
                <h1 className="no-before">{setTitle()}</h1>
            </a>
        </>

    )
}

export default Title;