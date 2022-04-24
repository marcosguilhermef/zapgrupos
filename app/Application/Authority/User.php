<?php
namespace App\Application\Authority;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;

class Admin extends Authority{
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
}