<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DetailBarang;
use App\Models\DetailPembelian;
use App\Models\Pengembalian;
use App\Models\DetailPenjualan;
use App\Models\Supplier;
use Carbon\Carbon;
use Barryvdh\DomPDF\Facade\Pdf;

class ReportController extends Controller
{

    private function sendDocument($document, $name = '', $caption = '') {
        $method = 'sendDocument';

        if (is_null($name) || $name == '') {
            $name = 'laporan_'.time();
        };

        $response = \Illuminate\Support\Facades\Http::attach(
            'document', $document->stream($name), $name
        )->post(env('TELEGRAM_BOT_URL').$method, [
            'chat_id' => env('TELEGRAM_CHAT_ID'),
            'caption' => $caption
        ]);

        $data = $response->json()['ok'] ? [
                'status'=> 'success',
                'message'=> 'Berhasil Mengirim ke Telegram',
            ] : [
                'status'=> 'danger',
                'message'=> 'Gagal Mengirim ke Telegram',
            ];

        return $data;
    }

    private function formatDate($time, $format = '') {
        $carbon = Carbon::parse($time)->locale('id')->settings(['formatFunction' => 'translatedFormat']);

        if ($format == 'date') {
            return $carbon->format('j F Y');
        } elseif ($format == 'time') {
            return $carbon->format('H:i');
        } else {
            return $carbon->format('j F Y H:i');
        }

    }

    private function formatCurrency($number) {
        $currency = new \NumberFormatter('id_ID', \NumberFormatter::CURRENCY);
        return $currency->format($number);
    }

    public function index(){
        return \Inertia\Inertia::render('Laporan/Index');
    }

