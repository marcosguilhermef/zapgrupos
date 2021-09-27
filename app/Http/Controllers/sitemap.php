<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\gruposWhatsApp;
use DateTime;

class sitemap extends Controller
{
    public function index(){
        $array = gruposWhatsApp::all();
        return response($this->generateXml($array))->header('Content-Type', 'application/xml');
    }

    protected function generateXml($array){
        $xml = "
            <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">
                <url>
                        <loc>".env("APP_URL")."</loc>
                        <lastmod>2021-08-16</lastmod>
                        <changefreq>daily</changefreq>
                        <priority>1.0</priority>
                </url>
            ";

        foreach($array as $value){
            $date = new \DateTime(isset($value['updated_at']) ? $value['updated_at'] : (isset($value['created_at']) ? $value['created_at']: 'NOW'));
            $xml .= "
            <url>
                    <loc>".env("APP_URL")."/$value[categoria]/$value[_id]</loc>
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
