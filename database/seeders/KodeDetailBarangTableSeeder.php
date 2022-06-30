<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class KodeDetailBarangTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('kode_detail_barang')->delete();

        \DB::table('kode_detail_barang')->insert(array (
            0 =>
            array (
                'id' => 1,
                'id_barang' => 1,
                'kode_terakhir' => 6,
            ),
            1 =>
            array (
                'id' => 2,
                'id_barang' => 2,
                'kode_terakhir' => 2,
            ),
            2 =>
            array (
                'id' => 3,
                'id_barang' => 3,
                'kode_terakhir' => 6,
            ),
            3 =>
            array (
                'id' => 4,
                'id_barang' => 4,
                'kode_terakhir' => 2,
            ),
            4 =>
            array (
                'id' => 5,
                'id_barang' => 5,
                'kode_terakhir' => 5,
            ),
            5 =>
            array (
                'id' => 6,
                'id_barang' => 6,
                'kode_terakhir' => 3,
            ),
        ));
    }
}
