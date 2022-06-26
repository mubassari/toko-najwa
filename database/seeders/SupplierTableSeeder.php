<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SupplierTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('supplier')->delete();
        
        \DB::table('supplier')->insert(array (
            0 => 
            array (
                'id' => 1,
                'nama' => 'Rahayu Collection',
                'alamat' => 'Jl. Poros L2 Blok D No 4 Tenggarong Seberang',
                'no_telp' => 81336589950,
            ),
            1 => 
            array (
                'id' => 2,
                'nama' => 'Toko Al-Bahagia',
                'alamat' => 'Bangunan Tahap III Lantai Dasar No 11-12-13A Pasar Pagi Samarinda',
                'no_telp' => 85350526467,
            ),
            2 => 
            array (
                'id' => 3,
                'nama' => 'Toko JUKI',
                'alamat' => 'Pasar Pagi Lantai Dasar Tahap II No.31 Samarinda',
                'no_telp' => 5417777493,
            ),
            3 => 
            array (
                'id' => 4,
                'nama' => 'UD. Junaidi',
                'alamat' => 'Jl. Abdullah Marisi No.80-83 Samarinda',
                'no_telp' => 541732507,
            ),
            4 => 
            array (
                'id' => 5,
                'nama' => 'Lux\'s Mode Central',
                'alamat' => 'Jl. Mas Tumenggung No B.01, B.04, B.05 Pasar Pagi Samarinda',
                'no_telp' => 81348633961,
            ),
        ));
        
        
    }
}