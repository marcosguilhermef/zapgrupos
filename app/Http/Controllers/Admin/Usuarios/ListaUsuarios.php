<?php

namespace App\Http\Controllers\Admin\Usuarios;
use App\Application\Authority\Admin;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class ListaUsuarios extends Admin{

    public function index(Request $request){
        $data = User::getUserPaginated(8)->toArray();
        $data = $data + $this->authInfo();
        return Inertia::render('v1.0/Admin/Usuarios/ListaUsuarios',$data);
    }

}