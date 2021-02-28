<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="/styles/styles.css"> <!-- Main stylesheet -->
    <link rel="stylesheet" type="text/css" href="/styles/id.css"> <!-- Stylesheet with ids -->
    <script src="/scripts/HeaderMenuScript.js"></script>

    <link rel="preconnect" href="https://fonts.gstatic.com"> <!-- Font for headlines -->
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet">
    <!-- Font for headlines -->

    <link rel="preconnect" href="https://fonts.gstatic.com"> <!-- Font for text -->
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    <!-- Font for text -->

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">


    <link rel="icon" href="/favicon.png" type="image/png">

    <title>

        <?php

        switch ($_SERVER ["REQUEST_URI"]) {

            case "/AboutMe":
                echo "About Me";
                break;

            case "/MyProjects":
                echo "My Projects";
                break;

            case "/":
                echo "Home";
                break;

            default:
                echo "404 not found";
                break;

        }


        ?> - krvvko

    </title> <!-- Title changing script -->


</head>

<body>

<header class="header">

    <a style="margin-left: 300px;" href="/" class="headerLogo">KRV<span style="color: red">VKO</span></a>

    <a id="HeaderMenuButton" class="headerElements dot">⋮</a>
    <a href="/AboutMe" class="headerElements">ABOUT ME</a>
    <a href="/" class="headerElements">HOME</a>

    <div id="HeaderMenuBlock" class="HeaderMenu">

        <a href="https://github.com/krvvko"><img src="/icons/free-icon-github-sign-25657.svg"></a>
        <a href="https://www.youtube.com/channel/UCse1yKfPXvG6phJXWys-8kw"><img src="/icons/free-icon-youtube-174883.svg"></a>
        <a href="https://steamcommunity.com/id/RealKrvvkoNoJokes/"><img src="/icons/steam-logo.svg"></a>
        <a href=""><img src="/icons/telegram.svg"></a>


    </div>
</header>

<main>
    <?php

    switch ($_SERVER ["PATH_INFO"]) {

        case "/AboutMe":
            require("../pages/content/AboutMe.php");
            break;

        case "/MyProjects":
            require("../pages/content/MyProjects.php");
            break;

        case "":
        case "/":
            require("../pages/content/Home.php");
            break;

        case "/articles":
            echo $_GET ["id"];
            break;

        default:
            require("../pages/content/404.php");
            break;

    }

    ?>
</main>

<footer class="footer">

    © copyright all rights reserved

</footer>

</body>

</html>