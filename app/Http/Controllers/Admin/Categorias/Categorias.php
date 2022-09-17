<?php

namespace App\Http\Controllers\Admin\Categorias;
use App\Application\Authority\Admin;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\categorias as CT;

class Categorias extends Admin{

    public function index(Request $request){
        $data = $this->authInfo() + ['data' => CT::all()->toArray()];
        return Inertia::render('v1.0/Admin/Categorias/ListaCategorias',$data);
    }
}