    public function test(Request $request){

        $dd = $request->filter;
        $detail = DetailBarang::find($dd['barang']);
        $detail_position = $detail->Barang->DetailBarang->pluck('id')->search($dd['barang']);
        $id_detail = $detail->Barang->Kategori->kode.'/'.$detail->Barang->kode.'/'.\Str::padleft($detail_position, 3, 0);
        \Arr::set($dd, 'barang', $id_detail);
        $jual = \App\Models\Penjualan::whereDate('tanggal', date('d', strtotime($item->Penjualan->tanggal)))->get()->map(function($item){
            return $item->DetailPenjualan;
        })->flatten(1)->pluck('id')->search(1);
        dd($jual);
        $datas = collect([
            ['nama' => 'A'],
            ['nama' => 'A'],
            ['nama' => 'A'],
            ['nama' => 'B'],
            ['nama' => 'A'],
            ['nama' => 'A'],
            ['nama' => 'A'],
            ['nama' => 'A'],
            ['nama' => 'A'],
            ['nama' => 'B'],
            ['nama' => 'A'],
            ['nama' => 'A'],
            ['nama' => 'A'],
            ['nama' => 'B'],
            ['nama' => 'A'],
            ['nama' => 'A'],
            ['nama' => 'B'],
        ]);
        // Gunakan Request filter
        // {
        //     "filter": {
        // 	    "key": "value"
        //     }
        // }
        // Atau
        // { "filter": 'value'}

        // Gunakan Request telegram
        // { "telegram": true ATAU false }

        // Gunakan Request type
        // { "type": "value"}

        $title = 'Laporan Test';
        switch ($request->type) {
            case 'restok':
                $title .= ' Perlu Restok';
                break;
            case 'tidak-restok':
                $title .= ' Tidak Restok';
                break;
            default:
                $title .= '';
                break;
        }

        $pdf = PDF::loadview('report.test', [
            'datas' => $datas->values(),
            'filter'=> $request->filter,
            'type'  => $request->type,
            'title' => $title
        ])->setPaper('legal', 'landscape');

        $pdf_title = $title.'.pdf';

        if ($request->telegram) {
            $response = $this->sendDocument($pdf, $pdf_title);
            return response()->json(["status" => 200, "data"=> $response]);
        } else {
            return $pdf->stream($pdf_title);
            // return view('report.test', [
            //     'datas' => $datas->values(),
            //     'filter'=> $request->filter,
            //     'type'  => $request->type,
            //     'title' => $title
            // ]);
        }
    }
    // ->sortBy([
    //     fn ($a, $b) => $a->Barang->nama <=> $b->Barang->nama,
    //     fn ($a, $b) => $a->nama <=> $b->nama,
    // ])
    public function barang(Request $request){
        switch ($request->type) {
            case 'restok' || 'tidak-restok':
                $datas = DetailBarang::all()->sortBy([
                    fn ($a, $b) => $a->Barang->Kategori->nama <=> $b->Barang->Kategori->nama,
                    fn ($a, $b) => $a->Barang->nama <=> $b->Barang->nama,
                    fn ($a, $b) => $a->id <=> $b->id,
                ])->filter(function ($detail) use ($request) {
                    return $request->type == 'restok'
                                ? $detail->stok <= $detail->stok_min
                                : !$detail->restok;
                })->map(function ($item) {
                    $id_detail = $item->Barang->Kategori->kode.'/'.$item->Barang->kode.'/'.\Str::padleft($item->kode, 3, 0);
                    $beli_terakhir = $item->DetailPembelian->sortByDesc('id', SORT_NATURAL)->first();
                    $jual_terakhir = $item->DetailPenjualan->sortByDesc('id', SORT_NATURAL)->first();
                    return [
                        'kategori'      => $item->Barang->Kategori->nama,
                        'nama'          => $item->Barang->nama,
                        'kode'          => $id_detail,
                        'nama_detail'   => $item->nama,
                        'stok'          => $item->stok,
                        'satuan'        => $item->Barang->Satuan->nama,
                        'supplier'      => $item->Supplier->nama,
                        'beli_terakhir' => $beli_terakhir
                                            ? $this->formatDate($beli_terakhir->Pembelian->tanggal, 'date')
                                            : 'Tidak Ada',
                        'jual_terakhir' => $jual_terakhir
                                            ? $this->formatDate($jual_terakhir->Penjualan->tanggal, 'date')
                                            : 'Tidak Ada'
                    ];
                });
                break;

            default:
                $datas = DetailBarang::all()->sortBy([
                    fn ($a, $b) => $a->Barang->Kategori->nama <=> $b->Barang->Kategori->nama,
                    fn ($a, $b) => $a->Barang->nama <=> $b->Barang->nama,
                    fn ($a, $b) => $a->id <=> $b->id,
                ])->filter(function ($detail) use ($request) {
                    return $request->kategori > 0 ? $detail->Barang->Kategori->id == $request->kategori : true;
                })->map(function ($item) {
                    $id_detail = $item->Barang->Kategori->kode.'/'.$item->Barang->kode.'/'.\Str::padleft($item->kode, 3, 0);
                    $dateS = Carbon::now()->startOfMonth()->subMonth(3);
                    $dateE = Carbon::now();
                    return [
                        'kategori'    => $item->Barang->Kategori->nama,
                        'nama'        => $item->Barang->nama,
                        'kode'        => $id_detail,
                        'nama_detail' => $item->nama,
                        'stok'        => $item->stok,
                        'satuan'      => $item->Barang->Satuan->nama,
                        'supplier'    => $item->Supplier->nama,
                        'jumlah_beli' => $item->DetailPembelian->whereBetween('Pembelian.tanggal', [$dateS, $dateE])->count(),
                        'jumlah_jual' => $item->DetailPenjualan->whereBetween('Pembelian.tanggal', [$dateS, $dateE])->count(),
                        'status'      => $item->restok
                                            ? $item->stok <= $item->stok_min
                                                ? $item->stok == 0
                                                    ? 'Kosong'
                                                    : 'Perlu Restok'
                                                : 'Tersedia'
                                            : 'Tidak Restok'
                    ];
                });
                break;
        }
        $pdf = PDF::loadview('report.barang', [
            'datas' => $datas->values(),
            'filter'=> $request->filter,
            'type'  => $request->type,
            'title' => $request->title
        ])->setPaper('legal', 'landscape');

        $pdf_title = $request->title.'.pdf';

        if ($request->telegram == true) {
            $response = $this->sendDocument($pdf, $pdf_title);
            return redirect()->back()->with($response);
        } else {
            return $pdf->download($pdf_title);
        }
    }

    public function supplier(Request $request){

        $dateS = Carbon::now()->startOfMonth()->subMonth(6);
        $dateE = Carbon::now();

        $datas = Supplier::all()->map(function ($item) use ($dateS, $dateE) {
            return [
                'nama'         => $item->nama,
                'alamat'       => $item->alamat,
                'no_telp'      => $item->no_telp,
                'total_barang' => $item->DetailBarang->count(),
                'jumlah_beli'  => $item->Pembelian->whereBetween('tanggal', [$dateS, $dateE])->count()
            ];
        });

        $pdf = PDF::loadview('report.supplier', [
            'datas' => $datas->values(),
            'filter'=> $request->filter,
            'type'  => $request->type,
            'title' => $request->title
        ])->setPaper('legal', 'landscape');

        $pdf_title = $request->title.'.pdf';

        if ($request->telegram == true) {
            $response = $this->sendDocument($pdf, $pdf_title);
            return redirect()->back()->with($response);
        } else {
            return $pdf->download($pdf_title);
        }
    }

