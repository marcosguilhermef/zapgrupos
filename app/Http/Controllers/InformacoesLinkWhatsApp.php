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
        $conf['title'] = $conf['grupo'][0]['titulo'];
        $conf['meta'] = "<meta name=\"description\" content=\"".$conf["grupo"][0]["descricao"]."\" />\n
    <meta itemprop=\"name\" content=\"".$conf['title']."\">\n
    <meta itemprop=\"description\" content=\"".$conf["grupo"][0]["descricao"]."\">\n
    <meta itemprop=\"image\" content=\"".$conf["grupo"][0]["img"][0]."\">\n<!– para o Twitter Card–>

    <meta name=\"twitter:card\" content=\"summary_large_image\">\n
    <meta name=\"twitter:title\" content=\"".$conf['title']."\">\n
    <meta name=\"twitter:description\" content=\"".$conf["grupo"][0]["descricao"]."\">\n
    <meta name=\"twitter:image\" content=\"".$conf["grupo"][0]["img"][0]."\">\n

    <meta property=\"og:title\" content=\"".$conf['title']."\" />\n
    <meta property=\"og:type\" content=\"article\" />\n
    <meta property=\"og:url\" content=\"https://zapgrupos.xyz/\" />\n
    <meta property=\"og:image\" content=\"".$conf["grupo"][0]["img"][0]."\" />\n
    <meta property=\"og:description\" content=\"".$conf["grupo"][0]["descricao"]."\" />\n
    <meta property=\"og:site_name\" content=\"Zapgrupos\" />\n
    <meta property=\"fb:admins\" content=\"1279398252524269\" />\n
        ";
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
