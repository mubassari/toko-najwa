<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DetailBarangTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        \DB::table('detail_barang')->delete();

        \DB::table('detail_barang')->insert(array (
            0 =>
            array (
                'id' => 1,
                'kode' => 1,
                'nama' => 'Lengan Panjang No 8',
                'id_barang' => 1,
                'id_supplier' => 5,
                'stok' => 16,
                'stok_min' => 1,
                'harga' => 50000,
                'restok' => 1,
            ),
            1 =>
            array (
                'id' => 2,
                'kode' => 2,
                'nama' => 'Lengan Panjang No 9',
                'id_barang' => 1,
                'id_supplier' => 1,
                'stok' => 1,
                'stok_min' => 3,
                'harga' => 50000,
                'restok' => 1,
            ),
            2 =>
            array (
                'id' => 3,
                'kode' => 3,
                'nama' => 'SMP/SMA Ukuran S',
                'id_barang' => 1,
                'id_supplier' => 1,
                'stok' => 8,
                'stok_min' => 2,
                'harga' => 50000,
                'restok' => 1,
            ),
            3 =>
            array (
                'id' => 4,
                'kode' => 4,
                'nama' => 'SMP/SMA Ukuran M',
                'id_barang' => 1,
                'id_supplier' => 1,
                'stok' => 9,
                'stok_min' => 2,
                'harga' => 51000,
                'restok' => 1,
            ),
            4 =>
            array (
                'id' => 5,
                'kode' => 5,
                'nama' => 'SMP/SMA Ukuran L',
                'id_barang' => 1,
                'id_supplier' => 1,
                'stok' => 11,
                'stok_min' => 2,
                'harga' => 51000,
                'restok' => 1,
            ),
            5 =>
            array (
                'id' => 6,
                'kode' => 6,
                'nama' => 'SMP/SMA Ukuran XL',
                'id_barang' => 1,
                'id_supplier' => 1,
                'stok' => 5,
                'stok_min' => 2,
                'harga' => 55000,
                'restok' => 0,
            ),
            6 =>
            array (
                'id' => 7,
                'kode' => 1,
                'nama' => 'Lengan Panjang No 7',
                'id_barang' => 2,
                'id_supplier' => 4,
                'stok' => 17,
                'stok_min' => 2,
                'harga' => 50000,
                'restok' => 1,
            ),
            7 =>
            array (
                'id' => 8,
                'kode' => 2,
                'nama' => 'Lengan Panjang No 9',
                'id_barang' => 2,
                'id_supplier' => 4,
                'stok' => 1,
                'stok_min' => 3,
                'harga' => 50000,
                'restok' => 1,
            ),
            8 =>
            array (
                'id' => 9,
                'kode' => 1,
                'nama' => 'Ukuran 8',
                'id_barang' => 3,
                'id_supplier' => 2,
                'stok' => 3,
                'stok_min' => 1,
                'harga' => 46000,
                'restok' => 1,
            ),
            9 =>
            array (
                'id' => 10,
                'kode' => 2,
                'nama' => 'Ukuran 9',
                'id_barang' => 3,
                'id_supplier' => 2,
                'stok' => 3,
                'stok_min' => 1,
                'harga' => 46000,
                'restok' => 1,
            ),
            10 =>
            array (
                'id' => 11,
                'kode' => 3,
                'nama' => 'Ukuran 10',
                'id_barang' => 3,
                'id_supplier' => 3,
                'stok' => 5,
                'stok_min' => 3,
                'harga' => 55000,
                'restok' => 1,
            ),
            11 =>
            array (
                'id' => 12,
                'kode' => 4,
                'nama' => 'Ukuran 11',
                'id_barang' => 3,
                'id_supplier' => 2,
                'stok' => 2,
                'stok_min' => 1,
                'harga' => 75000,
                'restok' => 0,
            ),
            12 =>
            array (
                'id' => 13,
                'kode' => 5,
                'nama' => 'Ukuran 12',
                'id_barang' => 3,
                'id_supplier' => 5,
                'stok' => 4,
                'stok_min' => 4,
                'harga' => 50000,
                'restok' => 0,
            ),
            13 =>
            array (
                'id' => 14,
                'kode' => 1,
                'nama' => 'Ukuran Standar',
                'id_barang' => 4,
                'id_supplier' => 3,
                'stok' => 28,
                'stok_min' => 3,
                'harga' => 65000,
                'restok' => 1,
            ),
            14 =>
            array (
                'id' => 15,
                'kode' => 2,
                'nama' => 'Ukuran Jumbo',
                'id_barang' => 4,
                'id_supplier' => 3,
                'stok' => 15,
                'stok_min' => 3,
                'harga' => 60000,
                'restok' => 1,
            ),
            15 =>
            array (
                'id' => 16,
                'kode' => 1,
                'nama' => 'Panjang Nomor 4',
                'id_barang' => 5,
                'id_supplier' => 4,
                'stok' => 10,
                'stok_min' => 2,
                'harga' => 50000,
                'restok' => 1,
            ),
            16 =>
            array (
                'id' => 17,
                'kode' => 2,
                'nama' => 'Panjang Nomor 6',
                'id_barang' => 5,
                'id_supplier' => 3,
                'stok' => 15,
                'stok_min' => 2,
                'harga' => 50000,
                'restok' => 1,
            ),
            17 =>
            array (
                'id' => 18,
                'kode' => 3,
                'nama' => 'Panjang Nomor 7',
                'id_barang' => 5,
                'id_supplier' => 4,
                'stok' => 16,
                'stok_min' => 2,
                'harga' => 54000,
                'restok' => 1,
            ),
            18 =>
            array (
                'id' => 19,
                'kode' => 4,
                'nama' => 'Panjang Nomor 8',
                'id_barang' => 5,
                'id_supplier' => 5,
                'stok' => 35,
                'stok_min' => 4,
                'harga' => 51000,
                'restok' => 1,
            ),
            19 =>
            array (
                'id' => 20,
                'kode' => 5,
                'nama' => 'Panjang Nomor 9',
                'id_barang' => 5,
                'id_supplier' => 4,
                'stok' => 17,
                'stok_min' => 2,
                'harga' => 55000,
                'restok' => 0,
            ),
            20 =>
            array (
                'id' => 21,
                'kode' => 1,
                'nama' => 'Nomor 9',
                'id_barang' => 6,
                'id_supplier' => 3,
                'stok' => 10,
                'stok_min' => 2,
                'harga' => 50000,
                'restok' => 0,
            ),
            21 =>
            array (
                'id' => 22,
                'kode' => 2,
                'nama' => 'Nomor 10',
                'id_barang' => 6,
                'id_supplier' => 4,
                'stok' => 3,
                'stok_min' => 4,
                'harga' => 45000,
                'restok' => 1,
            ),
            22 =>
            array (
                'id' => 23,
                'kode' => 3,
                'nama' => 'Ukuran 11',
                'id_barang' => 6,
                'id_supplier' => 3,
                'stok' => 10,
                'stok_min' => 2,
                'harga' => 51000,
                'restok' => 1,
            ),
            23 =>
            array (
                'id' => 24,
                'kode' => 6,
                'nama' => 'Ukuran 6',
                'id_barang' => 3,
                'id_supplier' => 5,
                'stok' => 0,
                'stok_min' => 1,
                'harga' => 45000,
                'restok' => 1,
            ),
        ));


    }
}
