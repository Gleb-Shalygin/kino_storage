<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Contracts\View\Factory;

class HomeController extends Controller
{
    public function index(): View|Application|Factory
    {
        return view('home.index');
    }
}
