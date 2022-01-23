<?php

namespace App\Http\Controllers;

use App\Models\Article;

class ArticleController
{

    function show($id) {

        return view('article', [
            'article' => Article::findOrFail($id)
        ]);
    }

}
