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
        "url"           => "\t<meta property=\"og:url\" content=\"{url}\" />\n",
        "type"          => "\t<meta property=\"og:type\" content=\"{type}\" />\n",
        "title"         => "\t<meta property=\"og:title\" content=\"{title}\" />\n",
        "description"   => "\t<meta property=\"og:description\" content=\"{description}\" />\n",
        "image"         => "\t<meta property=\"og:image\" content=\"{image}\" />\n",
        "site_name"     => "\t<meta property=\"og:site_name\" content=\"{site_name}\" />\n"
    ];
    
    protected $normal = [
        "canonical"     => "<link rel=\"canonical\" href=\"{canonical}\"/>\n",
        "description"   => "\t<meta name=\"description\" content=\"{description}\">\n",
        "robots"        => "\t<meta name=\"robots\" content=\"{robots}\">\n",
        "lang"          => "\t<meta name=\"lang\" content=\"{lang}\">\n",
        "ms.locate"     => "\t<meta name=\"ms.locate\" content=\"{ms.locate}\">\n",
        "distribution"  => "\t<meta name=\"distribution\" content=\"{distribution}\">\n",
        "rating"        => "\t<meta name=\"rating\" content=\"{rating}\">\n",
        "doc-rights"    => "\t<meta name=\"doc-rights\" content=\"{doc-rights}\">\n",
        "revisit-after" => "\t<meta name=\"revisit-after\" content=\"{revisit-after}\">\n",
        "http-equiv"    => "\t<meta http-equiv=\"Content-Language\" content=\"{http-equiv}\" />\n"
    ];

    protected $twitter = [
        "url"           =>"\t<meta name=\"twitter:url\" content=\"{url}\"/>\n",
        "title"         =>"\t<meta name=\"twitter:title\" content=\"{title}\"/>\n",
        "card"          =>"\t<meta name=\"twitter:card\" content=\"{card}\"/>\n",
        "description"   =>"\t<meta name=\"twitter:description\" content=\"{description}\"/>\n",
        "image"         =>"\t<meta name=\"twitter:image\" content=\"{image}\"/>\n",
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
                $str .= preg_replace("/{\w+}|-/",$this->metaAbributes[$key],$value);
            }
        }
        return $str;
    }

    public function processNormal(){
        $str = "";
        foreach($this->normal as $key => $value ){
            if(isset($this->metaAbributes[$key])){
                $str .= preg_replace("/{[\w.-]+}/",$this->metaAbributes[$key],$value);
            }
        }
        return $str;
    }

    public function processFacebook(){
        $str = "";
        foreach($this->facebook as $key => $value ){
            if(isset($this->metaAbributes[$key])){
                $str .= preg_replace("/{[\w.-]+}/",$this->metaAbributes[$key],$value);
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
