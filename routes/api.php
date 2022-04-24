<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

 Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
     return dd($request->user());
 });


Route::get('/maisAcessados', [App\Http\Controllers\gruposMaisAcessados::class, 'index']);
Route::get('/grupos/{categoria}', [App\Http\Controllers\ApiGruposPorCategoria::class, 'show']);
Route::get('/recentes', [App\Http\Controllers\gruposRecentes::class, 'index']);
Route::post('/add-banca', [App\Http\Controllers\addGrupo::class,'addGrupo']);
Route::post('/add-grupo', [App\Http\Controllers\addGrupo::class,'addGrupoByApi']);
Route::get('/mais', [App\Http\Controllers\maisCategorias::class, 'show']);
