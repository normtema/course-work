<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'MainController@_index');
Route::get('/gallery','MainController@_gallery');
Route::get('/project','MainController@_project');
Route::get('/about','MainController@_index');
Route::get('/gallery/{code}','MainController@_about');
Route::get('/error','MainController@__error');
Route::get('/result','MainController@__result');
Route::get('/success','MainController@__success');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
