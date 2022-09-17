<?php
namespace App\Http\Controllers\User\MeusGrupos;

use App\Application\Authority\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\gruposWhatsApp;
use Illuminate\Support\Facades\Auth;

class MeusGrupos extends User{
    public function index(Request $request){
        $data = $this->authInfo() + gruposWhatsApp::getGrupoByUserId(Auth::user()->id)->toArray();
        return Inertia::render('v1.0/User/MeusGrupos', $data);
    }

}