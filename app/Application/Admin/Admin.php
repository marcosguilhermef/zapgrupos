<?php

namespace App\Application\Admin;

use App\Application\Empresa;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;

abstract class Admin extends Empresa {

    public function __construct()
    {
        parent::__construct();
        $this->middleware(function($request, $next){
            if (!Gate::allows('admin',Auth::user())) {
                abort(401);
            }
            return $next($request);
        });
    }
    abstract public function show(Request $request, ...$params);
    abstract function get_post(Request $request, ...$params);
}
