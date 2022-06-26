<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class KategoriTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        \DB::table('kategori')->delete();

        \DB::table('kategori')->insert(array (
            0 =>
            array (
                'id' => 1,
                'kode' => 'SRG',
                'nama' => 'Pakaian Seragam',
            ),
            1 =>
            array (
                'id' => 2,
                'kode' => 'MSL',
                'nama' => 'Pakaian Muslim',
            ),
            2 =>
            array (
                'id' => 3,
                'kode' => 'KMJ',
                'nama' => 'Kemeja',
            ),
            3 =>
            array (
                'id' => 4,
                'kode' => 'KWS',
                'nama' => 'Kaos',
            ),
            4 =>
            array (
                'id' => 5,
                'kode' => 'SHO',
                'nama' => 'Peralatan Sholat',
            ),
            5 =>
            array (
                'id' => 6,
                'kode' => 'BYI',
                'nama' => 'Baju Bayi',
            ),
            6 =>
            array (
                'id' => 7,
                'kode' => 'ANK',
                'nama' => 'Pakaian Anak',
            ),
            7 =>
            array (
                'id' => 8,
                'kode' => 'DWS',
                'nama' => 'Pakaian Dewasa',
            ),
        ));


    }
}
