<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Auth\UsersInfo;
use App\Models\categorias;
class maisCategorias extends Controller
{
    public function index(){
        $conf = UsersInfo::getInfor();
        $conf['dados'] = categorias::getCategoryPaginate();
        $urlCorrent = url()->current();
        $conf["meta"] = '
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
                            "name": "Mais grupos",
                            "item": "'.@$urlCorrent.'"
                        }
                    ]
                }
            </script>
        ';

        return Inertia::render('v2.0/Externo/Categorias', $conf);
    }
    public function show(){
        $conf = UsersInfo::getInfor();
        //$conf['dados'] = categorias::getCategoryPaginate();
        return response()->json(categorias::getCategoryPaginate(),200);
    }
}
