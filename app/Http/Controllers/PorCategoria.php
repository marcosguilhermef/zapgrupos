<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Auth\UsersInfo;
use App\Models\categorias;

class PorCategoria extends Controller
{
    public function index($categoria){
        $parametro = $this->parametrizar($categoria);
        $conf = UsersInfo::getInfor();
        $conf["titulo"] = 'Grupos de whatsapp';
        $conf["titulo_2"]    =  $parametro['categoria'];
        $conf["title"]     =  "Grupos Whatsapp ".$parametro['categoria'];
        $conf["api"]       = 'api/grupos/'.$parametro['categoria'];
        $dados = categorias::getCategoryInformation($parametro['categoria']);
        $img = isset($dados[0]["img"][0]) ? $dados[0]["img"][0] : url()->to('/') .'/img/generico/reactangle.png';
        $urlCorrent = url()->current();
        $conf['meta'] = "
        <link rel=\"canonical\" href=\"".$urlCorrent."\"/>
        <meta name=\"description\" content=\"".@$dados[0]["descricao"]."\" />\n
        <meta property=\"og:url\" content=\"".$urlCorrent."\" />\n
        <meta property=\"og:type\" content=\"website\" />\n
        <meta property=\"og:title\" content=\"".$conf['title']."\" />\n
        <meta property=\"og:description\" content=\"".@$dados[0]["descricao"]."\" />\n
        <meta property=\"og:image:width\" content=\"800\" />\n
        <meta property=\"og:image:height \" content=\"800\" />\n
        <meta property=\"og:image\" content=\"".$img."\" />\n
        <meta property=\"og:site_name\" content=\"Zapgrupos\" />\n
        <meta itemprop=\"name\" content=\"".$conf['title']."\">\n
        <meta itemprop=\"description\" content=\"".@$dados[0]["descricao"]."\">\n
        <meta itemprop=\"image\" content=\"".$img."\">\n<!– para o Twitter Card–>
        <meta name=\"twitter:card\" content=\"summary_large_image\">\n
        <meta name=\"twitter:title\" content=\"".$conf['title']."\">\n
        <meta name=\"twitter:description\" content=\"".@$dados[0]["descricao"]."\">\n
        <meta name=\"twitter:image\" content=\"".$img."\">\n
            ";

        $conf["meta"] .= '
            <script type="application/ld+json">
                {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "@id": "'.@$urlCorrent.'",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "zapgrupos.xyz",
                            "item": "https://zapgrupos.xyz"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "'.@$categoria.'",
                            "item": "'.@$urlCorrent.'"
                        }
                    ]
                }
            </script>
        ';

        return Inertia::render('v2.0/Externo/Inicio', $conf);
    }

    public function parametrizar($categoria,$id = null){
        $parameters = [
                'categoria' => preg_replace("/-/", " ", $categoria),
                '_id'=> $id
            ];
        return $parameters;
    }
}
