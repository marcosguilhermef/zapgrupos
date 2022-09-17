<?php

namespace App\Http\Controllers\Admin\Categorias;
use App\Application\Authority\Admin;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\categorias as CT;

class InfoCategoria extends Admin{
    
    public function index(Request $request, $id){
        $data = $this->authInfo() +  [ 'data' => CT::find($id)->toArray()];
        return Inertia::render('v1.0/Admin/Categorias/InfoCategoria',$data);
    }
}