    public function pembelian(Request $request){
        switch ($request->type) {
            case 'barang':
                $datas = DetailPembelian::all()->filter(function ($data) use ($request) {
                    return explode('-', $data->Pembelian->tanggal)[1] == $request->month
                                && $data->DetailBarang->id == $request->barang;
                })->map(function($item) {
                    $kembali = $item->Pengembalian ? $item->Pengembalian->jumlah : 0;
                    return [
                        'tanggal'  => $this->formatDate($item->Pembelian->tanggal, 'date'),
                        'no_nota'  => $item->Pembelian->no_nota,
                        'supplier' => $item->Pembelian->Supplier->nama,
                        'jumlah'   => $item->jumlah,
                        'kembali'  => $kembali,
                        'satuan'   => $item->DetailBarang->Barang->Satuan->nama,
                        'harga'    => $this->formatCurrency($item->harga),
                        'total'    => $this->formatCurrency($item->harga * ($item->jumlah - $kembali)),
                        'total_plain' => $item->harga * ($item->jumlah - $kembali)
                    ];
                });
                break;

            case 'supplier':
                $datas = DetailPembelian::all()->filter(function ($data) use ($request) {
                    return $data->Pembelian->Supplier->id == $request->supplier;
                })->map(function($item) {
                    $kembali = $item->Pengembalian ? $item->Pengembalian->jumlah : 0;
                    return [
                        'tanggal'     => $this->formatDate($item->Pembelian->tanggal, 'date'),
                        'no_nota'     => $item->Pembelian->no_nota,
                        'nama_barang' => $item->DetailBarang->Barang->nama,
                        'kategori'    => $item->DetailBarang->Barang->Kategori->nama,
                        'nama_detail' => $item->DetailBarang->nama,
                        'jumlah'      => $item->jumlah,
                        'kembali'     => $kembali,
                        'satuan'      => $item->DetailBarang->Barang->Satuan->nama,
                        'harga'       => $this->formatCurrency($item->harga),
                        'total'       => $this->formatCurrency($item->harga * ($item->jumlah - $kembali)),
                        'total_plain' => $item->harga * ($item->jumlah - $kembali)
                    ];
                });
                break;

            default:
                $datas = DetailPembelian::all()->sortBy([
                    fn ($a, $b) => $a->Pembelian->tanggal <=> $b->Pembelian->tanggal,
                    fn ($a, $b) => $a->Pembelian->no_nota <=> $b->Pembelian->no_nota,
                    fn ($a, $b) => $a->DetailBarang->Barang->nama <=> $b->DetailBarang->Barang->nama,
                    fn ($a, $b) => $a->DetailBarang->id <=> $b->DetailBarang->id,
                ])->filter(function ($data) use ($request) {
                    return explode('-', $data->Pembelian->tanggal)[1] == $request->month;
                })->map(function($item) {
                    $id_detail = $item->DetailBarang->Barang->Kategori->kode.'/'.$item->DetailBarang->Barang->kode.'/'.\Str::padleft($item->DetailBarang->kode, 3, 0);
                    $kembali = $item->Pengembalian ? $item->Pengembalian->jumlah : 0;
                    return [
                        'tanggal'     => $this->formatDate($item->Pembelian->tanggal, 'date'),
                        'no_nota'     => $item->Pembelian->no_nota,
                        'kode_barang' => $id_detail,
                        'nama_barang' => $item->DetailBarang->Barang->nama,
                        'kategori'    => $item->DetailBarang->Barang->Kategori->nama,
                        'nama_detail' => $item->DetailBarang->nama,
                        'supplier'    => $item->Pembelian->Supplier->nama,
                        'jumlah'      => $item->jumlah,
                        'kembali'     => $kembali,
                        'satuan'      => $item->DetailBarang->Barang->Satuan->nama,
                        'harga'       => $this->formatCurrency($item->harga),
                        'total'       => $this->formatCurrency($item->harga * ($item->jumlah - $kembali)),
                        'total_plain' => $item->harga * ($item->jumlah - $kembali)
                    ];
                });
                break;
        }

        $filter = $request->filter;
        if ($request->type == 'barang'){
            $detail = DetailBarang::find($filter['Kode Barang']);
            $id_detail = $detail->Barang->Kategori->kode.'/'.$detail->Barang->kode.'/'.\Str::padleft($detail->kode, 3, 0);
            \Arr::set($filter, 'Kode Barang', $id_detail);
        }

        $pdf = PDF::loadview('report.pembelian', [
            'datas' => $datas->values(),
            'filter'=> $filter,
            'type'  => $request->type,
            'title' => $request->title
        ])->setPaper('legal', 'landscape');

        $pdf_title = $request->title.'.pdf';

        if ($request->telegram == true) {
            $response = $this->sendDocument($pdf, $pdf_title);
            return redirect()->back()->with($response);
        } else {
            return $pdf->download($pdf_title);
        }
    }

