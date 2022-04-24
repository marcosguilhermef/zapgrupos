<?php
namespace App\Http\Controllers\Admin\Grupos\Grupo;

use App\Application\Authority\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class Reload extends Admin{

    public function index($id,Request $request){

        $exitCode = Artisan::call('reload:group', ['id' => $id]);
        return redirect(url()->previous());
    }
    
}