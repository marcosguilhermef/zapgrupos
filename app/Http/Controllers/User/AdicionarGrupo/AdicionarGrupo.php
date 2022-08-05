<?php
namespace App\Http\Controllers\User\AdicionarGrupo;

use App\Application\Authority\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\categorias;
use App\Models\gruposWhatsApp;
use App\Rules\uniqmongo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use MongoDB\BSON\ObjectId;

class AdicionarGrupo extends User{

    protected $notNullable = [
        "titulo"    => "", 
        "ativo"     => true, 
        "sensivel"  => false
    ];

    public function index(Request $request){
        $data = $this->authInfo() + ['categorias' => categorias::getCategoryPaginate()->toArray()['data'], '_token' => csrf_token()];
        return Inertia::render('User/AdicionarGrupo', $data);
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
        $a = $grupo::create(
            array_merge(
                $r,
                ["url" => $r["link"]],
                ["user_id" => new \MongoDB\BSON\ObjectId(Auth::user()->id)],
                $this->notNullable
            )
        );


        $this->resgartarImage($a->_id, $a->url,$a->tipo);

        return url()->to("/$a->categoria/".$a->_id);

    }

    public function validateRequest(Request $request){

        $rules = [
            
            'descricao'     =>      'required|between:30,300',
            'link'          =>      ["required","url",new uniqmongo],
            'categoria'     =>      'required',
        ];

        $messages    = [
            'descricao.required'     => 'O campo \'Descrição\' não está preenchido corretamente.',
            'descricao.between'      => 'O campo \'Descrição\' deve ter entre 30 e 300 caractéries',
            'link.required'          => 'O campo \'Link\' não está preenchido.',
            'categoria.required'     => 'O campo \'Categoria\' não está preenchido.',
        ];

        $validatedData = Validator::make($request->all(),$rules,$messages);

        return $validatedData;

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

}