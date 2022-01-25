@extends("layout.main")
@section("body")

    <div class="article-container">

        <span class="article-title"><h1>{{$article->title}}</h1></span>

        <p class="article-paragraph">asdadas</p>

    </div>



@endsection

@section("title", $article->title)
