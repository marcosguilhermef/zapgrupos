<?php

namespace App\Http\Controllers\User\Editar;

use App\Application\Authority\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\gruposWhatsApp;
use App\Models\categorias;
use Illuminate\Support\Facades\Validator;


class Editar extends User{

    public function index(Request $request, $_id){
        $data = $this->authInfo() + [ '_token' => csrf_token()]+gruposWhatsApp::find($_id)->toArray()+[ "categorias" => categorias::all()->toArray()];
        return Inertia::render('User/Editar',$data);
    }

    public function store(Request $request){
        $validation = $this->validateRequest($request);
        if(!$validation->fails()){
            $this->update($request->all(), $request->input('_id'));
            return response()->json(["sucesso" => true],200);
        }
        return response()->json($validation->errors(),400);
    }

    public function update($arr, $id){
        unset($arr["_id"]);
        gruposWhatsApp::find($id)->update($arr);
    }


    public function validateRequest(Request $request){

        $rules = [
            'descricao'     =>      'between:30,300',
            '_id'           =>      'required'
        ];

        $messages    = [
            'descricao.between'      => 'O campo \'Descrição\' deve ter entre 30 e 300 caractéries',
        ];

        $validatedData = Validator::make($request->all(),$rules,$messages);

        return $validatedData;

    }


}