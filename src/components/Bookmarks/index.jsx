import './index.css';
import Title from "../Title";
import Cd from "../Cd";

const Bookmarks = () => {

    return (
        <div className="d-container">
            <Title />
            <h1>Bookmarks</h1>

            <span className="date">Oct 15, 2022</span>
            <p>
                On this page you can find useful resources that I often
                use during development, their use can greatly facilitate the process of creating a page.
            </p>

            <h3>Page is not completely done yet</h3>

        </div>
    )


}

export default Bookmarks;