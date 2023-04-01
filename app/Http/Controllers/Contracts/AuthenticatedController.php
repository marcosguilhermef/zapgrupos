<?php
namespace App\Http\Controllers\Contracts;

use Illuminate\Http\Client\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;

abstract class AuthenticatedController extends BaseController implements Controller{

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected Request $request;

    protected function __construct(Request $request){
        $this->request = $request;
    }

    protected function verifyLevelAccess($level){
        $this->middleware(function($request, $next) use ($level){
            if (!Gate::allows($level,Auth::user())) {
                abort(401);
            }
            return $next($request);
        });    
    }

    public abstract function responseData();

    public abstract function receivPost();

    public abstract function index();
}