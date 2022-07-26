<?php

namespace App\Models;

use App\Http\Controllers\Denuncia;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Illuminate\Http\Client\Request;
class Denuncias extends Model
{
    use HasFactory;
    protected $primaryKey = '_id';
    protected $collection = 'denuncias';
    protected $connection = 'mongodb';
    public    $timestamps = true;

    protected $fillable = [
        "id"
    ];

    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i:s',
        'updated_at' => 'datetime:d-m-Y H:i:s'
    ];
    
    public static function addDenuncias($id){
        return Denuncias::Create(["id" => $id]);
    }
    public static function getReportPaginated($limit = 50){
        return Denuncias::orderBy("_id","desc")->paginate($limit);
    }

}
