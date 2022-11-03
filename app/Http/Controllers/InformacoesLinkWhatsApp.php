<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Auth\UsersInfo;
use App\Models\gruposWhatsApp;
use App\Http\Controllers\Commons\MetaProcesser;

class InformacoesLinkWhatsApp extends Controller
{

    public function index($categoria,$id){
        $version = "v2.0";
        $parametro = $this->parametrizar($categoria,$id);
        $conf = UsersInfo::getInfor();
        $conf['grupo'] = gruposWhatsApp::getGrupoById($parametro['_id']);
        $conf['maisgrupos'] = gruposWhatsApp::getGrupoByCategory($parametro['categoria']);
        $conf['title'] = html_entity_decode("Grupo de whatsapp: ".$conf['grupo'][0]['titulo']);
        $img = @$conf["grupo"][0]["img"][0] !== null ? @$conf["grupo"][0]["img"][0] : url()->to("/").'/img/generico/reactangle.png' ;
        $descricao = html_entity_decode($conf["grupo"][0]["descricao"]);
        $titulo = html_entity_decode($conf['title']);
        $data = $conf['grupo']->first()->toArray();
        $urlCorrent = url()->current();
        
        $metaConstructor = new MetaProcesser(
            [
                "url" => $urlCorrent,
                "type" => "website",
                "title" => $titulo,
                "description" => $descricao,
                "image" => $img,
                "site_name" => "Zapgrupos",
                "canonical" => $urlCorrent
            ]
        );

        $conf["meta"] = $metaConstructor->getAllAtributes();

        return Inertia::render("v2.0/Externo/Grupo",$conf);
    }

    public function parametrizar($categoria,$id){
        $parameters = [
                'categoria' => preg_replace("/-/", " ", $categoria),
                '_id'=> $id
            ];
        return $parameters;
    }
}
