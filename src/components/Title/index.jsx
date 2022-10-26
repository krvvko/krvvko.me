import './index.css'
import {Helmet} from "react-helmet";

const Title = () => {

    document.getElementById("root").style.height = "100vh";
    document.getElementById("root").style.overflowY = "hidden";

    const handleClick = async event => {
        const box = event.currentTarget;
        const container = event.currentTarget.parentElement;
        document.getElementById("blinkId").style.display = "none";
        let timeout = 1700;

        function meow(elId, strP) {
            let i1 = 0;
            let newString1 = "";
            let stringL = strP;
            timeout += stringL.length*60;
            const printStr = setInterval(function () {
                newString1 += stringL[i1++];
                document.getElementById(elId).innerHTML = newString1 + "</br>";
                if (i1 >= stringL.length) {
                    clearInterval(printStr);
                }
            }, 60);
        }

        document.getElementById("line3").style.color = "#ec4e17";
        setTimeout(()=>{
            meow("line3","Meow")
            document.getElementById("line2").style.color = "#99ec8f";
            timeout += 5000;
        },5000);
        setTimeout(()=>{
            document.getElementById("line1").style.color = "#99ec8f";
            meow("line2","Rendering a result")
            timeout += 3000;
        },3000)
        timeout += 3000;
        meow("line1","Building an optimized output")

        setTimeout(() => {
            document.getElementById("root").style.height = "100%";
            document.location.hash = "#main";
        }, timeout)
        setTimeout(() => {
            container.style.display = 'none';
            box.style.display = 'none';
        }, timeout+700);
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
                <a className="creation-header-a" onClick={handleClick}>
                    <div className="main-anim-container">
                        <div className="anim-container">
                            <h3 className="root-anim">root@krvvko-me:~#</h3>
                            <div className="code-blink-js">
                                <h3 id="code"></h3>
                                <h3 id="blinkId" className="blink">|</h3>
                            </div>
                        </div>
                        <h3 className="anim-lines" id="line1"></h3>
                        <h3 className="anim-lines" id="line2"></h3>
                        <h3 className="anim-lines" id="line3"></h3>
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