    public function pengembalian(Request $request){

        $datas = $datas = Pengembalian::all()->sortBy([
            fn ($a, $b) => $this->formatDate($a->DetailPembelian->Pembelian->tanggal, 'date') <=> $this->formatDate($b->DetailPembelian->Pembelian->tanggal, 'date'),
            fn ($a, $b) => $a->DetailPembelian->Pembelian->Supplier->nama <=> $b->DetailPembelian->Pembelian->Supplier->nama,
            fn ($a, $b) => $a->DetailPembelian->Pembelian->no_nota <=> $b->DetailPembelian->Pembelian->no_nota,
            fn ($a, $b) => $a->DetailPembelian->DetailBarang->Barang->Kategori->nama <=> $b->DetailPembelian->DetailBarang->Barang->Kategori->nama,
            fn ($a, $b) => $a->DetailPembelian->DetailBarang->Barang->nama <=> $b->DetailPembelian->DetailBarang->Barang->nama,
            fn ($a, $b) => $a->DetailPembelian->DetailBarang->nama <=> $b->DetailPembelian->DetailBarang->nama,
        ])->filter(function ($kembali) use ($request) {
            return $request->type == 'bulanan'
                        ? explode('-', $kembali->DetailPembelian->Pembelian->tanggal)[1] == $request->month
                        : true;
        })->map(function ($item) {
            return [
                'tanggal'         => $this->formatDate($item->DetailPembelian->Pembelian->tanggal, 'date'),
                'no_nota'         => $item->DetailPembelian->Pembelian->no_nota,
                'supplier'        => $item->DetailPembelian->Pembelian->Supplier->nama,
                'nama_barang'     => $item->DetailPembelian->DetailBarang->Barang->nama,
                'kategori_barang' => $item->DetailPembelian->DetailBarang->Barang->Kategori->nama,
                'detail_barang'   => $item->DetailPembelian->DetailBarang->nama,
                'jumlah'          => $item->jumlah,
                'satuan'          => $item->DetailPembelian->DetailBarang->Barang->Satuan->nama
            ];
        });

        $pdf = PDF::loadview('report.pengembalian', [
            'datas' => $datas->values(),
            'filter'=> $request->filter,
            'type'  => $request->type,
            'title' => $request->title
        ])->setPaper('legal', 'landscape');

        $pdf_title = $request->title.'.pdf';

        if ($request->telegram == true) {
            $response = $this->sendDocument($pdf, $pdf_title);
            return redirect()->back()->with($response);
        } else {
            return $pdf->download($pdf_title);
        }
    }

