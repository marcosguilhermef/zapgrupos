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
        $conf['title'] = htmlentities("Grupo de whatsapp: ".$conf['grupo'][0]['titulo']);
        $img = @$conf["grupo"][0]["img"][0] !== null ? @$conf["grupo"][0]["img"][0] : url()->to("/").'/img/generico/reactangle.png' ;
        $descricao = htmlentities($conf["grupo"][0]["descricao"]);
        $titulo = htmlentities($conf['title']);
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


        $conf["meta"] .= '
            <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                "headline": "'.@$titulo.'",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "'.@$urlCorrent.'"
                },
                "datePublished": "'.@$conf['grupo'][0]['created_at'].'",
                "dateModified": "'.@$conf['grupo'][0]['updated_ad'].'",
                "image": [
                    "'.@$img.'"
                ],
                "author": [{
                    "@type": "Organization",
                    "name": "zapgrupos.xyz",
                    "url": "https://zapgrupos.xyz"
                }],
                "publisher": {
                    "@type": "Organization",
                    "name": "Zapgrupos",
                    "url": "https://zapgrupos.xyz",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://zapgrupos.xyz/img/logo/logo.png",
                        "width": 200,
                        "height": 200
                    }
                }
            }          
            </script>
        ';

        $conf["meta"] .= '
            <script type="application/ld+json">
            [
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
                            "name": "'.@$titulo.'",
                            "item": "'.@$urlCorrent.'"
                        }
                    ]
                },
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
                            "name": "Grupos de WhatsApp de Amizade",
                            "item": "https://zapgrupos.xyz/'.@$categoria.'"
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "'.@$titulo.'",
                            "item": "'.@$urlCorrent.'"
                        }
                    ]
                }
            ]
            </script>
        ';

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
