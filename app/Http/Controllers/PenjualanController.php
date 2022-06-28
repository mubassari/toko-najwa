<?php

namespace App\Http\Controllers;

use App\Models\Penjualan;
use App\Models\DetailBarang;
use App\Models\DetailPenjualan;
use App\Http\Requests\PenjualanRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PenjualanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $penjualans = Penjualan::select('id', 'tanggal')
            ->with('DetailPenjualan', function($query) {
                return $query->select('id','id_penjualan','jumlah')
                             ->withSum('DetailBarang as harga', 'harga');
            })
            ->orderBy('id', 'desc')
            ->when($request->input('date'), function ($query, $role) {
                $query->whereDate('tanggal', '=', $role);
            })
            ->withSum('DetailPenjualan as jumlah_barang', 'jumlah')
            ->paginate(5)
            ->through(function($data) {
                $id_penjualan = Penjualan::whereDate('tanggal', '=', date('Y-m-d', strtotime($data->tanggal)))->get()->pluck('id')->search($data->id);
                $kode = str_replace('-', '/', explode(' ', $data->tanggal)[0]).'/'.\Str::padleft($id_penjualan + 1, 3, 0);
                return [
                    'id'            => $data->id,
                    'kode'          => $kode,
                    'tanggal'       => $data->tanggal,
                    'jumlah_barang' => $data->jumlah_barang,
                    'total_jual'    => $data->DetailPenjualan->reduce(function($total, $item) {
                        return $total + $item['jumlah'] * $item['harga'];
                    }, 0)
                ];
            })
            ->withQueryString();

        return Inertia::render('Transaksi/Penjualan/Index', [
            'penjualans' => $penjualans,
            'filters'=> $request->only(['date'])
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Transaksi/Penjualan/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\PenjualanRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PenjualanRequest $request)
    {
        $request->validated();
        try {
            DB::beginTransaction();
            $penjualan = Penjualan::create();

            foreach ($request->barang as $key => $barang) {
                $detail_barang = DetailBarang::find($barang['id']);
                $detail_barang->stok -= $barang['jumlah'];
                $detail_barang->save();

                $detail_penjualan = DetailPenjualan::create([
                    'id_penjualan'     => $penjualan->id,
                    'id_detail_barang' => $barang['id'],
                    'jumlah'           => $barang['jumlah'],
                ]);
            }

            DB::commit();

            foreach ($request->barang as $barang) {
                $detail_barang = DetailBarang::find($barang['id']);
                if ($detail_barang->stok <= $detail_barang->stok_min) {
                    $method = 'sendMessage';
                    $text   = "<b>⚠️ PERINGATAN ⚠️</b>\n\nBarang berikut ini telah <b>".($detail_barang->stok == 0 ? "KEHABISAN": "MENCAPAI MINIMAL")." STOK!!!</b>\n\n<b>Kode : </b>".$detail_barang->Barang->id."\n<b>Nama : </b>".$detail_barang->Barang->nama."\n<b>Kategori : </b>".$detail_barang->Barang->Kategori->nama."\n<b>Satuan : </b>".$detail_barang->Barang->Satuan->nama."\n<b>Detail : </b>".$detail_barang->nama."\n<b>Sisa Stok: </b>".$detail_barang->stok."\n\nDiharapkan untuk segera <b>DIRESTOK</b>!!!\n\n<b>TERIMA KASIH</b>";

                    $response = \Illuminate\Support\Facades\Http::post(env('TELEGRAM_BOT_URL').$method, [
                        'chat_id'    => env('TELEGRAM_CHAT_ID'),
                        'text'       => $text,
                        'parse_mode' => 'HTML'
                    ]);
                }
            }

            return redirect()->route('penjualan.index')->with([
                'status'=>'success',
                'message'=>'Data Berhasil Disimpan!'
            ]);
        } catch (\Throwable $e) {
            DB::rollBack();
            return redirect()->route('penjualan.create')->with([
                'status'=>'danger',
                'message'=>'Data Gagal Disimpan!'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Penjualan  $penjualan
     * @return \Illuminate\Http\Response
     */
    public function show(Penjualan $penjualan)
    {
        $penjualan = collect([$penjualan])->transform(function($jual) {
            $detail_penjualan = [];
            foreach ($jual->DetailPenjualan->sortBy(function($barang) {
                return $barang->DetailBarang->id_barang;
            }) as $detail) {
                array_push($detail_penjualan,[
                    'id'     => $detail->id,
                    'jumlah' => $detail->jumlah,
                    'harga'  => $detail->DetailBarang->harga,
                    'satuan' => $detail->DetailBarang->Barang->Satuan->nama,
                    'nama'   => $detail->DetailBarang->Barang->nama. ' — '. $detail->DetailBarang->nama,
                ]);
            }
            $id_penjualan = Penjualan::whereDate('tanggal', '=', date('Y-m-d', strtotime($jual->tanggal)))->get()->pluck('id')->search($jual->id);
            $kode = str_replace('-', '/', explode(' ', $jual->tanggal)[0]).'/'.\Str::padleft($id_penjualan + 1, 3, 0);
            return [
                'id'               => $jual->id,
                'kode'             => $kode,
                'tanggal'          => $jual->tanggal,
                'detail_penjualan' => $detail_penjualan,
            ];
        })->first();

        return Inertia::render('Transaksi/Penjualan/Show', [
            'penjualan' => $penjualan,
        ]);
    }
}
