@extends("layout.main")
@section("body")

    <h1>{{$article->title}}</h1>

@endsection

@section("title", $article->title)
