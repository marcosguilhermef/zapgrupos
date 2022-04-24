<?php
namespace App\Http\Controllers\Admin\Grupos\ListaDeGrupos;

use App\Application\Authority\Admin;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\gruposWhatsApp;
class ListaDeGrupos extends Admin{

    public function index(Request $request){
        $grupos = gruposWhatsApp::getRecentes(50)->toArray();
        return Inertia::render('Admin/Grupos/ListaDeGrupos',$grupos);
    }

}