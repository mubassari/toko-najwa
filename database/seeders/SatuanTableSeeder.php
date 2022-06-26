<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SatuanTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('satuan')->delete();
        
        \DB::table('satuan')->insert(array (
            0 => 
            array (
                'id' => 1,
                'nama' => 'Buah',
            ),
            1 => 
            array (
                'id' => 2,
                'nama' => 'Kotak',
            ),
            2 => 
            array (
                'id' => 3,
                'nama' => 'Lembar',
            ),
            3 => 
            array (
                'id' => 4,
                'nama' => 'Pasang',
            ),
            4 => 
            array (
                'id' => 5,
                'nama' => 'Set',
            ),
        ));
        
        
    }
}