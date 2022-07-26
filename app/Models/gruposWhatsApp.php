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
    protected $fillable = [
        "_id", 
        "vizita",
        "sensivel", 
        "url", 
        "categoria", 
        "descricao",
        "img",
        "titulo",
        "tipo",
        "created_at",
        "pais",
        "ativo",
        "email",
        "telefone",
        "linkOrigem",
        "siteMae",
    ];
    
    protected static $projections = 
        [
            
            "_id", 
            "vizita",
            "sensivel", 
            "url", 
            "categoria", 
            "descricao",
            "img",
            "titulo",
            "tipo",
            "created_at",
            "updated_at"
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d\TH:i:sP',
        'updated_at' => 'datetime:Y-m-d\TH:i:sP'
    ];

    public $timestamps = true;


    public static function getMaisAcessados(){
        $limit = 8 ;
        return gruposWhatsApp::where([
                ["ativo","=", true],
                ["sensivel","=",false]
            ])->orderBy("vizita","asc")->paginate($limit,self::$projections);
    }

    public static function getRecentes($limit = 8,$categoria = null){
        if(!$categoria){
            return gruposWhatsApp::where([
                ["ativo","=", true],
                ["sensivel","=",false]
                ])->orderBy("_id","desc")->paginate($limit,self::$projections);
        }else{
            return gruposWhatsApp::where(
                    [
                        '$text' => [ '$search' =>  "\"$categoria\"" , '$diacriticSensitive'=> true], 
                        "ativo" => true, 
                        "sensivel" => false
                    ]
                )
                ->orderBy("_id","desc")
                ->paginate($limit,self::$projections);
        }
    }

    public static function getGrupoById($_id){
        return gruposWhatsApp::where("_id",$_id)->get();
    }

    public static function getGrupoByCategoryPaginate($categoria, $limit = 8){
        return gruposWhatsApp::where(
                [
                    '$text' => [ '$search' =>  "\"$categoria\"" , '$diacriticSensitive'=> true], 
                    "ativo" => true,
                    "sensivel" => false
                    ]
            )->orderBy("_id","desc")->paginate($limit,self::$projections);

    }

    public static function GetAllURLs(){
        return gruposWhatsApp::all();
    }

    public static function getGrupoByCategory($categoria){
        return gruposWhatsApp::where(
            [
                '$text' => [ '$search' => "\"$categoria\"" , '$diacriticSensitive'=> true], 
                "ativo" => true,
                "sensivel" => false

            ])->orderBy("vizita","desc")->limit(10)->get();
    }

}
