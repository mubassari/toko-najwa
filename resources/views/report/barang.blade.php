@extends('layouts.report')

@section('title', strtoupper($title))

@section('filter')
    @if (is_array($filter))
        @foreach ($filter as $key => $value)
            <tr>
                <th>{{ ucwords($key) }}</th>
                <th>:</th>
                <td>{{ ucwords($value) }}</td>
            </tr>
        @endforeach
    @else
        <tr>
            <th>Filter</th>
            <th>:</th>
            <td>{{ ucwords($filter) }}</td>
        </tr>
    @endif
@endsection

@section('table')
    <thead>
        @if ($type == 'restok' || $type == 'tidak-restok')
            <tr>
                <th style="width: 3%">No</th>
                <th style="width: 9%">Kategori</th>
                <th style="width: 16%">Nama Barang</th>
                <th style="width: 8%">Kode Barang</th>
                <th style="width: 16%">Detail Barang</th>
                <th style="width: 3%">Sisa Stok</th>
                <th style="width: 5%">Satuan</th>
                <th style="width: 9%">Supplier Terakhir</th>
                <th style="width: 9%">Pembelian Terakhir</th>
                @if ($type == 'tidak-restok')
                    <th style="width: 9%">Penjualan Terakhir</th>
                @endif
            </tr>
        @else
            <tr>
                <th rowspan="2" style="width: 3%">No</th>
                @if (!str_starts_with($filter, 'Kategori'))
                    <th rowspan="2" style="width: 10%">Kategori</th>
                @endif
                <th rowspan="2" style="width: 16%">Nama Barang</th>
                <th rowspan="2" style="width: 8%">Kode Barang</th>
                <th rowspan="2" style="width: 18%">Detail Barang</th>
                <th rowspan="2" style="width: 3%">Jumlah Stok</th>
                <th rowspan="2" style="width: 5%">Satuan</th>
                <th rowspan="2" style="width: 10%">Supplier Terakhir</th>
                <th colspan="2">Transaksi 3 Bulan Terakhir</th>
                <th rowspan="2" style="width: 9%">Status</th>
            </tr>
            <tr>
                <th style="width: 9%">Pembelian</th>
                <th style="width: 9%">Penjualan</th>
            </tr>
        @endif
    </thead>
    <tbody>
        @foreach ($datas as $data)
            @if ($type == 'restok' || $type == 'tidak-restok')
                <tr>
                    <th scope="row">{{ $index = $loop->iteration }}</th>
                    @php
                        echo \Helper::getRowspan($datas, 'kategori', $data['kategori'], $index);
                        echo \Helper::getRowspan($datas, 'nama', $data['nama'], $index);
                    @endphp
                    <td>{{ $data['kode'] }}</td>
                    <td>{{ $data['nama_detail'] }}</td>
                    <td>{{ $data['stok'] }}</td>
                    <td>{{ $data['satuan'] }}</td>
                    <td>{{ $data['supplier'] }}</td>
                    <td>{{ $data['beli_terakhir'] }}</td>
                    @if ($type == 'tidak-restok')
                        <td>{{ $data['jual_terakhir'] }}</td>
                    @endif
                </tr>
            @else
                <tr>
                    <th scope="row">{{ $index = $loop->iteration }}</th>
                    @php
                        if (!str_starts_with($filter, 'Kategori')) {
                            echo \Helper::getRowspan($datas, 'kategori', $data['kategori'], $index);
                        }
                        echo \Helper::getRowspan($datas, 'nama', $data['nama'], $index);
                    @endphp
                    <td>{{ $data['kode'] }}</td>
                    <td>{{ $data['nama_detail'] }}</td>
                    <td>{{ $data['stok'] }}</td>
                    <td>{{ $data['satuan'] }}</td>
                    <td>{{ $data['supplier'] }}</td>
                    <td>{{ $data['jumlah_beli'] }} Kali</td>
                    <td>{{ $data['jumlah_jual'] }} Kali</td>
                    <td>{{ $data['status'] }}</td>
                </tr>
            @endif
        @endforeach
        @if (count($datas) == 0)
            <tr>
                @if ($type == 'restok')
                    <td style="font-style: italic" colspan="9">Tidak Ada Data</td>
                @elseif ($type == 'tidak-restok')
                    <td style="font-style: italic" colspan="10">Tidak Ada Data</td>
                @else
                    <td style="font-style: italic" colspan="11">Tidak Ada Data</td>
                @endif
            </tr>
        @endif
    </tbody>
@endsection
