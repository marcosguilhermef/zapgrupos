<?php
namespace App\Http\Controllers\Response;

class DataResponse{
    private array $data;
    private int $statusCode;
    private Config $config;

    public function __construct(array $data = null , int $statusCode = null){
        $this->data = $data;
        $this->statusCode = $statusCode;
    }
    
    public function setStatus($value){
        $this->statusCode = $value;
    }

    public function setData($value){
        $this->data = $value;
    }

    public function getStatus(){
        return $this->statusCode;
    }

    public function getData(){
        return $this->data;
    }

    public function getConfig(){
        return $this->config;
    }

    public function setConfig(Config $config){
        $this->config = $config;
    }
}