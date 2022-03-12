<?php

namespace App\Application;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

abstract class Empresa extends Controller{
    public static $empresa;

    public function __construct()
    {
        $arr = null;
        if($arr){
            $empresa = collect($arr);
        }else{
            $empresa = collect([
                "nome"          => "empresa exemplo",
                "telefone"      => "+55 99 99999-9999",
                "email"         => "email@gmail.com",
                "facebook"      => "Empresa",
                "instagram"     => "Empresa",
                "whatsapp"      => "+55 99 99999-9999",
            ]);
        }

        $this->middleware(function ($request, $next) {
            $this->setUserInfo();
            return $next($request);
        });
    }

    abstract public function show(Request $request);
    abstract public function get_post(Request $request, ...$parans);

    public function setUserInfo(): void
    {
        if(!Auth::user()){
            $this->userInfo = [
                'name' => '',
                'verified'      => true,
                'authenticated' => false,
            ];
        }else{
            $info = Auth::user()->toArray();
            $this->userInfo = array_merge([
                'user' => $info["name"],
                'authenticated' => true,
                'verified' => true,
            ],$info);
        }
    }

    protected function authInfo(){
        return  [
            'verified'      => true,
            'authenticated' => Auth::check(),
            'user'          => $this->getUserInfo()["name"],
            'nivel'         => $this->getUserInfo()["nivel"]
        ];
    }

    public function getUserInfo()
    {
        return $this->userInfo;
    }

}