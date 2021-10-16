<?php

namespace App\Http\Controllers;

use App\Models\categorias;
use Illuminate\Http\Request;
use App\Models\gruposWhatsApp;
use DateTime;

class sitemap extends Controller
{
    public function index(){
        return response($this->generateXml())->header('Content-Type', 'application/xml');
    }

    protected function generateXml(){
        $xml = "
            <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">
                <url>
                        <loc>".url()->secure("/")."</loc>
                        <lastmod>2021-08-16</lastmod>
                        <changefreq>daily</changefreq>
                        <priority>1.0</priority>
                </url>
            ";
        $array = categorias::all();
        foreach($array as $value){
            $date = new \DateTime(isset($value['updated_at']) ? $value['updated_at'] : (isset($value['created_at']) ? $value['created_at']: 'NOW'));
            $xml .= "
            <url>
                    <loc>".url()->secure("/")."/".str_replace(' ','-',$value["categoria"])."</loc>
                    <lastmod>".$date->format('Y-m-d')."</lastmod>
                    <changefreq>weekly</changefreq>
                    <priority>1.0</priority>
            </url>
            ";
        }
        $array = gruposWhatsApp::all();
        foreach($array as $value){
            $date = new \DateTime(isset($value['updated_at']) ? $value['updated_at'] : (isset($value['created_at']) ? $value['created_at']: 'NOW'));
            $xml .= "
            <url>
                    <loc>".url()->secure("/")."/".str_replace(' ','-',$value["categoria"])."/$value[_id]</loc>
                    <lastmod>".$date->format('Y-m-d')."</lastmod>
                    <changefreq>weekly</changefreq>
                    <priority>1.0</priority>
            </url>
            ";
        }

        $xml .= '</urlset>';
        return $xml;
    }
}
