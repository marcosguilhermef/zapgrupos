<?php

namespace App\Http\Controllers\User\Editar;

use App\Application\Authority\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\gruposWhatsApp;
use App\Models\categorias;
class Editar extends User{

    public function index(Request $request, $_id){
        $data = $this->authInfo() + [ '_token' => csrf_token()]+gruposWhatsApp::find($_id)->toArray()+[ "categorias" => categorias::all()->toArray()];

        return Inertia::render('User/Editar',$data);
    }

}