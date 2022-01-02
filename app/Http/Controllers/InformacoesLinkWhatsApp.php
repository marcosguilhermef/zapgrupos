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
        $conf['title'] = htmlentities("Grupo de whatsapp: ".$conf['grupo'][0]['titulo']);
        $img = @$conf["grupo"][0]["img"][0] !== null ? @$conf["grupo"][0]["img"][0] : url()->to("/").'/img/generico/reactangle.png' ;
        $descricao = htmlentities($conf["grupo"][0]["descricao"]);
        $titulo = htmlentities($conf['title']);
        $conf['meta'] = "
    <link rel=\"canonical\" href=\"".url()->current()."\"/>
    <meta name=\"description\" content=\"Grupo de whatsapp: ".$descricao."\" />\n
    <meta property=\"og:url\" content=\"".url()->current()."\" />\n
    <meta property=\"og:type\" content=\"article\" />\n
    <meta property=\"og:title\" content=\"".$titulo."\" />\n
    <meta property=\"og:description\" content=\"".$descricao."\" />\n
    <meta property=\"og:image\" content=\"".$img."\" />\n
    <meta property=\"og:site_name\" content=\"Zapgrupos\" />\n
    <meta itemprop=\"name\" content=\"".$titulo."\">\n
    <meta itemprop=\"description\" content=\"Grupo de whatsapp: ".$descricao."\">\n
    <meta itemprop=\"image\" content=\"".$img."\">\n<!– para o Twitter Card–>
    <meta name=\"twitter:card\" content=\"summary_large_image\">\n
    <meta name=\"twitter:title\" content=\"".$titulo."\">\n
    <meta name=\"twitter:description\" content=\"Grupo de whatsapp: ".$descricao."\">\n
    <meta name=\"twitter:image\" content=\"".$img."\">\n
        ";

        return Inertia::render('Externo/Informacoes',$conf);
    }

    public function parametrizar($categoria,$id){
        $parameters = [
                'categoria' => preg_replace("/-/", " ", $categoria),
                '_id'=> $id
            ];
        return $parameters;
    }
}
