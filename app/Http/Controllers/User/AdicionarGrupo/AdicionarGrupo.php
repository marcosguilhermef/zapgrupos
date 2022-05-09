<?php
namespace App\Http\Controllers\User\AdicionarGrupo;

use App\Application\Authority\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\categorias;

class AdicionarGrupo extends User{
    public function index(Request $request){
        return Inertia::render('User/AdicionarGrupo',[
            'categorias' => categorias::getCategoryPaginate()->toArray()['data']
        ]);
    }

}