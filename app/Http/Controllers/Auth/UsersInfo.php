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
        //dd(Auth::guard()->check());
        if(!isset(self::$info) &&  Auth::guard()->check()){
            return self::$info = [
                'user' => substr(Auth::guard()->user()->name,0,8).'...',
                'level' => Auth::guard()->user()->guard,
                'verified' => Auth::guard()->user()->hasVerifiedEmail(),
                'api_token' => Auth::guard()->user()->api_token,
                'authenticated' => Auth::guard()->check()
            ];
        }
        self::$info = [
            'verified' => true,
            'authenticated' => true
        ];
        return self::$info;
    }
}