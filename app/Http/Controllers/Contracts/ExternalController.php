<?php
namespace App\Http\Controllers\Contracts;

use Illuminate\Http\Client\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Response\DataResponse;
use App\Http\Controllers\Response\Config;

abstract class ExternalController extends BaseController implements Controller{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected Request $request;
    protected DataResponse $data;

    protected function __construct(Request $request){
        $this->request = $request;
    }

    public function verifyIfAuthentivated(){
        if(Auth::check()){
            $this->data = new DataResponse();
            $config = new Config();
            $config->parse($config);
            $this->data->setConfig($config);

        }
    }
    public abstract function responseData();
    public abstract function receivPost();
    public abstract function index();
    
}