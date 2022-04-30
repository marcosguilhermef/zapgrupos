<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
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
Auth::routes();

Route::get('/login',[App\Http\Controllers\Externo\Login\Login::class,'showLoginForm'])->name('login');
Route::post('/login',[App\Http\Controllers\Externo\Login\Login::class,'login']);

Route::middleware('auth:sanctum')->get('/lista-de-grupos', [App\Http\Controllers\Admin\Grupos\ListaDeGrupos\ListaDeGrupos::class,'index']);
Route::middleware('auth:sanctum')->get('/lista-de-grupos/{categoria}', [App\Http\Controllers\Admin\Grupos\ListaDeGrupos\ListaDeGrupos::class,'index']);


Route::middleware('auth:sanctum')->get('/grupo-info/{id}',[App\Http\Controllers\Admin\Grupos\Grupo\GrupoInfo::class,'index']);
Route::middleware('auth:sanctum')->post('/grupo-info',[App\Http\Controllers\Admin\Grupos\Grupo\GrupoInfo::class,'post']);
Route::middleware('auth:sanctum')->get('/reload/{id}',[App\Http\Controllers\Admin\Grupos\Grupo\Reload::class,'index']);


Route::middleware('auth:sanctum')->get('/lista-de-categorias', function(){
    dd("auth");
});
Route::middleware('auth:sanctum')->get('/lista-de-categorias/{categoria}', function(){
    dd("auth");
});

Route::middleware('auth:sanctum')->get('/lista-de-usuarios', function(){
    dd("auth");
});
Route::middleware('auth:sanctum')->get('/lista-de-usuarios/{id}', function(){
    dd("auth");
});




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
