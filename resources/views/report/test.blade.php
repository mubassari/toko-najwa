@extends('layouts.report')

@section('title', strtoupper('Laporan abc'))

@section('filter')
    <tr>
        <th>Filter</th>
        <th>:</th>
        <td>a</td>
    </tr>
@endsection

@section('table')
    <thead>
        <tr>
            <th style="width: 5%">No</th>
            <th style="width: 10%">NIM</th>
            <th style="width: 25%">(data.tgl_surat) }}</th>
            <th style="width: 25%">(data.tgl_terima) }}</th>
            <th style="width: 15%">data.pengirim }}</th>
            <th style="width: 20%">data.perihal }}</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($datas as $data)
            <tr>
                <th scope="row">{{ $index = $loop->iteration }}</th>
                <td>{{ $data['nama'] }}</td>
                @php
                    echo \Helper::getRowspan($datas, 'nama', $data['nama'], $index);
                @endphp
                <td>{{ 'a' }}</td>
                <td>{{ $datas->toArray()[$index - 2]['nama'] ?? '' }}</td>
                <td>{{ $datas->toArray()[$index]['nama'] ?? '' }}</td>
            </tr>
        @endforeach
    </tbody>
@endsection
