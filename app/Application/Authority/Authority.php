<?php
namespace App\Application\Authority;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

abstract class Authority extends Controller{
    
    protected function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->setUserInfo();
            return $next($request);
        });
    }

    protected function getInforEmpresa(){
        return  $this->empresa->getAll();
    }

    /**
     * @return mixed
     */

    public function getUserInfo()
    {
        return $this->userInfo;
    }

    /**
     * @return void
     */

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
                /*
                 * Deve ser reativado quando verificação de email estiver disponível.                 
                 * $info["email_verified_at"] ? true : false
                */
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
}