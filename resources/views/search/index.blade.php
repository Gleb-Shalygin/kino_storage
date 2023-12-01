@extends('layout.main')
@section('title', 'Поиск')
@section('content')
    <search-component search-route="{{ route('search.index') }}"></search-component>
@endsection
