import {Helmet} from "react-helmet";
import './index.css';

const NotFound = () => {

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

    return (
        <div className="d-container">
            <Helmet>
                <title>404 - meow</title>
            </Helmet>
            <span className="nf-text-container">
                <h1 style={{margin: "0"}}>Page<span id="404"></span></h1>
                <h3 id="blinkId" className="blink" style={{fontSize: "38px", alignSelf: "center", margin: "0"}}>|</h3>
            </span>
        </div>
    )
}

export default NotFound;