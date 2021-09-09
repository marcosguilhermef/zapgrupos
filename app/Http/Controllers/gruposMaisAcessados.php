<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\gruposWhatsApp;
class gruposMaisAcessados extends Controller
{
    public function index(){
        return $this->getDatos();
    }
    private function getDatos(){
        return response()->json(gruposWhatsApp::getMaisAcessados(),200,['Content-Type' => 'application/json;charset=UTF-8', 'Charset' => 'utf-8'],JSON_UNESCAPED_UNICODE);

    }
}
