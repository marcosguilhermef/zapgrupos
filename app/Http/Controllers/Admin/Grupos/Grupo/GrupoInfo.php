<?php
namespace App\Http\Controllers\Admin\Grupos\Grupo;

use App\Application\Authority\Admin;
use App\Models\categorias;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\gruposWhatsApp;
use App\Http\Controllers\Auth\UsersInfo;

class GrupoInfo extends Admin{

    public function index($id,Request $request){
        $grupo = gruposWhatsApp::getGrupoById($id)->first()->toArray()+UsersInfo::getInfor();
        $grupo['categorias'] = categorias::all()->toArray();
        $grupo["_token"]     = csrf_token();
        return Inertia::render('v1.0/Admin/Grupos/GrupoInfo',$grupo);
    }

    public function post(Request $request){
        gruposWhatsApp::find($request->input('_id'))->Update([
            'sensivel'  => filter_var($request->input('sensivel'),FILTER_VALIDATE_BOOLEAN),
            'categoria' => $request->input('categoria'),
            'ativo'     => filter_var($request->input('ativo'), FILTER_VALIDATE_BOOLEAN)
            
        ]);
        return true;
    }

}