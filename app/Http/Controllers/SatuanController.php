<?php

namespace App\Http\Controllers;

use App\Models\Satuan;
use Illuminate\Http\Request;
use App\Http\Requests\SatuanRequest;
use Inertia\Inertia;

class SatuanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $satuans = Satuan::select('id', 'nama')
            ->orderBy('id', 'desc')
            ->when($request->input('search'), function ($query, $role) {
                $query->where('nama', 'like', "%$role%");
            })
            ->paginate(5)
            ->withQueryString();

        return Inertia::render('Master/Satuan/Index', [
            'satuans' => $satuans,
            'filters'=>$request->only(['search'])
        ]);
    }

    public function getData(Request $request)
    {
        $satuans = Satuan::select('id', 'nama')
        ->when($request->input('value'), function ($query, $role) {
            $query->where('nama', 'like', "%$role%");
        })->limit(5)->get();
        return response()->json($satuans, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Master/Satuan/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\SatuanRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SatuanRequest $request)
    {
        $request->validated();
        $satuan = Satuan::create([
            'nama'     => $request->nama,
        ]);

        if($satuan) {
            return redirect()->route('satuan.index')->with([
                'status'=>'success',
                'message'=>'Data Berhasil Disimpan!'
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Satuan  $satuan
     * @return \Illuminate\Http\Response
     */
    public function edit(Satuan $satuan)
    {
        return Inertia::render('Master/Satuan/Edit', [
            'satuan' => $satuan
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\SatuanRequest  $request
     * @param  \App\Models\Satuan  $satuan
     * @return \Illuminate\Http\Response
     */
    public function update(SatuanRequest $request, Satuan $satuan)
    {
        $request->validated();
        $satuan->update([
            'nama'     => $request->nama,
        ]);

        if($satuan) {
            return redirect()->route('satuan.index')->with([
                'status'=>'success',
                'message'=>'Data Berhasil Diperbarui!'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Satuan  $satuan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Satuan $satuan)
    {
        $satuan->delete();

        if($satuan) {
            return redirect()->route('satuan.index')->with([
                'status'=>'success',
                'message'=>'Data Berhasil Dihapus!'
            ]);
        }
    }
}