    public function penjualan(Request $request){
        switch ($request->type) {
            case 'barang':
                $datas = DetailPenjualan::all()->filter(function ($data) use ($request) {
                    return explode('-', $data->Penjualan->tanggal)[1] == $request->month
                                && $data->DetailBarang->id == $request->barang;
                })->map(function($item) {
                    $id_penjualan = \App\Models\Penjualan::whereDate('tanggal', '=', date('Y-m-d', strtotime($item->Penjualan->tanggal)))->get()->pluck('id')->search($item->Penjualan->id);
                    $kode = str_replace('-', '/', explode(' ', $item->Penjualan->tanggal)[0]).'/'.\Str::padleft($id_penjualan + 1, 3, 0);
                    return [
                        'tanggal'     => $this->formatDate($item->Penjualan->tanggal),
                        'kode'        => $kode,
                        'jumlah'      => $item->jumlah,
                        'satuan'      => $item->DetailBarang->Barang->Satuan->nama,
                        'harga'       => $this->formatCurrency($item->DetailBarang->harga),
                        'total'       => $this->formatCurrency($item->DetailBarang->harga * $item->jumlah),
                        'total_plain' => $item->DetailBarang->harga * $item->jumlah
                    ];
                });
                break;

            case 'harian':
                $datas = DetailPenjualan::all()->sortBy([
                    fn ($a, $b) => $a->Penjualan->tanggal <=> $b->Penjualan->tanggal,
                    fn ($a, $b) => $a->DetailBarang->Barang->Kategori->nama <=> $b->DetailBarang->Barang->Kategori->nama,
                    fn ($a, $b) => $a->DetailBarang->Barang->nama <=> $b->DetailBarang->Barang->nama,
                    fn ($a, $b) => $a->DetailBarang->Nama <=> $b->DetailBarang->Nama,
                ])->filter(function ($data) use ($request) {
                    return preg_split('/[-| ]/', $data->Penjualan->tanggal)[2] == $request->day;
                })->map(function($item) {
                    $id_penjualan = \App\Models\Penjualan::whereDate('tanggal', '=', date('Y-m-d', strtotime($item->Penjualan->tanggal)))->get()->pluck('id')->search($item->Penjualan->id);
                    $kode = str_replace('-', '/', explode(' ', $item->Penjualan->tanggal)[0]).'/'.\Str::padleft($id_penjualan + 1, 3, 0);
                    return [
                        'waktu'       => $this->formatDate($item->Penjualan->tanggal, 'time'),
                        'kode'        => $kode,
                        'nama_barang' => $item->DetailBarang->Barang->nama,
                        'kategori'    => $item->DetailBarang->Barang->Kategori->nama,
                        'nama_detail' => $item->DetailBarang->nama,
                        'jumlah'      => $item->jumlah,
                        'satuan'      => $item->DetailBarang->Barang->Satuan->nama,
                        'harga'       => $this->formatCurrency($item->DetailBarang->harga),
                        'total'       => $this->formatCurrency($item->DetailBarang->harga * $item->jumlah),
                        'total_plain' => $item->DetailBarang->harga * $item->jumlah
                    ];
                });
                break;

            default:
                $datas = DetailPenjualan::all()->sortBy([
                    fn ($a, $b) => $a->Penjualan->tanggal <=> $b->Penjualan->tanggal,
                    fn ($a, $b) => $a->DetailBarang->Barang->Kategori->nama <=> $b->DetailBarang->Barang->Kategori->nama,
                    fn ($a, $b) => $a->DetailBarang->Barang->nama <=> $b->DetailBarang->Barang->nama,
                    fn ($a, $b) => $a->DetailBarang->Nama <=> $b->DetailBarang->Nama,
                ])->filter(function ($data) use ($request) {
                    return explode('-', $data->Penjualan->tanggal)[1] == $request->month;
                })->map(function($item) {
                    $id_penjualan = \App\Models\Penjualan::whereDate('tanggal', '=', date('Y-m-d', strtotime($item->Penjualan->tanggal)))->get()->pluck('id')->search($item->Penjualan->id);
                    $kode = str_replace('-', '/', explode(' ', $item->Penjualan->tanggal)[0]).'/'.\Str::padleft($id_penjualan + 1, 3, 0);
                    return [
                        'tanggal'     => $this->formatDate($item->Penjualan->tanggal, 'date'),
                        'kode'        => $kode,
                        'nama_barang' => $item->DetailBarang->Barang->nama,
                        'kategori'    => $item->DetailBarang->Barang->Kategori->nama,
                        'nama_detail' => $item->DetailBarang->nama,
                        'jumlah'      => $item->jumlah,
                        'satuan'      => $item->DetailBarang->Barang->Satuan->nama,
                        'harga'       => $this->formatCurrency($item->DetailBarang->harga),
                        'total'       => $this->formatCurrency($item->DetailBarang->harga * $item->jumlah),
                        'total_plain' => $item->DetailBarang->harga * $item->jumlah
                    ];
                });
                break;
        }

        $filter = $request->filter;
        if ($request->type == 'barang'){
            $detail = DetailBarang::find($filter['Kode Barang']);
            $id_detail = $detail->Barang->Kategori->kode.'/'.$detail->Barang->kode.'/'.\Str::padleft($detail->kode, 3, 0);
            \Arr::set($filter, 'Kode Barang', $id_detail);
        }

        $pdf = PDF::loadview('report.penjualan', [
            'datas' => $datas->values(),
            'filter'=> $filter,
            'type'  => $request->type,
            'title' => $request->title
        ])->setPaper('legal', 'landscape');

        $pdf_title = $request->title.'.pdf';

        if ($request->telegram == true) {
            $response = $this->sendDocument($pdf, $pdf_title);
            return redirect()->back()->with($response);
        } else {
            return $pdf->download($pdf_title);
        }
    }
}
