<?php

use Illuminate\Database\Migrations\Migration;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class URLs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('URLs', function (Blueprint $table) {
            $table->id();
            $table->text('titulo');
            $table->text('descricao');
            $table->text('url');
            $table->text('tipo');
            $table->boolean('ativo');
            $table->text('categoria');
            $table->text('email');
            $table->text('telefone');
            $table->text('linkOrigem');
            $table->double('vizita');
            $table->text('pais');
            $table->text('siteMae');
            $table->timestamps();
            $table->json('img');
            $table->boolean('sensivel');
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //Schema::dropIfExists('URLs');
    }
}
