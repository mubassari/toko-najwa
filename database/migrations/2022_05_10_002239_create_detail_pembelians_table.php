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
        Schema::create('detail_pembelian', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('id_pembelian')->unsigned()->nullable();
            $table->bigInteger('id_detail_barang')->unsigned()->nullable();
            $table->integer('jumlah')->unsigned()->nullable();
            $table->integer('harga')->unsigned()->nullable();

            $table->foreign('id_pembelian')->references('id')->on('pembelian')->onDelete('cascade');
            $table->foreign('id_detail_barang')->references('id')->on('detail_barang')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detail_pembelian');
    }
};
