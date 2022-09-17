<?php

namespace App\Http\Controllers\Admin\Categorias;
use App\Application\Authority\Admin;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Models\categorias as CT;
use Illuminate\Support\Facades\Validator;

class AdicionarCategoria extends Admin{

    private $validation;

    public function index(){
        $data = $this->authInfo() + [ "_token" => csrf_token() ];
        return Inertia::render("v1.0/Admin/Categorias/AddCategorias", $data);
    }

    public function store(Request $request){

        $this->validateImput($request);

        if($this->validation->fails()){
            return response()->json(["erro" => $this->validation->errors()], 400);
        }


        if($request->input('img') != null){

            $insert = CT::Insert([
                'categoria' => $request->input('categoria'),
                'img'       => array( $this->salvarImagem($request->input('img')) ),
                'descricao' => $request->input('descicao')
            ]);

        }else{
            $insert = CT::Insert([
                'categoria' => $request->input('categoria'),
                'descricao' => $request->input('descicao')
            ]);
        }

        return response()->json([ "sucesso" => $insert ]);
    }

    private function validateImput(Request $request){
        $this->validation = Validator::make($request->all(), [
            'categoria' => 'required|unique:Categorias,categoria',
            'descricao' => 'required'
        ]);

    }
    private function salvarImagem($Image){
        $img = getimagesize( $Image );

        $type = explode('/',$img['mime'])[1];

        $imgStr = str_replace('data:'.$img['mime'].';base64,', '', $Image);
        $imgStr = str_replace(' ', '+', $imgStr);

        $nameImage = Str::random(20).'.'.$type;
        $pathImage = "/image/$nameImage";

        Storage::put($pathImage, base64_decode($imgStr));
        return $pathImage;
    }
         
}
