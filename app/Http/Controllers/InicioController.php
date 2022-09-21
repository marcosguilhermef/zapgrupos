<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Auth\UsersInfo;
class InicioController extends Controller
{
    public function index(){
        $conf = UsersInfo::getInfor();
        $conf["titulo"] = 'Grupos de whatsapp';
        $conf["titulo_2"] = 'Grupos recem criados';
        $conf["api"]       = 'api/recentes';
        $conf["meta"]      ='
        <meta name="description" content="Encontre grupos de whatsapp e telegram de acordo com o seu interesse. Temos mais de 20 categorias de grupos para os mais diversos interesses. Você também pode cadastrar o seu grupo para que mais pessoas entrem nos seus grupos."  />
        <meta property="article:tag" content="zaps, whatsapp, whats, zapzapgrupos, android, grupos, zapgrupos, zapzap, zap, groups, imagens, videos, dicas, som, tudo whats, tudo facebook, redes sociais, noticias, apps" />
        <link rel="canonical" href="https://zapgrupos.xyz/" />
        <meta name="robots" content="index, follow" />
        <meta name="lang" content="pt_BR" />
        <meta name="ms.locate" content="pt_BR" />
        <meta name="category" content="publicidade" />
        <meta name="resource-type" content="document" />
        <meta name="classification" content="Internet" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="doc-class" content="Completed" />
        <meta name="doc-rights" content="Public" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="ZapGrupos - Encontre Grupos de WhatsApp e Telegram" />
        <meta property="og:description" content="Encontre grupos de whatsapp e telegram de acordo com o seu interesse. Temos mais de 20 categorias de grupos para os mais diversos interesses. Você também pode cadastrar o seu grupo para que mais pessoas entrem nos seus grupos." />
        <meta property="og:url" content="https://zapgrupos.xyz/" />
        <meta property="og:image" content="https://zapgrupos.xyz/img/logo/logo.png" />
        <meta property="og:site_name" content="Zapgrupos" />
        <meta http-equiv="Content-Language" content="pt-br" />
        <meta name="keywords" CONTENT="zaps, whatsapp, whats, zapzapgrupos, android, grupos, zapgrupos, zapzap, zap, groups, grupos, videos, memes, imagens, mp4, fotos, imagens, instagram, recados para facebook, facebook, imagens facebook, capas facebook, figuras, imagens de exibição, avatar, papéis de parede, wallpaper, emoticons, ícones, webobjects, categorias jogos, games, cinema, amor, filmes, desenhos, fun, esportes, windows, feminino, beijos, montagens, mulheres, artistas, música, home page, webmaster, design, programação, tecnologia e mais" />
        <meta name="revisit-after" content="1 Days" />
        <meta name="description" content="Encontre grupos de whatsapp e telegram de acordo com o seu interesse. Temos mais de 20 categorias de grupos para os mais diversos interesses. Você também pode cadastrar o seu grupo para que mais pessoas entrem nos seus grupos." />
        
        <script type="application/ld+json">
        {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Zapgrupos",
              "url": "https://zapgrupos.xyz",
              "logo": "https://zapgrupos.xyz/img/logo/logo.png",
              "image": "https://zapgrupos.xyz/img/logo/logo.png",
              "description": "O app zapgrupos cataloga grupos de whatsapp e telegram e os organiza em categorias. Dessa forma, você pode facilmente encontrar o grupos que mais te despertem o interesse e interagir com centenas de pessoas. O app possuí diversas categorias, dentre elas as mais acessadas são: Amizade, Namoro , Estudo, Metemáticas, Trabalho, etc",
              "operatingSystem": ["ANDROID", "WEB"]
        }
        </script>';
        return Inertia::render("v2.0/Externo/Inicio", $conf);
    }
}
