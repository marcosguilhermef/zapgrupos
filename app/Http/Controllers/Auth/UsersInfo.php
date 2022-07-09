<?php
namespace App\Http\Controllers\Auth;
use Illuminate\Support\Facades\Auth;

class UsersInfo{
    public static $info;
    /* [
        'user' => substr(Auth::user()->name,0,8).'...',
        'level' => Auth::user()->guard,
        'verified' => Auth::user()->hasVerifiedEmail(),
        'api_token' => Auth::user()->api_token
    ]; */
    public static function getInfor(){
        if(!isset(self::$info) &&  Auth::guard()->check()){
            
            return self::$info = [
                'user' => substr(Auth::guard()->user()->name,0,8).'...',
                'role' => Auth::guard()->user()->role,
                'verified' => true,
                'token_name' => Auth::guard()->user()->api_token,
                'authenticated' => Auth::guard()->check()
            ];
        }
        self::$info = [
            'verified' => true,
            'authenticated' => false
        ];
        return self::$info;
    }
}