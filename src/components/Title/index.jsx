import './index.css'
import {Helmet} from "react-helmet";
import {useEffect} from "react";

const Title = () => {

    document.getElementById("root").style.height = "100vh";
    document.getElementById("root").style.overflowY = "hidden";

    const handleClick = async event => {
        const box = event.currentTarget;
        const container = event.currentTarget.parentElement;
        document.getElementById("root").style.height = "100%";
        setTimeout(() => {
            container.style.display = 'none';
            box.style.display = 'none';
        }, 700);
    };

    // setting title
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
                return "Contact";
            case "creation#main":
            case "creation":
                return "Creation";
            default:
                return "404";
        }
    }

    // animation
    let i = 0;
    let string = "cd " + setTitle() + "/ ";
    let newString = "";
    const printStr = setInterval(function () {
        newString += string[i++];
        document.getElementById("code").innerHTML = newString + "</br>";
        if (i >= string.length) {
            clearInterval(printStr);
        }
    }, 100);

    // checking if link has #main
    const hrefChecker = document.location.href.split('#');
    let disableWriter = {};
    if(hrefChecker[hrefChecker.length-1] === 'main') {
        document.getElementById("root").style.height = "100%";
        disableWriter = {display: 'none'}
    }

    return (
        <>
            <Helmet>
                <title>{setTitle() + ` - krvvko`}</title>
            </Helmet>
            <div className="creation-header" style={disableWriter}>
                <a href="#main" className="creation-header-a" onClick={handleClick}>
                    <div className="main-anim-container">
                        <div className="anim-container">
                            <h3 className="root-anim">root@krvvko-me:~#</h3>
                            <div className="code-blink-js">
                                <h3 id="code"></h3>
                                <h3 className="blink">|</h3>
                            </div>

                        </div>
                        <div className="anim-container invisible">
                            <h3 className="root-anim">root@krvvko-me:~#</h3>
                            <h3>cd {setTitle()}/|</h3>
                        </div>
                    </div>

                </a>
            </div>
        </>
    )
}

export default Title;