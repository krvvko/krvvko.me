import './index.css';


const Header = () => {
    let href = window.location.href;

    return(
        <header>
            <a href="/">Home</a> <br/>
            <a href="/projects">Projects</a> <br/>
        </header>
    )
}

export default Header;