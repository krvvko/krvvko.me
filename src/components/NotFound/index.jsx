import {Helmet} from "react-helmet";
import './index.css';

const NotFound = () => {

    function repeter() {
        let i = 0;
        let stringP = " 404"
        let newString = "";

        const printStr = setInterval(function () {
            newString += stringP[i++];
            document.getElementById("404").innerHTML = newString;
            if (i >= stringP.length) {
                clearInterval(printStr);
                setTimeout(function () {
                    let iS = stringP.length;
                    let newStringS = "";
                    const printStrS = setInterval(function () {
                        newStringS = stringP.substring(0, iS--);
                        document.getElementById("404").innerHTML = newStringS;
                        if (iS <= 0) {
                            setTimeout(function () {
                                let i = 0;
                                stringP = " Not Found";
                                newString = "";
                                const printStr = setInterval(function () {
                                    newString += stringP[i++];
                                    document.getElementById("404").innerHTML = newString;
                                    if (i >= stringP.length) {
                                        setTimeout(function () {
                                            let iS = stringP.length;
                                            let newStringS = "";
                                            const printStrS = setInterval(function () {
                                                newStringS = stringP.substring(0, iS--);
                                                document.getElementById("404").innerHTML = newStringS;
                                                if (iS <= 0) {
                                                    clearInterval(printStrS);
                                                    setTimeout(function (){
                                                        return repeter();
                                                    },500)
                                                }
                                            }, 140);
                                        }, 3000)
                                        clearInterval(printStr);
                                    }
                                }, 120);
                            }, 500)
                            clearInterval(printStrS);
                        }
                    }, 140);

                }, 3000)
            }
        }, 120);
    }

    repeter()
    return (
        <div className="d-container">
            <Helmet>
                <title>404 - Meow</title>
            </Helmet>
            <span className="nf-text-container">
                <span className="nf-anim-container">
                    <span className="nf-anim">Page </span>
                    <span id="404"></span>
                </span>
                <h3 id="blinkId" className="blink" style={{fontSize: "38px", alignSelf: "center", margin: "0"}}>|</h3>
            </span>
            <span className="nf-return">return to <a className="default-link" href="/">cd ..</a></span>
        </div>
    )
}

export default NotFound;