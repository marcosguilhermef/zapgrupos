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
    protected $casts = [
        'created_at' => 'datetime:Y-m-d\TH:i:sP',
        'updated_at' => 'datetime:Y-m-d\TH:i:sP'
    ];
    public    $timestamps = true;
    //protected $dates = ['birthday'];

    public static function getMaisAcessados(){
        $limit = 8 ;
        $projections = ["_id", "vizita", "url", "categoria", "descricao", "img","titulo","tipo","created_at","updated_at"];
        return gruposWhatsApp::where("ativo", true)->orderBy("vizita","asc")->paginate($limit,$projections);
    }

    public static function getRecentes(){
        $limit = 8 ;
        $projections = ["_id", "vizita", "url", "categoria", "descricao", "img","titulo","tipo","created_at","updated_at"];
        return gruposWhatsApp::where("ativo", true)->orderBy("_id","desc")->paginate($limit,$projections);
    }

    public static function getGrupoById($_id){
        return gruposWhatsApp::where("_id",$_id)->get();
    }

    public static function getGrupoByCategoryPaginate($categoria, $limit = 8){
        $projections = ["_id", "vizita", "url", "categoria", "descricao", "img","titulo","tipo","created_at","updated_at"];
        //return gruposWhatsApp::where("ativo", true)->where("categoria",$categoria)->orderBy("vizita","asc")->paginate($limit,$projections);
        return gruposWhatsApp::where(['$text' => [ '$search' =>  "\"$categoria\"" , '$diacriticSensitive'=> true], "ativo" => true])->orderBy("vizita","desc")->orderBy("_id","desc")->paginate($limit,$projections);

    }

    public static function GetAllURLs(){
        return gruposWhatsApp::all();
    }

    public static function getGrupoByCategory($categoria){
        return gruposWhatsApp::where(['$text' => [ '$search' => "\"$categoria\"" , '$diacriticSensitive'=> true], "ativo" => true])->orderBy("vizita","desc")->limit(10)->get();
    }

}
