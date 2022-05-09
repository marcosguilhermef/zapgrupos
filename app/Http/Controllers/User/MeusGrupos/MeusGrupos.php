<?php
namespace App\Http\Controllers\User\MeusGrupos;

use App\Application\Authority\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\gruposWhatsApp;

class MeusGrupos extends User{
    public function index(Request $request){
        return Inertia::render('User/MeusGrupos');
    }

}