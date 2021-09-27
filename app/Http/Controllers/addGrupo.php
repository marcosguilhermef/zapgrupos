<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Auth\UsersInfo;
use App\Models\categorias;

class addGrupo extends Controller
{
    public function index(){
        $conf = UsersInfo::getInfor();
        $conf["titulo"] = 'Grupos mais acessados';
        $conf["categorias"] = categorias::all()->toArray();
        return Inertia::render('Externo/AddGrupo', $conf);

    }
}
