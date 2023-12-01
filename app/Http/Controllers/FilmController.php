<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Contracts\View\Factory;

class FilmController extends Controller
{
    public function list(): View|Application|Factory|\Illuminate\Contracts\Foundation\Application
    {
        return view('film_list.index');
    }
}
