<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\FilmController;
use App\Http\Controllers\SearchController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('/watch-dogs', function() {
    return view('watch_dogs2');
});

Route::controller(HomeController::class)->group(function () {
    Route::get('/', 'index')->name('home.index');
});

Route::controller(FilmController::class)->prefix('film')->group(function () {
    Route::get('/list', 'list')->name('film.list');
});

Route::controller(\App\Http\Controllers\SearchController::class)->prefix('search')->group(function () {
    Route::get('/', 'index')->name('search.index');
});
