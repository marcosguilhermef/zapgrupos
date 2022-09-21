<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
//Auth::routes();

Route::get('/teste', function(){
    return Inertia::render("v2.0/Test");
});

Route::get('/login',[App\Http\Controllers\Externo\Login\Login::class,'showLoginForm'])->name('login');
Route::post('/login',[App\Http\Controllers\Externo\Login\Login::class,'login']);

Route::get('/register',[App\Http\Controllers\Externo\Register\Register::class,'showRegistrationForm'])->name('register');
Route::post('/register',[App\Http\Controllers\Externo\Register\Register::class,'register']);


Route::middleware('auth:sactum')->group(function(){
    Route::get('/meus-grupos',[App\Http\Controllers\User\MeusGrupos\MeusGrupos::class,'index']);
    Route::get('/adicionar-grupo',[App\Http\Controllers\User\AdicionarGrupo\AdicionarGrupo::class,'index']);
    Route::post('/adicionar-grupo',[App\Http\Controllers\User\AdicionarGrupo\AdicionarGrupo::class,'addGrupo']);
    Route::get('/editar/{_id}',[App\Http\Controllers\User\Editar\Editar::class,'index']);
    Route::post('/editar',[App\Http\Controllers\User\Editar\Editar::class,'store']);
    Route::get('/logout',[App\Http\Controllers\Auth\LoginController::class,'logout']);
    Route::get('/lista-de-grupos', [App\Http\Controllers\Admin\Grupos\ListaDeGrupos\ListaDeGrupos::class,'index']);
    Route::get('/lista-de-grupos/{categoria}', [App\Http\Controllers\Admin\Grupos\ListaDeGrupos\ListaDeGrupos::class,'index']);
    Route::get('/grupo-info/{id}',[App\Http\Controllers\Admin\Grupos\Grupo\GrupoInfo::class,'index']);
    Route::post('/grupo-info',[App\Http\Controllers\Admin\Grupos\Grupo\GrupoInfo::class,'post']);
    Route::get('/reload/{id}',[App\Http\Controllers\Admin\Grupos\Grupo\Reload::class,'index']);
    Route::get('/lista-de-usuarios',[App\Http\Controllers\Admin\Usuarios\ListaUsuarios::class,'index']);
    Route::get('/usuario/{id}',[App\Http\Controllers\Admin\Usuarios\Usuario::class,'index']);
    Route::get('/categorias',[App\Http\Controllers\Admin\Categorias\Categorias::class,'index']);
    Route::get('/categoria/{id}',[App\Http\Controllers\Admin\Categorias\InfoCategoria::class,'index']);
    Route::get('/adicionar-categoria',[App\Http\Controllers\Admin\Categorias\AdicionarCategoria::class,'index']);
    Route::post('/adicionar-categoria',[App\Http\Controllers\Admin\Categorias\AdicionarCategoria::class,'store']);
    Route::get('/atualizar-categoria/{id}',[App\Http\Controllers\Admin\Categorias\AtualizarCategoria::class,'index']);
    Route::post('/atualizar-categoria',[App\Http\Controllers\Admin\Categorias\AtualizarCategoria::class,'store']);
    Route::get('/denuncias',[App\Http\Controllers\Admin\Denuncias\Denuncias::class,'index']);
    Route::get('/generate',function(Request $request){
        $token = $request->user()->createToken('token');
        return ['token' => $token->plainTextToken];
    });
    Route::get('/dashboard',
        [App\Http\Controllers\User\Dashboard\Dashboard::class,'index']
    );
});

Route::get('/', [App\Http\Controllers\InicioController::class,'index'])->name('home');

Route::get('/{categoria}/{id}', [App\Http\Controllers\InformacoesLinkWhatsApp::class,'index']);
Route::get('/grupo/redirect/{id}', [App\Http\Controllers\linkProtector::class,'index']);

Route::get('/mais', [App\Http\Controllers\maisCategorias::class, 'index']);
Route::get('/sobre',[App\Http\Controllers\sobre::class, 'index']);
Route::get('/gerar-link-whatsapp',[App\Http\Controllers\gerarLink::class,'index']);


Route::get('/{categoria}', [App\Http\Controllers\PorCategoria::class,'index']);

