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
        @if ($type == 'barang')
            <tr>
                <th style="width: 3%">No</th>
                <th style="width: 6%">Tanggal</th>
                <th style="width: 9%">Kode Transaksi</th>
                <th style="width: 3%">Jumlah</th>
                <th style="width: 5%">Satuan</th>
                <th style="width: 9%">Harga Satuan</th>
                <th style="width: 9%">Total</th>
            </tr>
        @else
            <tr>
                <th style="width: 3%">No</th>
                <th style="width: 3%">
                    @if ($type == 'harian')
                        Waktu
                    @else
                        Tanggal
                    @endif
                </th>
                <th style="width: 8%">Kode Transaksi</th>
                <th style="width: 9%">Kategori</th>
                <th style="width: 16%">Nama Barang</th>
                <th style="width: 18%">Detail Barang</th>
                <th style="width: 3%">Jumlah</th>
                <th style="width: 5%">Satuan</th>
                <th style="width: 9%">Harga Satuan</th>
                <th style="width: 9%">Total</th>
            </tr>
        @endif
    </thead>
    <tbody>
        @foreach ($datas as $data)
            @if ($type == 'barang')
                <tr>
                    <th scope="row">{{ $index = $loop->iteration }}</th>
                    @php
                        echo \Helper::getRowspan($datas, 'tanggal', $data['tanggal'], $index);
                        echo \Helper::getRowspan($datas, 'kode', $data['kode'], $index);
                    @endphp
                    <td>{{ $data['jumlah'] }}</td>
                    <td>{{ $data['satuan'] }}</td>
                    <td>{{ $data['harga'] }}</td>
                    <td>{{ $data['total'] }}</td>
                </tr>
            @else
                <tr>
                    <th scope="row">{{ $index = $loop->iteration }}</th>
                    @php
                        if ($type == 'harian') {
                            echo \Helper::getRowspan($datas, 'waktu', $data['waktu'], $index);
                        } else {
                            echo \Helper::getRowspan($datas, 'tanggal', $data['tanggal'], $index);
                        }
                        echo \Helper::getRowspan($datas, 'kode', $data['kode'], $index);
                    @endphp
                    <td>{{ $data['kategori'] }}</td>
                    <td>{{ $data['nama_barang'] }}</td>
                    <td>{{ $data['nama_detail'] }}</td>
                    <td>{{ $data['jumlah'] }}</td>
                    <td>{{ $data['satuan'] }}</td>
                    <td>{{ $data['harga'] }}</td>
                    <td>{{ $data['total'] }}</td>
                </tr>
            @endif
        @endforeach
        @if (count($datas) == 0)
            <tr>
                @if ($type == 'barang')
                    <td style="font-style: italic" colspan="7">Tidak Ada Data</td>
                @else
                    <td style="font-style: italic" colspan="10">Tidak Ada Data</td>
                @endif
            </tr>
        @else
            <tr>
                @if ($type == 'barang')
                    <th colspan="6">Total</th>
                @else
                    <th colspan="9">Total</th>
                @endif
                <th>
                    {{ \Helper::formatCurrency(
                        $datas->reduce(function ($total, $item) {
                            return $total + $item['total_plain'];
                        }, 0),
                    ) }}
                </th>
            </tr>
        @endif
    </tbody>
    </table>
@endsection
