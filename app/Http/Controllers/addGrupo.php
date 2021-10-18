<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Auth\UsersInfo;
use App\Models\categorias;
use Illuminate\Support\Facades\Validator;
use App\Rules\uniqmongo;
use App\Rules\url;
use App\Models\gruposWhatsApp;
class addGrupo extends Controller
{
    public function index(){
        $conf = UsersInfo::getInfor();
        $conf["titulo"]     =   'Grupos mais acessados';
        $conf["categorias"] =   categorias::all()->toArray();
        $conf["_token"]     =   csrf_token();
        return Inertia::render('Externo/AddGrupo', $conf);

    }
    public function addGrupo(Request $r){
        $validate = $this->validateRequest($r);
        if($validate->fails()){
            return response()->json($validate->errors(),400);
        }
        $save = $this->store($r->all());
        return response()->json(["redirect"=> $save],200);
    }

    public function store(Array $r){
        $grupo = new gruposWhatsApp();
        $grupo->url         =   $r["link"];
        $grupo->titulo      =   $r["titulo"];
        $grupo->descricao   =   $r["descricao"];
        $grupo->tipo        =   $r["tipo"];
        $grupo->ativo       =   true;
        $grupo->categoria   =   $r["categoria"];
        $grupo->email       =   $r["email"];
        $grupo->telefone    =   $r["telefone"];
        $grupo->linkOrigem  =   null;
        $grupo->vizita      =   null;
        $grupo->siteMae     =   null;
        $grupo->save();
        return url()->to("/$grupo->categoria/".$grupo->_id);

    }

    public function validateRequest(Request $request){
        //dd($request);

        $rules = [
            'descricao'     =>      'required|between:30,300',
            'titulo'        =>      'required|between:5,50',
            'link'          =>      ["required","url",new uniqmongo],
            'telefone'      =>      'required',
            'categoria'     =>      'required',
            'email'     =>          'required|email',
        ];
        $messages    = [
            'descricao.required'     => 'O campo \'Descrição\' não está preenchido.',
            'titulo.required'     => 'O campo \'Titulo\' não está preenchido.',
            'link.required'     => 'O campo \'Link\' não está preenchido.',
            'telefone.required'     => 'O campo \'Telefone\' não está preenchido.',
            'categoria.required'     => 'O campo \'Categoria\' não está preenchido.',
            'email.required'     => 'O campo \'Email\' não está preenchido.',
            'email.email'     => 'O campo \'Email\' está preenchido indevidamente',
        ];
        $validatedData = Validator::make($request->all(),$rules,$messages);
        return $validatedData;

    }
}
