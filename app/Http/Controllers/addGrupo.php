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
use MongoDB\BSON\ObjectId;

class addGrupo extends Controller
{
    protected $notNullable = [
        "titulo"    => "", 
        "ativo"     => true, 
        "sensivel"  => false
    ];

    public function index(){
        $conf = UsersInfo::getInfor();
        $conf["title"]     =   'Adicionar Grupo';
        $conf["titulo"]     =   $conf["title"];
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

    public function addGrupoByApi(Request $r){
        $validate = $this->validateRequest($r);
        if($validate->fails()){
            return response()->json($validate->errors(),400);
        }
        $save = $this->storeByapi($r->all());
        return response()->json($save,200);
    }

    public function store(Array $r){
        $grupo = new gruposWhatsApp();
        $a = $grupo::create(
            array_merge(
                $r,
                ["url" => $r["link"]],
                $this->notNullable
            )
        );
        $this->resgartarImage($a->_id, $a->url,$a->tipo);
        return url()->to("/$grupo->categoria/".$a->_id);

    }
    
    public function storeByapi(Array $r){
        $grupo = new gruposWhatsApp();
        $a = $grupo::create(
            array_merge(
                $r,
                ["url" => $r["link"]],
                $this->notNullable,
            )
        );
        $this->resgartarImage($a->_id, $a->url,$a->tipo);

         return [
             'id'        => $a->_id,
             'url'       => $a->url,
             'titulo'    => $a->titulo,
             'descricao' => $a->descricao,
             'categoria' => $a->categoria,
             'tipo'      => $a->tipo,
             'img'       => 'https://zapgrupos.xyz/img/generico/reactangle.png'
         ];

    }

    public function resgartarImage(String $id, String $url, String $tipo){
        try{
            if($tipo == "whatsapp"){
                shell_exec('java -jar '.env("JAVA_BOT")." -re $id $url");
                return;
            }
        }catch( \Exception $e ){
            return;
        }
    }

    public function validateRequest(Request $request){
        //dd($request);

        $rules = [
            'descricao'     =>      'required|between:30,300',
            //'titulo'        =>      'required|between:5,50',
            'link'          =>      ["required","url",new uniqmongo],
            'telefone'      =>      'required',
            'categoria'     =>      'required',
            'email'     =>          'required|email',
        ];
        $messages    = [
            'descricao.required'     => 'O campo \'Descrição\' não está preenchido.',
            //'titulo.required'     => 'O campo \'Titulo\' não está preenchido.',
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
