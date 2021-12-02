<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Illuminate\Http\Client\Request;
class Acesso extends Model
{
    use HasFactory;
    protected $primaryKey = '_id';
    protected $collection = 'Acessos';
    protected $connection = 'mongodb';
    public    $timestamps = true;
    protected $fillable = [
        "id",
        "ip"
    ];
    public static function addAcesso($id){
        return Acesso::Create([
            "id" => $id,
            "ip" => request()->ip(),
        ]);
    }

}
