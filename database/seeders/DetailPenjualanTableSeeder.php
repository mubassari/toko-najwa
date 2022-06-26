<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DetailPenjualanTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('detail_penjualan')->delete();
        
        \DB::table('detail_penjualan')->insert(array (
            0 => 
            array (
                'id' => 1,
                'id_penjualan' => 1,
                'id_detail_barang' => 3,
                'jumlah' => 1,
            ),
            1 => 
            array (
                'id' => 2,
                'id_penjualan' => 1,
                'id_detail_barang' => 18,
                'jumlah' => 1,
            ),
            2 => 
            array (
                'id' => 3,
                'id_penjualan' => 2,
                'id_detail_barang' => 8,
                'jumlah' => 1,
            ),
            3 => 
            array (
                'id' => 4,
                'id_penjualan' => 2,
                'id_detail_barang' => 22,
                'jumlah' => 2,
            ),
            4 => 
            array (
                'id' => 5,
                'id_penjualan' => 3,
                'id_detail_barang' => 11,
                'jumlah' => 1,
            ),
            5 => 
            array (
                'id' => 6,
                'id_penjualan' => 3,
                'id_detail_barang' => 13,
                'jumlah' => 1,
            ),
            6 => 
            array (
                'id' => 7,
                'id_penjualan' => 4,
                'id_detail_barang' => 14,
                'jumlah' => 2,
            ),
            7 => 
            array (
                'id' => 8,
                'id_penjualan' => 5,
                'id_detail_barang' => 17,
                'jumlah' => 2,
            ),
            8 => 
            array (
                'id' => 9,
                'id_penjualan' => 6,
                'id_detail_barang' => 11,
                'jumlah' => 2,
            ),
            9 => 
            array (
                'id' => 10,
                'id_penjualan' => 7,
                'id_detail_barang' => 14,
                'jumlah' => 1,
            ),
            10 => 
            array (
                'id' => 11,
                'id_penjualan' => 19,
                'id_detail_barang' => 11,
                'jumlah' => 1,
            ),
            11 => 
            array (
                'id' => 12,
                'id_penjualan' => 20,
                'id_detail_barang' => 11,
                'jumlah' => 2,
            ),
            12 => 
            array (
                'id' => 13,
                'id_penjualan' => 20,
                'id_detail_barang' => 4,
                'jumlah' => 1,
            ),
            13 => 
            array (
                'id' => 14,
                'id_penjualan' => 21,
                'id_detail_barang' => 8,
                'jumlah' => 1,
            ),
            14 => 
            array (
                'id' => 15,
                'id_penjualan' => 21,
                'id_detail_barang' => 11,
                'jumlah' => 1,
            ),
            15 => 
            array (
                'id' => 16,
                'id_penjualan' => 21,
                'id_detail_barang' => 2,
                'jumlah' => 1,
            ),
            16 => 
            array (
                'id' => 17,
                'id_penjualan' => 21,
                'id_detail_barang' => 19,
                'jumlah' => 2,
            ),
        ));
        
        
    }
}