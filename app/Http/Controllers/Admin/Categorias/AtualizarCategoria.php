<?php

namespace App\Http\Controllers\Admin\Categorias;
use App\Application\Authority\Admin;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Models\categorias as CT;
use Illuminate\Support\Facades\Validator;

class AtualizarCategoria extends Admin{

    private $validation;

    public function index($id){
        $data = $this->authInfo() + [ "_token" => csrf_token() ] + CT::find($id)->toArray();
        return Inertia::render("v1.0/Admin/Categorias/UpdateCategoria", $data);
    }

    public function store(Request $request){

        $this->validateImput($request);

        if($this->validation->fails()){
            return response()->json(["erro" => $this->validation->errors()], 400);
        }

        //dd($request->all());

        if($request->input('img') != null){

            $update = CT::where("_id", $request->input("id"))->update([
                'categoria' => $request->input('categoria'),
                'img'       => $this->salvarImagem($request->input('img')),
                'descricao' => $request->input('descricao')
            ]);

        }else{

            $update = CT::where("_id", $request->input("id"))->update([
                'categoria' => $request->input('categoria'),
                'descricao' => $request->input('descricao')
            ]);

        }

        return response()->json([ "sucesso" => $update ]);
    }

    private function validateImput(Request $request){
        $this->validation = Validator::make($request->all(), [
            'categoria' => 'max:100',
            'descricao' => 'max:255'
        ]);

    }
    private function salvarImagem($Image){
        try{
            $img = getimagesize( $Image );
        }catch(\Exception $e){
            return null;
        } 

        $type = "jpg";

        $imgStr = str_replace('data:'.$img['mime'].';base64,', '', $Image);
        $imgStr = str_replace(' ', '+', $imgStr);

        $nameImage = Str::random(20).'.'.$type;
        $pathImage = "/image/$nameImage";

        Storage::put($pathImage, base64_decode($imgStr));
        return array(url($pathImage));
    }
         
}
