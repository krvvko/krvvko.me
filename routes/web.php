<?php

use Illuminate\Support\Facades\Route;


Route::get('/', [\App\Http\Controllers\HomeController::class, 'index'])->name("home");

Route::get('me', function () {
    return view('about-me');
})->name("me");

Route::get('projects', function () {
    return view('my-projects');
})->name("projects");

Route::get('article/{id}', [\App\Http\Controllers\ArticleController::class, 'show'])->name("article");
