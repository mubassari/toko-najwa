@extends('layouts.report')

@section('title', strtoupper($title))

@section('filter')
    <tr>
        <th>Filter</th>
        <th>:</th>
        <td>{{ ucwords($filter) }}</td>
    </tr>
@endsection

@section('table')
    <thead>
        <tr>
            <th style="width: 3%">No</th>
            <th style="width: 10%">Tanggal</th>
            <th style="width: 6%">Nomor Nota</th>
            <th style="width: 9%">Supplier</th>
            <th style="width: 9%">Kategori</th>
            <th style="width: 12%">Nama Barang</th>
            <th style="width: 20%">Detail Barang</th>
            <th style="width: 4%">Jumlah</th>
            <th style="width: 4%">Satuan</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($datas as $data)
            <tr>
                <th scope="row">{{ $index = $loop->iteration }}</th>
                @php
                    echo \Helper::getRowspan($datas, 'tanggal', $data['tanggal'], $index);
                    echo \Helper::getRowspan($datas, 'no_nota', $data['no_nota'], $index);
                    echo \Helper::getRowspan($datas, 'supplier', $data['supplier'], $index, 'no_nota');
                @endphp
                <td>{{ $data['kategori_barang'] }}</td>
                <td>{{ $data['nama_barang'] }}</td>
                <td>{{ $data['detail_barang'] }}</td>
                <td>{{ $data['jumlah'] }}</td>
                <td>{{ $data['satuan'] }}</td>
            </tr>
        @endforeach
        @if (count($datas) == 0)
            <tr>
                <td style="font-style: italic" colspan="9">Tidak Ada Data</td>
            </tr>
        @endif
    </tbody>
    </table>
@endsection
