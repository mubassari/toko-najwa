<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Http\Request;
use App\Http\Requests\KategoriRequest;
use Inertia\Inertia;

class KategoriController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $kategoris = Kategori::select('id', 'kode', 'nama')
            ->orderBy('id', 'desc')
            ->when($request->input('search'), function ($query, $role) {
                $query->where('nama', 'like', "%$role%");
            })
            ->paginate(5)
            ->withQueryString();

        return Inertia::render('Master/Kategori/Index', [
            'kategoris' => $kategoris,
            'filters'=>$request->only(['search'])
        ]);
    }

    public function getData(Request $request)
    {
        $kategoris = Kategori::select('id', 'kode', 'nama')
        ->when($request->input('value'), function ($query, $role) {
            $query->where('nama', 'like', "%$role%");
        })->limit(5)->get();
        return response()->json($kategoris, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Master/Kategori/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\KategoriRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(KategoriRequest $request)
    {
        $request->validated();
        $kategori = Kategori::create([
            'kode'     => $request->kode,
            'nama'     => $request->nama,
        ]);

        if($kategori) {
            return redirect()->route('kategori.index')->with([
                'status'=>'success',
                'message'=>'Data Berhasil Disimpan!'
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function edit(Kategori $kategori)
    {
        return Inertia::render('Master/Kategori/Edit', [
            'kategori' => $kategori
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\KategoriRequest  $request
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function update(KategoriRequest $request, Kategori $kategori)
    {
        $request->validated();
        $kategori->update([
            'kode'     => $request->kode,
            'nama'     => $request->nama,
        ]);

        if($kategori) {
            return redirect()->route('kategori.index')->with([
                'status'=>'success',
                'message'=>'Data Berhasil Diperbarui!'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Kategori  $kategori
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kategori $kategori)
    {
        $kategori->delete();

        if($kategori) {
            return redirect()->route('kategori.index')->with([
                'status'=>'success',
                'message'=>'Data Berhasil Dihapus!'
            ]);
        }
    }
}
