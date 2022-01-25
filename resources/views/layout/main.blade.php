<!doctype html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield("title") - krvvko</title>

    <link rel="icon" href="{{asset("src/img/icon_white.png")}}" type="image/icon type">

    <link rel="stylesheet" href="{{asset("styles/normalizer.css")}}">
    <link rel="stylesheet" href="{{asset("styles/main.css")}}">

</head>
<body>


<main>
    <header class="header">

        <a class="header-element-left" href="{{route("home")}}">

            <span class="circle">

                <span class="header-icon-title">krvvko</span>

            </span>
            <img class="header-icon" src="{{asset("src/img/icon.png")}}" alt="icon">

        </a>

        <nav class="header-container-right">

            <a class="header-element-right hover-underline-animation" href="{{route("home")}}">{{trans("home.home")}}</a>
            <span>&middot;</span>
            <a class="header-element-right hover-underline-animation" href="{{route("me")}}">{{trans("home.about me")}}</a>
            <span>&middot;</span>
            <a class="header-element-right hover-underline-animation" href="{{route("projects")}}">{{trans("home.my projects")}}</a>

        </nav>

    </header>

    @yield("body")

</main>


    <div class="footer-middle-container">

        <div class="footer-middle-container-absolute">

            <img class="footer-icon" src="{{asset("src/img/icon.png")}}" alt="icon">
            <a href="{{route("home")}}" class="footer-middle-container-text">krvvko</a>

        </div>


    </div>




<footer class="footer">
    <span style="margin-left: 20px;">
        ©{{date("Y")}} copyright <a class="footer-arr hover-underline-animation-footer" href="https://en.wikipedia.org/wiki/All_rights_reserved" target="_blank"> all rights reserved</a>
    </span>




    <div class="footer-right-container">

        <div class="footer-right-element">{{trans("home.contact me")}}</div>
        <a target="_blank" class="footer-right-element hover-underline-animation-footer" href="https://vk.com/krvvko">vk</a>
        <span>&middot;</span>
        <a target="_blank" class="footer-right-element hover-underline-animation-footer" href="https://t.me/krvvko">telegram</a>
        <span>&middot;</span>
        <a target="_blank" class="footer-right-element hover-underline-animation-footer" href="https://www.instagram.com/krvvko/">instagram</a>
        <span>&middot;</span>
        <a target="_blank" class="footer-right-element hover-underline-animation-footer" href="https://github.com/krvvko">github</a>
        <span>&middot;</span>
        <a target="_blank" class="footer-right-element hover-underline-animation-footer" href="https://www.donationalerts.com/r/krvvko">donation alerts</a>

    </div>

</footer>

</body>
</html>
