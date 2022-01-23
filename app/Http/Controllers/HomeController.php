<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\RandomArticle;

class HomeController
{


    function index() {

        $articles = Article::all();
        $randomArticle = RandomArticle::inRandomOrder()->first();

        return view("home", ["articles" => $articles, "randomArticle" => $randomArticle]);

    }


}
