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
                <th style="width: 9%">Nomor Nota</th>
                <th style="width: 16%">Supplier</th>
                <th style="width: 3%">Jumlah</th>
                <th style="width: 3%">Dikembalikan</th>
                <th style="width: 5%">Satuan</th>
                <th style="width: 9%">Harga Satuan</th>
                <th style="width: 9%">Total</th>
            </tr>
        @elseif ($type == 'supplier')
            <tr>
                <th style="width: 3%">No</th>
                <th style="width: 6%">Tanggal</th>
                <th style="width: 9%">Nomor Nota</th>
                <th style="width: 9%">Kategori</th>
                <th style="width: 16%">Nama Barang</th>
                <th style="width: 16%">Detail Barang</th>
                <th style="width: 3%">Jumlah</th>
                <th style="width: 3%">Dikembalikan</th>
                <th style="width: 5%">Satuan</th>
                <th style="width: 9%">Harga Satuan</th>
                <th style="width: 9%">Total</th>
            </tr>
        @else
            <tr>
                <th style="width: 3%">No</th>
                <th style="width: 3%">Tanggal</th>
                <th style="width: 3%">Nomor Nota</th>
                <th style="width: 9%">Supplier</th>
                <th style="width: 9%">Kategori</th>
                <th style="width: 16%">Nama Barang</th>
                <th style="width: 6%">Kode Barang</th>
                <th style="width: 20%">Detail Barang</th>
                <th style="width: 3%">Jumlah</th>
                <th style="width: 3%">Dikembalikan</th>
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
                        echo \Helper::getRowspan($datas, 'no_nota', $data['no_nota'], $index);
                    @endphp
                    <td>{{ $data['supplier'] }}</td>
                    <td>{{ $data['jumlah'] }}</td>
                    <td>{{ $data['kembali'] }}</td>
                    <td>{{ $data['satuan'] }}</td>
                    <td>{{ $data['harga'] }}</td>
                    <td>{{ $data['total'] }}</td>
                </tr>
            @elseif ($type == 'supplier')
                <tr>
                    <th scope="row">{{ $index = $loop->iteration }}</th>
                    @php
                        echo \Helper::getRowspan($datas, 'tanggal', $data['tanggal'], $index);
                        echo \Helper::getRowspan($datas, 'no_nota', $data['no_nota'], $index);
                    @endphp
                    <td>{{ $data['kategori'] }}</td>
                    <td>{{ $data['nama_barang'] }}</td>
                    <td>{{ $data['nama_detail'] }}</td>
                    <td>{{ $data['jumlah'] }}</td>
                    <td>{{ $data['kembali'] }}</td>
                    <td>{{ $data['satuan'] }}</td>
                    <td>{{ $data['harga'] }}</td>
                    <td>{{ $data['total'] }}</td>
                </tr>
            @else
                <tr>
                    <th scope="row">{{ $index = $loop->iteration }}</th>
                    @php
                        echo \Helper::getRowspan($datas, 'tanggal', $data['tanggal'], $index);
                        echo \Helper::getRowspan($datas, 'no_nota', $data['no_nota'], $index);
                        echo \Helper::getRowspan($datas, 'supplier', $data['supplier'], $index, 'no_nota');
                    @endphp
                    <td>{{ $data['kategori'] }}</td>
                    <td>{{ $data['nama_barang'] }}</td>
                    <td>{{ $data['kode_barang'] }}</td>
                    <td>{{ $data['nama_detail'] }}</td>
                    <td>{{ $data['jumlah'] }}</td>
                    <td>{{ $data['kembali'] }}</td>
                    <td>{{ $data['satuan'] }}</td>
                    <td>{{ $data['harga'] }}</td>
                    <td>{{ $data['total'] }}</td>
                </tr>
            @endif
        @endforeach
        @if (count($datas) == 0)
            <tr>
                @if ($type == 'barang')
                    <td style="font-style: italic" colspan="9">Tidak Ada Data</td>
                @elseif ($type == 'supplier')
                    <td style="font-style: italic" colspan="11">Tidak Ada Data</td>
                @else
                    <td style="font-style: italic" colspan="13">Tidak Ada Data</td>
                @endif
            </tr>
        @endif
    </tbody>
    </table>
@endsection
