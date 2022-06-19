<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Denuncias;
class Denuncia extends Controller
{
    public function index(Request $request){
        Denuncias::addDenuncias($request->input("id"));
        return response()->json(["sucesso" => "ok"]);
    }
    
}
