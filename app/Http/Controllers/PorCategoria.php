<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Auth\UsersInfo;
use App\Models\gruposWhatsApp;

class PorCategoria extends Controller
{
    public function index($categoria){
        $parametro = $this->parametrizar($categoria);
        $conf = UsersInfo::getInfor();
        $conf["titulo"]    =  $parametro['categoria'];
        $conf["api"]       = 'api/grupos/'.$parametro['categoria'];
        return Inertia::render('Externo/Inicio', $conf);
    }

    public function parametrizar($categoria,$id = null){
        $parameters = [
                'categoria' => preg_replace("/-/", " ", $categoria), 
                '_id'=> $id
            ];
        return $parameters;
    }
}
