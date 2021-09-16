<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Auth\UsersInfo;
use App\Models\gruposWhatsApp;
class InformacoesLinkWhatsApp extends Controller
{

    public function index($categoria,$id){
        $parametro = $this->parametrizar($categoria,$id);
        $conf = UsersInfo::getInfor();
        $conf['grupo'] = gruposWhatsApp::getGrupoById($parametro['_id']);
        $conf['maisgrupos'] = gruposWhatsApp::getGrupoByCategory($parametro['categoria']);
        return Inertia::render('Externo/Informacoes', $conf);
    }

    public function parametrizar($categoria,$id){
        $parameters = [
                'categoria' => preg_replace("/-/", " ", $categoria), 
                '_id'=> $id
            ];
        return $parameters;
    }
}
