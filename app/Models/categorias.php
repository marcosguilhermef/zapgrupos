<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class categorias extends Model
{
    use HasFactory;
    protected $primaryKey = '_id';
    protected $collection = 'Categorias';
    protected $connection = 'mongodb';

    public static function getCategoryPaginate(){
        $limit = 100;
        return categorias::paginate($limit);
    }

    public static function getCategoryInformation($categorioa){
        return categorias::where("categoria",$categorioa)->get();
    }
}
