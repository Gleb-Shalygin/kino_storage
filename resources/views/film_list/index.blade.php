@extends('layout.main')
@section('title', 'Фильмы')
@section('content')
        <movie-list-component movie-route="{{ route('film.list') }}"></movie-list-component>
{{--        <home-component></home-component>--}}
@endsection
