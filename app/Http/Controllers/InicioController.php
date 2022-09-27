<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Auth\UsersInfo;
use App\Http\Controllers\Commons\MetaProcesser;

class InicioController extends Controller
{
    public function index(){
        $conf = UsersInfo::getInfor();
        $conf["titulo"] = 'Grupos de whatsapp';
        $conf["titulo_2"] = 'Grupos recem criados';
        $conf["api"]       = 'api/recentes';

        $urlCorrent = url()->current();
        $description = "Tenha acesso a 100 mil grupos de WhatsApp. Entre nos grupos de WhatsApp que vc se interessar. Todos os grupos de WhatsApp são atualizados diariamente.";
        $img = "https://zapgrupos.xyz/img/logo/logo.png";

        $metaConstructor = new MetaProcesser(
            [
                "url" => $urlCorrent,
                "type" => "website",
                "title" => $conf["titulo"],
                "description" => $description,
                "image" => $img,
                "site_name" => "Zapgrupos",
                "canonical" => $urlCorrent,
                "robots"        => "index, follow",
                "lang"          => "pt_BR",
                "ms.locate"     => "pt_BR",
                "distribution"  => "Global",
                "rating"        => "General",
                "doc-rights"    => "Public",
                "revisit-after" => "1 Days",
                "http-equiv"    => "pt-br"
            ]
        );

        $conf["meta"] = $metaConstructor->getAllAtributes();
        return Inertia::render("v2.0/Externo/Inicio", $conf);
    }
}
