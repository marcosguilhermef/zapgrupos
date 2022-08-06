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
//Auth::routes();

Route::get('/login',[App\Http\Controllers\Externo\Login\Login::class,'showLoginForm'])->name('login');
Route::post('/login',[App\Http\Controllers\Externo\Login\Login::class,'login']);

Route::get('/register',[App\Http\Controllers\Externo\Register\Register::class,'showRegistrationForm'])->name('register');
Route::post('/register',[App\Http\Controllers\Externo\Register\Register::class,'register']);


Route::middleware('auth:sanctum')->get('/meus-grupos',[App\Http\Controllers\User\MeusGrupos\MeusGrupos::class,'index']);
Route::middleware('auth:sanctum')->get('/adicionar-grupo',[App\Http\Controllers\User\AdicionarGrupo\AdicionarGrupo::class,'index']);
Route::middleware('auth:sanctum')->post('/adicionar-grupo',[App\Http\Controllers\User\AdicionarGrupo\AdicionarGrupo::class,'addGrupo']);
Route::middleware('auth:sanctum')->get('/editar/{_id}',[App\Http\Controllers\User\Editar\Editar::class,'index']);
Route::middleware('auth:sanctum')->post('/editar',[App\Http\Controllers\User\Editar\Editar::class,'store']);


Route::get('/logout',[App\Http\Controllers\Auth\LoginController::class,'logout']);


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


Route::middleware('auth:sanctum')->get('/lista-de-usuarios',[App\Http\Controllers\Admin\Usuarios\ListaUsuarios::class,'index']);
Route::middleware('auth:sanctum')->get('/usuario/{id}',[App\Http\Controllers\Admin\Usuarios\Usuario::class,'index']);

Route::middleware('auth:sanctum')->get('/categorias',[App\Http\Controllers\Admin\Categorias\Categorias::class,'index']);
Route::middleware('auth:sanctum')->get('/categoria/{id}',[App\Http\Controllers\Admin\Categorias\InfoCategoria::class,'index']);
Route::middleware('auth:sanctum')->get('/adicionar-categoria',[App\Http\Controllers\Admin\Categorias\AdicionarCategoria::class,'index']);
Route::middleware('auth:sanctum')->post('/adicionar-categoria',[App\Http\Controllers\Admin\Categorias\AdicionarCategoria::class,'store']);

Route::middleware('auth:sanctum')->get('/atualizar-categoria/{id}',[App\Http\Controllers\Admin\Categorias\AtualizarCategoria::class,'index']);
Route::middleware('auth:sanctum')->post('/atualizar-categoria',[App\Http\Controllers\Admin\Categorias\AtualizarCategoria::class,'store']);


Route::middleware('auth:sanctum')->get('/denuncias',[App\Http\Controllers\Admin\Denuncias\Denuncias::class,'index']);
//Route::middleware('auth:sanctum')->get('/denuncias/{id}',[App\Http\Controllers\Admin\Usuarios\Usuario::class,'index']);


Route::middleware('auth:sanctum')->get('/generate',function(Request $request){
    $token = $request->user()->createToken('token');
    return ['token' => $token->plainTextToken];
});


//Route::get('/logout',[App\Application\Authority\User::class,'logout']);


Route::middleware('auth:sanctum')->get('/dashboard',
    [App\Http\Controllers\User\Dashboard\Dashboard::class,'index']
);



Route::get('/grupo/{id}', [App\Http\Controllers\linkProtector::class,'index']);
//Route::get('/sitemap.xml',[App\Http\Controllers\sitemap::class,'index']);
Route::get('/', [App\Http\Controllers\InicioController::class,'index'])->name('home');
Route::get('/mais', [App\Http\Controllers\maisCategorias::class, 'index']);
Route::get('/sobre',[App\Http\Controllers\sobre::class, 'index']);
//Route::get('/adicionar',[App\Http\Controllers\addGrupo::class,'index']);
Route::get('/gerar-link-whatsapp',[App\Http\Controllers\gerarLink::class,'index']);
Route::get('/{categoria}/{id}', [App\Http\Controllers\InformacoesLinkWhatsApp::class,'index']);
Route::get('/{categoria}', [App\Http\Controllers\PorCategoria::class,'index']);

////
//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
