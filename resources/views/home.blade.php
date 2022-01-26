@php

    $dt = \Carbon\Carbon::createFromFormat('Y-m-d', '2004-09-26');

@endphp


@extends("layout.main")
@section("body")

    <div class="home-main">

        @if($randomArticle)

        <div class="main-article">

            <img class="main-article-img" src="{{$randomArticle->img}}" alt="asian">

            <a id="HeaderMenuButton" class="show-article-button">Show Article</a>

            <div id="main-article-content-container">
                <div>
                    <h1 class="main-article-content-title">{{$randomArticle->title}}</h1>
                    <p class="main-article-content-description">
                        {{$randomArticle->content}}
                    </p>
                </div>
                <a id="HeaderMenuButton2" class="show-article-button">Hide Article</a>
            </div>

        </div>
        @endif

        <h1 style="text-align: center; margin: 40px">{{trans("home.Articles")}}</h1>

        <div class="container-articles">


            @foreach($articles as $article)

                <div class="article-with-button">
                    <div class="element-article">

                        <img class="element-article-img" src="{{ $article->img }}" alt="github">
                        <p class="element-article-date">{{ $article->date->diffForHumans() }}</p>
                        <h3 class="element-article-title">{{ $article->title }}</h3>
                        <p class="element-article-description">{{ $article->description }}</p>

                    </div>
                    <a class="element-article-read" href="{{ route("article", ['id' => $article->id])}}">{{trans("home.read")}}</a>
                </div>

            @endforeach

        </div>

    </div>


@endsection

@section("title", "Home")
