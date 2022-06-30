<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detail_barang', function (Blueprint $table) {
            $table->id();
            $table->string('nama', 50);
            $table->integer('kode')->unsigned()->nullable();
            $table->bigInteger('id_barang')->unsigned()->nullable();
            $table->bigInteger('id_supplier')->unsigned()->nullable();
            $table->integer('stok')->unsigned()->nullable();
            $table->integer('stok_min')->unsigned()->nullable();
            $table->integer('harga')->unsigned()->nullable();
            $table->boolean('restok')->default(true);

            $table->foreign('id_barang')->references('id')->on('barang')->onDelete('cascade');
            $table->foreign('id_supplier')->references('id')->on('supplier')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detail_barang');
    }
};
