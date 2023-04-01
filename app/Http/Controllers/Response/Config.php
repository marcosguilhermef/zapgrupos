<?php
namespace App\Http\Controllers\Response;

class Config{
    private string $id;
    private string $level;
    private string $name;
    private string $email;

    public function setId(string $value){
        $this->id = $value;
    }

    public function setLevel(string $value){
        $this->level = $value;
    }

    public function setName(string $value){
        $this->name = $value;
    }

    public function setEmail(string $value){
        $this->email = $value;
    }

    public function getId(){
        return $this->id;
    }

    public function getName(){
        return $this->name;
    }  

    public function getlevel(){
        return $this->level;
    }   
     
    public function getEmail(){
        return $this->email;
    }

    // public function parse(array $array){
    //     $methods =  array_filter(get_class_methods($this), function($element){{
    //         preg_match()
    //     }});
    // }
}