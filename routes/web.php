<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
Route::get('/grupo/{id}', [App\Http\Controllers\linkProtector::class,'index']);
//Route::get('/sitemap.xml',[App\Http\Controllers\sitemap::class,'index']);
Route::get('/', [App\Http\Controllers\InicioController::class,'index']);
Route::get('/mais', [App\Http\Controllers\maisCategorias::class, 'index']);
Route::get('/sobre',[App\Http\Controllers\sobre::class, 'index']);
Route::get('/adicionar',[App\Http\Controllers\addGrupo::class,'index']);
Route::get('/gerar-link-whatsapp',[App\Http\Controllers\gerarLink::class,'index']);
Route::get('/{categoria}/{id}', [App\Http\Controllers\InformacoesLinkWhatsApp::class,'index']);
Route::get('/{categoria}', [App\Http\Controllers\PorCategoria::class,'index']);
//Auth::routes();

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
