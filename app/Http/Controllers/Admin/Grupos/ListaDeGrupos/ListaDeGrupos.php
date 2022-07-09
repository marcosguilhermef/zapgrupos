<?php
namespace App\Http\Controllers\Admin\Grupos\ListaDeGrupos;

use App\Application\Authority\Admin;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\gruposWhatsApp;
class ListaDeGrupos extends Admin{

    public function index(Request $request, $categoria=null){
        if(!$categoria){
            $grupos = gruposWhatsApp::getRecentes(50)->toArray();
            $grupos = $grupos + $this->authInfo();
            return Inertia::render('Admin/Grupos/ListaDeGrupos',$grupos);
        }else{
            $grupos = gruposWhatsApp::getRecentes(50,$categoria)->toArray();
            $grupos = $grupos + $this->authInfo();
            return Inertia::render('Admin/Grupos/ListaDeGrupos',$grupos);
        }
    }

}