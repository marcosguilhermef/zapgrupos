<?php
namespace App\Http\Controllers\Admin;

use App\Application\Externo\Externo;
use Illuminate\Http\Request;
use App\Models\gruposWhatsApp as gp;
class ConteudoSensivel extends Externo{
    public function __construct(){
        parent::__construct();
    }

    public function show(Request $request, ...$params){}
    public function get_post(Request $request, ...$params){
        if(!strcmp($request->input("token"),"Lm9yn5xqzEF1EOKUDvhh5avfZxnFiMTzB9i3fDhWjloU7b58IZ")){
            gp::Where("_id",$params[0])->update(['sensivel' => true]);
        }
    }
}
 