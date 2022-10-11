const Header = () => {

    let href = window.location.href;

    return(
        <header>
            <h1>ur current url = {href}</h1> <br/>
            <a href="/">Home</a> <br/>
            <a href="/Blbl">blbl</a>
        </header>
    )
}

export default Header;