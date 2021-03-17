<?php
$connection = new PDO('sqlite:' . __DIR__ . '/../db.sqlite');
$route = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <link rel="stylesheet" type="text/css" href="/styles/styles.css"> <!-- Main stylesheet -->
    <link rel="stylesheet" type="text/css" href="/styles/id.css"> <!-- Stylesheet with ids -->

    <script src="/scripts/HeaderMenuScript.js"></script>

    <link rel="preconnect" href="https://fonts.gstatic.com"> <!-- Font for headlines -->
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet"> <!-- Font for headlines -->

    <link rel="preconnect" href="https://fonts.gstatic.com"> <!-- Font for text -->
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"> <!-- Font for text -->

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">

    <link rel="icon" href="/favicon.png" type="image/png">

    <title>

        <?php

        switch ($route) {

            case "/AboutMe":
                echo "About Me";
                break;

            case "/":
                echo "Home";
                break;

            case "/articles":
                $query = $connection->prepare('select title from articles where id = :id limit 1');
                $query->execute([':id' => $_GET['id']]);
                $article = $query->fetchObject();

                echo $article->title;

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

    <a id="HeaderMenuButton" class="headerElements dot ">⋮</a>
    <a href="/AboutMe" class="headerElements <?= $_SERVER['REQUEST_URI'] === '/AboutMe' ? 'active' : '' ?>">ABOUT ME</a>
    <a href="/" class="headerElements <?= $_SERVER['REQUEST_URI'] === '/' ? 'active' : '' ?>">HOME</a>

    <div id="HeaderMenuBlock" class="HeaderMenu">

        <a target="_blank" href="https://github.com/krvvko"><img src="/icons/free-icon-github-sign-25657.svg"></a>
        <a target="_blank" href="https://www.youtube.com/channel/UCse1yKfPXvG6phJXWys-8kw"><img src="/icons/free-icon-youtube-174883.svg"></a>
        <a target="_blank" href="https://steamcommunity.com/id/RealKrvvkoNoJokes/"><img src="/icons/steam-logo.svg"></a>
        <a target="_blank" href=""><img src="/icons/telegram.svg"></a>


    </div>
</header>

<main>
    <?php

    switch ($route) {

        case "/AboutMe":
            require(__DIR__ . "/../pages/content/AboutMe.php");
            break;

        case "/":
            require(__DIR__ . "/../pages/content/Home.php");
            break;

        case "/articles":
            require(__DIR__ . "/../pages/content/Article.php");
            break;

        case "/test":
            require(__DIR__. "/../pages/content/test.php");
            break;

        default:
            require(__DIR__ . "/../pages/content/404.php");
            break;

    }

    ?>



</main>

<footer class="footer">

    © <?= date('Y') ?> copyright all rights reserved

</footer>

</body>

</html>