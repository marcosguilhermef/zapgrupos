<?php

namespace App\Models;

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
    public static function addDenuncias($id){
        return Denuncias::Create(["id" => $id]);
    }

}
