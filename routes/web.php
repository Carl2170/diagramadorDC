<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\SalaController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
    */

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/perfil', [HomeController::class, 'perfil'])->name('perfil');
Route::get('/edit-perfil', [HomeController::class, 'editPerfil'])->name('editPerfil');
Route::post('/update-perfil', [HomeController::class, 'updatePerfil'])->name('updatePerfil');

Route::get('/salas', [SalaController::class, 'index'])->name('salas');
Route::post('/store',[SalaController::class, 'store'])->name('sala.store');