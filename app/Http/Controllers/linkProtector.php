<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\gruposWhatsApp;
use Inertia\Inertia;
use App\Http\Controllers\Auth\UsersInfo;

class linkProtector extends Controller
{
    private $_id;
    private gruposWhatsApp $grupo;

    public function index($id){
        $this->setID($id);
        $this->addAcesso();
        $conf = UsersInfo::getInfor();
        $conf["titulo"] =   $this->getTitulo();
        $conf["url"]    =   $this->getLink();
        return Inertia::render('Externo/ProtetorDeLink', $conf);


    }
    private function setID($id){
        $this->_id = $id;
    }
    private function addAcesso(){
        $this->grupo = gruposWhatsApp::find($this->_id);
        $this->grupo->vizita = $this->grupo->vizita+1;
        $this->grupo->save();
    }
    private function getLink(){
        return $this->grupo->url;
    }
    private function getTitulo(){
        return $this->grupo->titulo;
    }
}