<?php

namespace App\Http\Controllers\Externo\Register;

use App\Http\Controllers\Auth\RegisterController;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Validator;

class Register extends RegisterController{

    protected $validade;
    protected $redirectTo = "/";

    public function showRegistrationForm($erros = null){
        $token = csrf_token();

        return Inertia::render('Externo/Register',[
            'csrf_token' => $token,
            'erros'      => $erros
        ]);
    }

}