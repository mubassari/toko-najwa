<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DetailPembelianTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('detail_pembelian')->delete();
        
        \DB::table('detail_pembelian')->insert(array (
            0 => 
            array (
                'id' => 1,
                'id_pembelian' => 1,
                'id_detail_barang' => 3,
                'jumlah' => 5,
                'harga' => 50000,
            ),
            1 => 
            array (
                'id' => 2,
                'id_pembelian' => 1,
                'id_detail_barang' => 4,
                'jumlah' => 5,
                'harga' => 51000,
            ),
            2 => 
            array (
                'id' => 3,
                'id_pembelian' => 1,
                'id_detail_barang' => 5,
                'jumlah' => 5,
                'harga' => 51000,
            ),
            3 => 
            array (
                'id' => 4,
                'id_pembelian' => 2,
                'id_detail_barang' => 11,
                'jumlah' => 7,
                'harga' => 48000,
            ),
            4 => 
            array (
                'id' => 5,
                'id_pembelian' => 2,
                'id_detail_barang' => 13,
                'jumlah' => 10,
                'harga' => 50000,
            ),
            5 => 
            array (
                'id' => 6,
                'id_pembelian' => 3,
                'id_detail_barang' => 14,
                'jumlah' => 10,
                'harga' => 55000,
            ),
            6 => 
            array (
                'id' => 7,
                'id_pembelian' => 3,
                'id_detail_barang' => 15,
                'jumlah' => 5,
                'harga' => 60000,
            ),
            7 => 
            array (
                'id' => 8,
                'id_pembelian' => 4,
                'id_detail_barang' => 7,
                'jumlah' => 7,
                'harga' => 50000,
            ),
            8 => 
            array (
                'id' => 9,
                'id_pembelian' => 4,
                'id_detail_barang' => 8,
                'jumlah' => 5,
                'harga' => 50000,
            ),
            9 => 
            array (
                'id' => 10,
                'id_pembelian' => 4,
                'id_detail_barang' => 22,
                'jumlah' => 7,
                'harga' => 45000,
            ),
            10 => 
            array (
                'id' => 11,
                'id_pembelian' => 5,
                'id_detail_barang' => 18,
                'jumlah' => 5,
                'harga' => 54000,
            ),
            11 => 
            array (
                'id' => 12,
                'id_pembelian' => 5,
                'id_detail_barang' => 19,
                'jumlah' => 5,
                'harga' => 54000,
            ),
            12 => 
            array (
                'id' => 13,
                'id_pembelian' => 5,
                'id_detail_barang' => 20,
                'jumlah' => 5,
                'harga' => 55000,
            ),
            13 => 
            array (
                'id' => 14,
                'id_pembelian' => 6,
                'id_detail_barang' => 19,
                'jumlah' => 7,
                'harga' => 50000,
            ),
            14 => 
            array (
                'id' => 15,
                'id_pembelian' => 6,
                'id_detail_barang' => 17,
                'jumlah' => 7,
                'harga' => 50000,
            ),
            15 => 
            array (
                'id' => 16,
                'id_pembelian' => 7,
                'id_detail_barang' => 19,
                'jumlah' => 10,
                'harga' => 50000,
            ),
            16 => 
            array (
                'id' => 17,
                'id_pembelian' => 8,
                'id_detail_barang' => 19,
                'jumlah' => 10,
                'harga' => 51000,
            ),
            17 => 
            array (
                'id' => 18,
                'id_pembelian' => 9,
                'id_detail_barang' => 19,
                'jumlah' => 10,
                'harga' => 51000,
            ),
            18 => 
            array (
                'id' => 19,
                'id_pembelian' => 10,
                'id_detail_barang' => 14,
                'jumlah' => 16,
                'harga' => 65000,
            ),
            19 => 
            array (
                'id' => 20,
                'id_pembelian' => 11,
                'id_detail_barang' => 11,
                'jumlah' => 6,
                'harga' => 55000,
            ),
            20 => 
            array (
                'id' => 21,
                'id_pembelian' => 12,
                'id_detail_barang' => 1,
                'jumlah' => 10,
                'harga' => 50000,
            ),
        ));
        
        
    }
}