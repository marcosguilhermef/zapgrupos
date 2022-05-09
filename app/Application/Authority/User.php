<?php
namespace App\Application\Authority;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;
use App\Models\User as U;
use Illuminate\Http\Request;
use Laravel\Sanctum\Guard;
class User extends Authority{
    public function __construct()
    {
        parent::__construct();
        $this->middleware(function($request, $next){
            if (!Gate::allows('user',Auth::user())) {
                abort(401);
            }
            return $next($request);
        });

    }

    public function logout(Request $request){
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return dd("login");  
    }
}