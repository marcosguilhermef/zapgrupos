<?php

namespace App\Application\Externo;

use App\Application\Empresa;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;

abstract class Externo extends Empresa {

    public function __construct()
    {
        parent::__construct();
    }
    abstract public function show(Request $request, ...$params);
    abstract function get_post(Request $request, ...$params);
}
