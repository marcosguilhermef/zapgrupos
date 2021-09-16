<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\gruposWhatsApp;

class gruposRecentes extends Controller
{
    public function index(){
        return $this->gruposRecentes();
    }
    
    public function gruposRecentes(){
        return response()->json(gruposWhatsApp::getRecentes(),200,['Content-Type' => 'application/json;charset=UTF-8', 'Charset' => 'utf-8'],JSON_UNESCAPED_UNICODE);

    }
}
