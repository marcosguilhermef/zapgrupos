<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class gruposWhatsApp extends Model
{
    use HasFactory;
    protected $primaryKey = '_id';
    protected $collection = 'URLs';
    protected $connection = 'mongodb';
    protected $currentPage = 12;
    //protected $dates = ['birthday'];
    public static function getMaisAcessados(){
        $limit = 8 ;
        $projections = ["_id", "vizita", "url", "categoria", "descricao", "img","titulo"];
        return gruposWhatsApp::orderBy("vizita","desc")->paginate($limit,$projections);
    }
    public static function getRecentes(){
        $limit = 8 ;
        $projections = ["_id", "vizita", "url", "categoria", "descricao", "img","titulo"];
        return gruposWhatsApp::orderBy("_id","desc")->paginate($limit,$projections);
    }
    public static function getGrupoById($_id){
        return gruposWhatsApp::where("_id",$_id)->get();
    }
    public static function getGrupoByCategory($categoria){
        return gruposWhatsApp::where("categoria",$categoria)->limit(10)->get();    
    }
    public static function getGrupoByCategoryPaginate($categoria){
        $limit = 8 ;
        $projections = ["_id", "vizita", "url", "categoria", "descricao", "img","titulo"];
        return gruposWhatsApp::where("categoria",$categoria)->paginate($limit,$projections);    
    }

}
