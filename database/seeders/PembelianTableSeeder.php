<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PembelianTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('pembelian')->delete();
        
        \DB::table('pembelian')->insert(array (
            0 => 
            array (
                'id' => 1,
                'no_nota' => 'RC421',
                'id_supplier' => 1,
                'tanggal' => '2022-06-20 21:20:19',
            ),
            1 => 
            array (
                'id' => 2,
                'no_nota' => 'LUX2693',
                'id_supplier' => 5,
                'tanggal' => '2022-06-20 21:23:40',
            ),
            2 => 
            array (
                'id' => 3,
                'no_nota' => 'JUK2435',
                'id_supplier' => 3,
                'tanggal' => '2022-06-20 21:26:50',
            ),
            3 => 
            array (
                'id' => 4,
                'no_nota' => 'JN341',
                'id_supplier' => 4,
                'tanggal' => '2022-06-20 21:28:50',
            ),
            4 => 
            array (
                'id' => 5,
                'no_nota' => 'JN412',
                'id_supplier' => 4,
                'tanggal' => '2022-06-21 17:51:05',
            ),
            5 => 
            array (
                'id' => 6,
                'no_nota' => 'JUK352',
                'id_supplier' => 3,
                'tanggal' => '2022-06-22 17:09:11',
            ),
            6 => 
            array (
                'id' => 7,
                'no_nota' => 'JUK669',
                'id_supplier' => 3,
                'tanggal' => '2022-06-22 17:10:41',
            ),
            7 => 
            array (
                'id' => 8,
                'no_nota' => 'LUX3359',
                'id_supplier' => 5,
                'tanggal' => '2022-06-22 17:11:12',
            ),
            8 => 
            array (
                'id' => 9,
                'no_nota' => 'LUX700',
                'id_supplier' => 5,
                'tanggal' => '2022-06-22 17:12:52',
            ),
            9 => 
            array (
                'id' => 10,
                'no_nota' => 'JUK235',
                'id_supplier' => 3,
                'tanggal' => '2022-06-22 17:13:38',
            ),
            10 => 
            array (
                'id' => 11,
                'no_nota' => 'JUK724',
                'id_supplier' => 3,
                'tanggal' => '2022-06-22 17:14:05',
            ),
            11 => 
            array (
                'id' => 12,
                'no_nota' => 'LUX4001',
                'id_supplier' => 5,
                'tanggal' => '2022-06-22 17:15:44',
            ),
        ));
        
        
    }
}