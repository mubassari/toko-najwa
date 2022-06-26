<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use App\Models\DetailBarang;
use Illuminate\Http\Request;
use App\Http\Requests\DetailBarangRequest;
use Inertia\Inertia;

class DetailBarangController extends Controller
{
    public function getData(Request $request)
    {
        $detailBarang = DetailBarang::select('id', 'nama', 'harga', 'stok')
        ->when($request->input('value'), function ($query, $role) {
            $query->where('nama', 'like', "%$role%");
        })
        ->when($request->input('restok'), function ($query, $role) {
            $query->where('restok', '=', $role);
        })
        ->when($request->input('id_barang'), function ($query, $role) {
            $query->where('id_barang', '=', $role);
        })
        ->limit(5)->get();
        return response()->json($detailBarang, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function create(Barang $barang)
    {
        return Inertia::render('Master/Barang/Detail/Create',[
            'barang' => [
                'id'     => $barang->id,
                'nama'   => $barang->nama,
                'satuan' => $barang->Satuan->nama
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\DetailBarangRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DetailBarangRequest $request)
    {
        $request->validated();
        $detailBarang = DetailBarang::create([
            'nama'        => $request->nama,
            'stok'        => $request->stok,
            'stok_min'    => $request->stok_min,
            'harga'       => $request->harga,
            'restok'      => $request->restok,
            'id_supplier' => $request->supplier['id'],
            'id_barang'   => $request->id_barang,
        ]);

        if($detailBarang) {
            return redirect()->route('barang.show', ['barang' => $request->id_barang])
                ->with([
                    'status'  => 'success',
                    'message' => 'Data Detail Berhasil Disimpan!'
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DetailBarang  $detailBarang
     * @return \Illuminate\Http\Response
     */
    public function edit(Barang $barang, DetailBarang $detail)
    {
        $detail = collect([$detail])->transform(function($detail_barang) {
            return [
                'id'       => $detail_barang->id,
                'nama'     => $detail_barang->nama,
                'stok'     => $detail_barang->stok,
                'stok_min' => $detail_barang->stok_min,
                'harga'    => $detail_barang->harga,
                'restok'   => $detail_barang->restok,
                'supplier' => $detail_barang->Supplier,
            ];
        })->first();
        return Inertia::render('Master/Barang/Detail/Edit', [
            'detail' => $detail,
            'barang' => [
                'id'     => $barang->id,
                'nama'   => $barang->nama,
                'satuan' => $barang->Satuan->nama
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\DetailBarangRequest  $request
     * @param  \App\Models\DetailBarang  $detailBarang
     * @return \Illuminate\Http\Response
     */
    public function update(DetailBarangRequest $request, Barang $barang, DetailBarang $detail)
    {
        $request->validated();
        $detail->update([
            'nama'        => $request->nama,
            'stok'        => $request->stok,
            'stok_min'    => $request->stok_min,
            'harga'       => $request->harga,
            'restok'      => $request->restok ,
            'id_supplier' => $request->supplier['id'],
            'id_barang'   => $request->id_barang,
        ]);

        if($detail) {
            return redirect()->route('barang.show', ['barang'=>$barang->id])->with([
                'status'=>'success',
                'message'=>'Data Detail Berhasil Diperbarui!'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DetailBarang  $detailBarang
     * @return \Illuminate\Http\Response
     */
    public function destroy(Barang $barang, DetailBarang $detail)
    {
        $detail->delete();

        if($detail) {
            return redirect()->route('barang.show', ['barang'=>$barang->id])->with([
                'status'=>'success',
                'message'=>'Data Detail Berhasil Dihapus!'
            ]);
        }
    }
}
