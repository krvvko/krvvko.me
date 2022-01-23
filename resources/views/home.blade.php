@extends("layout.main")
@section("body")

    <div class="home-main">

        <div class="main-article">

            <img class="main-article-img" src="{{$randomArticle->img}}" alt="asian">
            <div class="main-article-content-container">
                <div>

                    <h1 class="main-article-content-title">{{$randomArticle->title}}</h1>
                    <p class="main-article-content-description">
                        {{$randomArticle->content}}
                    </p>
                </div>
            </div>

        </div>


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
