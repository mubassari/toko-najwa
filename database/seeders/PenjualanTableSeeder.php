<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PenjualanTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('penjualan')->delete();
        
        \DB::table('penjualan')->insert(array (
            0 => 
            array (
                'id' => 1,
                'tanggal' => '2022-06-20 10:20:25',
            ),
            1 => 
            array (
                'id' => 2,
                'tanggal' => '2022-06-20 11:29:22',
            ),
            2 => 
            array (
                'id' => 3,
                'tanggal' => '2022-06-20 11:46:52',
            ),
            3 => 
            array (
                'id' => 4,
                'tanggal' => '2022-06-20 12:47:23',
            ),
            4 => 
            array (
                'id' => 5,
                'tanggal' => '2022-06-20 13:53:05',
            ),
            5 => 
            array (
                'id' => 6,
                'tanggal' => '2022-06-21 09:25:25',
            ),
            6 => 
            array (
                'id' => 7,
                'tanggal' => '2022-06-21 11:26:33',
            ),
            7 => 
            array (
                'id' => 19,
                'tanggal' => '2022-06-22 09:16:23',
            ),
            8 => 
            array (
                'id' => 20,
                'tanggal' => '2022-06-22 12:16:44',
            ),
            9 => 
            array (
                'id' => 21,
                'tanggal' => '2022-06-22 14:17:30',
            ),
        ));
        
        
    }
}