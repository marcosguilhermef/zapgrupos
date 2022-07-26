<?php

namespace App\Http\Controllers\Admin\Usuarios;
use App\Application\Authority\Admin;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class Usuario extends Admin{

    public function index(Request $request, $id){
        $data = User::find($id)->toArray();
        $data = [ "data" => $data] + $this->authInfo();
        return Inertia::render('Admin/Usuarios/Usuario',$data);
    }
}
