<?php

namespace App\Http\Controllers;

use App\Models\Pembelian;
use App\Models\DetailPembelian;
use App\Models\DetailBarang;
use App\Models\Pengembalian;
use App\Http\Requests\PembelianRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PembelianController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $pembelians = Pembelian::select('id','no_nota', 'tanggal', 'id_supplier')
            ->with(['DetailPembelian' => function($query) {
                return $query->select('id','id_pembelian','jumlah','harga')
                             ->withSum('Pengembalian as kembali', 'jumlah');
            }])
            ->orderBy('id', 'desc')
            ->when($request->input('date'), function ($query, $role) {
                $query->whereDate('tanggal', '=', $role);
            })
            ->paginate(5)
            ->through(function($data) {
                $jumlah = $kembali = $total = 0;
                foreach ($data->DetailPembelian as $detail) {
                    $jumlah  += $detail->jumlah;
                    $kembali += $detail->kembali ?: 0;
                    $total   += $detail->harga * ($detail->jumlah - $detail->kembali);
                }
                return [
                    'id'       => $data->id,
                    'no_nota'  => $data->no_nota,
                    'supplier' => $data->Supplier->nama,
                    'tanggal'  => $data->tanggal,
                    'jumlah'   => $jumlah,
                    'kembali'  => $kembali,
                    'total'    => $total,
                ];
            })
            ->withQueryString();

            return Inertia::render('Transaksi/Pembelian/Index', [
            'pembelians' => $pembelians,
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
        return Inertia::render('Transaksi/Pembelian/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\PembelianRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PembelianRequest $request)
    {
        $request->validated();
        try {
            DB::beginTransaction();
            $pembelian = Pembelian::create([
                'no_nota'     => $request->no_nota,
                'id_supplier' => $request->supplier['id'],
            ]);

            foreach ($request->barang as $key => $barang) {
                $detail_barang = DetailBarang::find($barang['id']);
                $detail_barang->id_supplier  = $request->supplier['id'];
                $detail_barang->stok        += ($barang['jumlah'] - $barang['kembali']);
                $detail_barang->harga        = $barang['harga'];
                $detail_barang->save();

                $detail_pembelian = DetailPembelian::create([
                    'id_pembelian'     => $pembelian->id,
                    'id_detail_barang' => $barang['id'],
                    'jumlah'           => $barang['jumlah'],
                    'harga'            => $barang['harga'],
                ]);

                if($barang['kembali'] > 0) {
                    $pengembalian = Pengembalian::create([
                        'id_detail_pembelian' => $detail_pembelian->id,
                        'jumlah'              => $barang['kembali'],
                    ]);
                }
            }

            DB::commit();

            return redirect()->route('pembelian.index')->with([
                'status'  => 'success',
                'message' => 'Data Berhasil Disimpan!'
            ]);
        } catch (\Throwable $e) {
            DB::rollBack();
            return redirect()->route('pembelian.create')->with([
                'status'  => 'danger',
                'message' => 'Data Gagal Disimpan!'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pembelian  $pembelian
     * @return \Illuminate\Http\Response
     */
    public function show(Pembelian $pembelian)
    {
        $pembelian = collect([$pembelian])->transform(function($beli) {
            $detail_pembelian = [];
            foreach ($beli->DetailPembelian->sortBy(function($barang) {
                return $barang->DetailBarang->id_barang;
            }) as $detail) {
                $kembali = $detail->Pengembalian ? $detail->Pengembalian->jumlah : 0;
                array_push($detail_pembelian, [
                    'id'      => $detail->id,
                    'jumlah'  => $detail->jumlah,
                    'kembali' => $kembali,
                    'satuan'  => $detail->DetailBarang->Barang->Satuan->nama,
                    'harga'   => $detail->harga,
                    'total'   => $detail->harga * ($detail->jumlah - $kembali),
                    'nama'    => $detail->DetailBarang->Barang->nama. ' — '. $detail->DetailBarang->nama,
                ]);
            }
            return [
                'tanggal'          => $beli->tanggal,
                'supplier'         => $beli->Supplier->nama,
                'detail_pembelian' => $detail_pembelian,
            ];
        })->first();

        return Inertia::render('Transaksi/Pembelian/Show', [
            'pembelian' => $pembelian,
        ]);
    }
}
