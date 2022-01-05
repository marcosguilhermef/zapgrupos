<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Auth\UsersInfo;
use Inertia\Inertia;

class gerarLink extends Controller
{
    public function index(){
        $conf = UsersInfo::getInfor();
        $conf["titulo"] = "Gerador de Link para Whatsapp - Zapgrupos";
        $conf["title"]  = 'Gerador de Link para Whatsapp - Zapgrupos';
        $conf['meta'] = "
<link rel=\"canonical\" href=\"".url()->current()."\"/>
<meta name=\"description\" content=\"Gerador de link de compartilhamento no whatsapp.\" />\n";
        return Inertia::render('Externo/GerarLink', $conf);
    }
}
