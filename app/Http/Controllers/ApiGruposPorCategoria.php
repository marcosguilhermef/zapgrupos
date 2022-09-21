<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\gruposWhatsApp;
class ApiGruposPorCategoria extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    public function show(Request $request,$categoria)
    {
        $limit = @$request->query()["limit"] ? $request->query()["limit"] : 8;

        return response()
                    ->json(
                            gruposWhatsApp::getGrupoByCategoryPaginate($categoria,(Integer)$limit),
                            200,
                            ['Content-Type' => 'application/json;charset=UTF-8', 'Charset' => 'utf-8'],
                            JSON_UNESCAPED_UNICODE
                        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
}
