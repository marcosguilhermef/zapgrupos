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
        return Inertia::render('Externo/MaisCategorias', $conf);
    }
    public function show(){
        $conf = UsersInfo::getInfor();
        //$conf['dados'] = categorias::getCategoryPaginate();
        return response()->json(categorias::getCategoryPaginate(),200);
    }
}
