<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PengembalianTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('pengembalian')->delete();
        
        \DB::table('pengembalian')->insert(array (
            0 => 
            array (
                'id' => 1,
                'id_detail_pembelian' => 1,
                'jumlah' => 1,
            ),
            1 => 
            array (
                'id' => 2,
                'id_detail_pembelian' => 3,
                'jumlah' => 1,
            ),
            2 => 
            array (
                'id' => 3,
                'id_detail_pembelian' => 4,
                'jumlah' => 2,
            ),
            3 => 
            array (
                'id' => 4,
                'id_detail_pembelian' => 5,
                'jumlah' => 2,
            ),
            4 => 
            array (
                'id' => 5,
                'id_detail_pembelian' => 6,
                'jumlah' => 2,
            ),
            5 => 
            array (
                'id' => 6,
                'id_detail_pembelian' => 16,
                'jumlah' => 2,
            ),
            6 => 
            array (
                'id' => 7,
                'id_detail_pembelian' => 17,
                'jumlah' => 1,
            ),
            7 => 
            array (
                'id' => 8,
                'id_detail_pembelian' => 19,
                'jumlah' => 3,
            ),
            8 => 
            array (
                'id' => 9,
                'id_detail_pembelian' => 21,
                'jumlah' => 1,
            ),
        ));
        
        
    }
}