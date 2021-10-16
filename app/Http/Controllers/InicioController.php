<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Auth\UsersInfo;

class InicioController extends Controller
{
    public function index(){
        $conf = UsersInfo::getInfor();
        $conf["titulo"] = 'Grupos mais acessados';
        $conf["api"]       = 'api/maisAcessados';
        $conf["meta"]      ='
<meta name="description" content="Encontre grupos de whatsapp e telegram de acordo com o seu interesse. Temos mais de 20 categorias de grupos para os mais diversos interesses. Você também pode cadastrar o seu grupo para que mais pessoas entrem nos seus grupos." />
<script type="application/ld+json">
       {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Zapgrupos",
      "url": "https://zapgrupos.xyz",
      "logo": "https://zapgrupos.xyz/img/logo/logo.png",
      "image": "https://zapgrupos.xyz/img/logo/logo.png",
      "description": "O app zapgrupos cataloga grupos de whatsapp e telegram e os organiza em categorias. Dessa forma, você pode facilmente encontrar o grupos que mais te despertem o interesse e interagir com centenas de pessoas. O app possuí diversas categorias, dentre elas as mais acessadas são: Amizade, Namoro , Estudo, Metemáticas, Trabalho, etc",
      "operatingSystem": ["ANDROID", "WEB"],
      "applicationCategory": "UtilitiesApplication",
       "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "ratingCount": "5000"
      },
      "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "USD"
      }
    }
    }
    </script>';
        return Inertia::render('Externo/Inicio', $conf);
    }
}
