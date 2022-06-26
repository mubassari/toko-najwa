<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Http\Request;
use App\Http\Requests\BarangRequest;
use Inertia\Inertia;

class BarangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $barangs = Barang::select('id', 'kode', 'nama', 'id_kategori', 'id_satuan')
            ->orderBy('id', 'desc')
            ->when($request->input('search'), function ($query, $role) {
                $query->where('barang.nama', 'like', "%$role%")
                      ->orWhereRelation('DetailBarang', 'nama', 'like', "%$role%");
            })
            ->withCount('DetailBarang as jumlah_jenis')
            ->withSum('DetailBarang as total_stok', 'stok')
            ->paginate(5)
            ->through(function($data) {
                return [
                    'id'           => $data->id,
                    'kode'         => $data->kode,
                    'nama'         => $data->nama,
                    'kategori'     => $data->Kategori->nama,
                    'satuan'       => $data->Satuan->nama,
                    'jumlah_jenis' => $data->jumlah_jenis,
                    'total_stok'   => $data->total_stok,
                ];
            })
            ->withQueryString();

        return Inertia::render('Master/Barang/Index', [
            'barangs' => $barangs,
            'filters'=> $request->only(['search'])
        ]);
    }

    public function getData(Request $request)
    {
        $barangs = Barang::select('id', 'kode', 'nama', 'id_satuan', 'id_kategori')
        ->when($request->input('value'), function ($query, $role) {
            $query->where('nama', 'like', "%$role%")
                  ->orWhereRelation('DetailBarang', 'nama', 'like', "%$role%");
        })
        ->withCount('DetailBarang as jumlah_jenis')
        ->limit(5)->get()->map(function($data) {
            return [
                'id'           => $data->id,
                'nama'         => $data->nama,
                'satuan'       => $data->Satuan->nama,
                'kategori'     => $data->Kategori->nama,
            ];
        });

        return response()->json($barangs, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Master/Barang/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\BarangRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BarangRequest $request)
    {
        $request->validated();
        $barang = Barang::create([
            'kode'     => $request->kode,
            'nama'     => $request->nama,
            'id_kategori' => $request->kategori['id'],
            'id_satuan'   => $request->satuan['id'],
        ]);

        if($barang) {
            return redirect()->route('barang.show', ['barang' => $barang->id])
                ->with([
                    'status'=>'success',
                    'message'=>'Data Berhasil Disimpan!'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function show(Barang $barang)
    {
        $barang = collect([$barang])->transform(function($barang) {
            $detail_barang = [];
            foreach ($barang->Detailbarang->sortBy('nama', SORT_NATURAL) as $detail) {
                array_push($detail_barang, [
                    'id'       => $detail->id,
                    'nama'     => $detail->nama,
                    'stok'     => $detail->stok,
                    'stok_min' => $detail->stok_min,
                    'harga'    => $detail->harga,
                    'restok'   => $detail->restok,
                    'supplier' => $detail->Supplier->nama,
                ]);
            }
            return [
                'id'            => $barang->id,
                'kode'          => $barang->kode,
                'nama'          => $barang->nama,
                'kategori'      => $barang->Kategori->nama,
                'satuan'        => $barang->Satuan->nama,
                'detail_barang' => $detail_barang,
            ];
        })->first();
        return Inertia::render('Master/Barang/Show', [
            'barang' => $barang,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function edit(Barang $barang)
    {
        $barang = collect([$barang])->transform(function($brg) {
            return [
                'id'       => $brg->id,
                'kode'     => $brg->kode,
                'nama'     => $brg->nama,
                'kategori' => $brg->Kategori,
                'satuan'   => $brg->Satuan,
            ];
        })->first();
        return Inertia::render('Master/Barang/Edit', [
            'barang' => $barang
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\BarangRequest $request
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function update(BarangRequest $request, Barang $barang)
    {
        $request->validated();
        $barang->update([
            'kode'        => $request->kode,
            'nama'        => $request->nama,
            'id_kategori' => $request->kategori['id'],
            'id_satuan'   => $request->satuan['id'],
        ]);

        if($barang) {
            return redirect()->route('barang.show', ['barang' => $barang->id])->with([
                'status'=>'success',
                'message'=>'Data Berhasil Diperbarui!'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function destroy(Barang $barang)
    {
        $barang->delete();

        if($barang) {
            return redirect()->route('barang.index')->with([
                'status'=>'success',
                'message'=>'Data Berhasil Dihapus!'
            ]);
        }
    }
}
