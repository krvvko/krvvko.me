import './index.css';
import React from "react";
import {Helmet} from "react-helmet";


const Home = () => {

    return(
        <div className="d-container">
            <Helmet>
                <title>{`Home - krvvko`}</title>
            </Helmet>
                <h1>Hello</h1>
        </div>
    )
}

export default Home;