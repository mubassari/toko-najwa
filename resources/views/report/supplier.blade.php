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
        <tr>
            <th style="width: 3%">No</th>
            <th style="width: 15%">Nama</th>
            <th style="width: 30%">Alamat</th>
            <th style="width: 10%">Nomor Telepon</th>
            <th style="width: 10%">Total Barang</th>
            <th style="width: 10%">Jumlah Pembelian (6 Bulan Terakhir)</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($datas as $data)
            <tr>
                <th scope="row">{{ $index = $loop->iteration }}</th>
                <td>{{ $data['nama'] }}</td>
                <td>{{ $data['alamat'] }}</td>
                <td>0{{ $data['no_telp'] }}</td>
                <td>{{ $data['total_barang'] }} Barang</td>
                <td>{{ $data['jumlah_beli'] }} Kali</td>
            </tr>
        @endforeach
    </tbody>
@endsection
