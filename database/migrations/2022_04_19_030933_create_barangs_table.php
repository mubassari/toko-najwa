<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     *
     * @return void
     */
    public function up()
    {
        Schema::create('barang', function (Blueprint $table) {
            $table->id();
            $table->string('kode', 3)->unique();
            $table->string('nama', 50);
            $table->bigInteger('id_kategori')->unsigned()->nullable();
            $table->bigInteger('id_satuan')->unsigned()->nullable();

            $table->foreign('id_kategori')->references('id')->on('kategori')->onDelete('set null');
            $table->foreign('id_satuan')->references('id')->on('satuan')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('barang');
    }
};
