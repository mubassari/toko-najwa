<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class BarangTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        \DB::table('barang')->delete();

        \DB::table('barang')->insert(array (
            0 =>
            array (
                'id' => 1,
                'kode' => 'BPP',
                'nama' => 'Baju Putih Pelajar',
                'id_kategori' => 1,
                'id_satuan' => 3,
            ),
            1 =>
            array (
                'id' => 2,
                'kode' => 'BPA',
                'nama' => 'Baju Pramuka Anzas',
                'id_kategori' => 1,
                'id_satuan' => 3,
            ),
            2 =>
            array (
                'id' => 3,
                'kode' => 'GDR',
                'nama' => 'Gamis Al-Dirham',
                'id_kategori' => 2,
                'id_satuan' => 3,
            ),
            3 =>
            array (
                'id' => 4,
                'kode' => 'DKT',
                'nama' => 'Daster Katun',
                'id_kategori' => 8,
                'id_satuan' => 3,
            ),
            4 =>
            array (
                'id' => 5,
                'kode' => 'CMS',
                'nama' => 'Celana Merah SD',
                'id_kategori' => 1,
                'id_satuan' => 3,
            ),
            5 =>
            array (
                'id' => 6,
                'kode' => 'CPR',
                'nama' => 'Celana Pramuka',
                'id_kategori' => 1,
                'id_satuan' => 3,
            ),
        ));


    }
}
