import './index.css';

const Footer = () => {
    let todayDate = new Date(Date.now());

    return (
        <footer>
            <div className="div-separator"></div>
            <div>©{todayDate.getFullYear()}, All rights reserved | krvvko</div>
        </footer>
    )
}

export default Footer;