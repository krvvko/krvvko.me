import './index.css';
import React from "react";
import {Helmet} from "react-helmet";


const Home = () => {

    document.getElementById("root").style.height = "100%";
    document.getElementById("root").style.overflowY = "auto";

    return(
        <div className="d-container">
            <Helmet>
                <title>{`Home - krvvko`}</title>
            </Helmet>
            <h1>Kostya - Krevvekta</h1>
            <span className="date">Oct 20, 2022</span>
            <p>Welcome to <a href="/" className="default-link">krvvko.me</a>, the website of a young developer who is on his way to gaining new knowledge and experience</p>
            <div className="home-pics">
                <img className="home-img" src="src/img/photo_2022-08-13_15-16-31.jpg" alt="cute cat"/>
                <img className="home-img" src="src/img/photo_2022-06-08_19-25-39.jpg" alt="cute cat 2"/>
                <img className="home-img" src="src/img/photo_2022-08-20_20-31-38.jpg" alt="cute cat 3"/>
            </div>
            <p>Btw I'm a really big fan of cats</p>

            <h2>Bio</h2>
            <p>
                My name is Kostya, I'm a web developer. I live in the <a className="default-link" href="https://en.wikipedia.org/wiki/Massachusetts">MA, USA</a>, but I was born in the Eastern
                European country <a href="https://en.wikipedia.org/wiki/Belarus" className="default-link">Belarus</a>. At the age of 15, I began to engage in programming and design,
                tried to write my first websites, create first scripts, edit first videos and pictures. Since then, I have improved in the field of design and development, gaining
                experience, new knowledge and skills. My strengths are Front End Development on
                frameworks like <a href="https://laravel.com/" className="default-link">Laravel</a> and <a href="https://reactjs.org/" className="default-link">React</a>. Excellent knowledge of HTML and CSS. And the ability to work
                in most popular Adobe programs.
            </p>
        </div>
    )
}

export default Home;