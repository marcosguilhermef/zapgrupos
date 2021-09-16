<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Auth\UsersInfo;


class sobre extends Controller
{
    public function index(){
        $conf = UsersInfo::getInfor();
        return Inertia::render('Externo/Sobre',$conf);
    }
}