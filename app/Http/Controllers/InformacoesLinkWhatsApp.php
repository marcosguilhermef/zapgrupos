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
        $data = $conf['grupo']->first()->toArray();
        $urlCorrent = url()->current();
        $conf['meta'] = "
        <link rel=\"canonical\" href=\"".$urlCorrent."\"/>
        <meta name=\"description\" content=\"Grupo de whatsapp: ".$descricao."\" />
        <meta property=\"og:url\" content=\"".$urlCorrent."\" />
        <meta property=\"og:type\" content=\"article\" />
        <meta property=\"og:title\" content=\"".$titulo."\" />
        <meta property=\"og:description\" content=\"".$descricao."\" />
        <meta property=\"og:image\" content=\"".$img."\" />
        <meta property=\"og:site_name\" content=\"Zapgrupos\" />
        <meta itemprop=\"name\" content=\"".$titulo."\">
        <meta itemprop=\"description\" content=\"Grupo de whatsapp: ".$descricao."\"/>
        <meta itemprop=\"image\" content=\"".$img."\"/>
        <meta name=\"twitter:card\" content=\"summary_large_image\"/>
        <meta name=\"twitter:title\" content=\"".$titulo."\"/>
        <meta name=\"twitter:description\" content=\"Grupo de whatsapp: ".$descricao."\"/>
        <meta name=\"twitter:image\" content=\"".$img."\"/>
        <script type=\"application/ld+json\">
        {
        \"@context\": \"https://schema.org\",
        \"@type\": \"WebSite\",
        \"headline\": \"$titulo\",
        \"datePublished\": \"".$data["created_at"]."\",
        \"dateModified\": \"".@$data["updated_at"]."\",
        \"image\": \"".$img."\",
        \"author\": \"zapgrupos.xyz\"
        }
        </script>
        ";
        return Inertia::render('v1.0/Externo/Informacoes',$conf);
    }

    public function parametrizar($categoria,$id){
        $parameters = [
                'categoria' => preg_replace("/-/", " ", $categoria),
                '_id'=> $id
            ];
        return $parameters;
    }
}
