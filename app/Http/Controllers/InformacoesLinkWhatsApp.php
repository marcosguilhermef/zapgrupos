<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InformacoesLinkWhatsApp extends Controller
{
    public function index($categoria,$id){
        dd([$categoria, $id]);
    }
}
