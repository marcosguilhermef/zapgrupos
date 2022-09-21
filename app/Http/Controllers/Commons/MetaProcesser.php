<?php

namespace App\Http\Controllers\Commons;

class MetaProcesser
{
    protected $metaAtributes;
    protected $keys = [
        "url",
        "type",
        "title",
        "description",
        "image",
        "site_name",
        "canonical"
    ];

    protected $facebook = [
        "url" => "<meta property=\"og:url\" content=\"{url}\" />\n",
        "type" => "<meta property=\"og:type\" content=\"{type}\" />\n",
        "title" => "<meta property=\"og:title\" content=\"{title}\" />\n",
        "description" => "<meta property=\"og:description\" content=\"{description}\" />\n",
        "image" => "<meta property=\"og:image\" content=\"{image}\" />\n",
        "site_name" => "<meta property=\"og:site_name\" content=\"{site_name}\" />\n"
    ];
    
    protected $normal = [
        "canonical" => "<link rel=\"canonical\" href=\"{canonical}\"/>\n",
        "description" => "<meta name=\"description\" content=\"{description}\">\n",
    ];

    protected $twitter = [
        "url" =>"<meta name=\"twitter:url\" content=\"{url}\"/>\n",
        "title" =>"<meta name=\"twitter:title\" content=\"{title}\"/>\n",
        "card" =>"<meta name=\"twitter:card\" content=\"{card}\"/>\n",
        "description" =>"<meta name=\"twitter:description\" content=\"{description}\"/>\n",
        "image" =>"<meta name=\"twitter:image\" content=\"{image}\"/>\n",
    ];

    protected $metaString;
    protected $metaAbributes;

    function __construct($array)
    {
        $this->metaAbributes = $array;
    }

    public function processTwitter(){
        $str = "";
        foreach($this->twitter as $key => $value ){
            if(isset($this->metaAbributes[$key])){
                $str .= preg_replace("/{\w+}/",$this->metaAbributes[$key],$value);
            }
        }
        return $str;
    }

    public function processNormal(){
        $str = "";
        foreach($this->normal as $key => $value ){
            if(isset($this->metaAbributes[$key])){
                $str .= preg_replace("/{\w+}/",$this->metaAbributes[$key],$value);
            }
        }
        return $str;
    }

    public function processFacebook(){
        $str = "";
        foreach($this->facebook as $key => $value ){
            if(isset($this->metaAbributes[$key])){
                $str .= preg_replace("/{\w+}/",$this->metaAbributes[$key],$value);
            }
        }
        return $str;
    }


    
    public function getAllAtributes(){
        $str = $this->concat(
            $this->processNormal(),
            $this->processFacebook(),
            $this->processTwitter()
        );
        return $str;
    }

    private function concat(...$val){
        $str = "";
        foreach( $val as $key => $value ){
            if(!empty($value) ){
                $str .= $value;
            }
        }
        return $str;
    }
}
