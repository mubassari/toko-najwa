<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;
use App\Http\Requests\SupplierRequest;
use Inertia\Inertia;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $suppliers = Supplier::select('id', 'nama', 'alamat', 'no_telp')
            ->orderBy('id', 'desc')
            ->when($request->input('search'), function ($query, $role) {
                $query->where('nama', 'like', "%$role%");
            })
            ->paginate(5)
            ->withQueryString();

        return Inertia::render('Master/Supplier/Index', [
            'suppliers' => $suppliers,
            'filters'=>$request->only(['search'])
        ]);
    }

    public function getData(Request $request)
    {
        $suppliers = Supplier::select('id', 'nama')
        ->when($request->input('value'), function ($query, $role) {
            $query->where('nama', 'like', "%$role%");
        })->limit(5)->get();
        return response()->json($suppliers, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Master/Supplier/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\SupplierRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SupplierRequest $request)
    {
        $request->validated();
        $supplier = Supplier::create([
            'nama'     => $request->nama,
            'alamat'     => $request->alamat,
            'no_telp'     => $request->no_telp,
        ]);

        if($supplier) {
            return redirect()->route('supplier.index')->with([
                'status'=>'success',
                'message'=>'Data Berhasil Disimpan!'
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function edit(Supplier $supplier)
    {
        return Inertia::render('Master/Supplier/Edit', [
            'supplier' => $supplier
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\SupplierRequest  $request
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function update(SupplierRequest $request, Supplier $supplier)
    {
        $request->validated();
        $supplier->update([
            'nama'     => $request->nama,
            'alamat'     => $request->alamat,
            'no_telp'     => $request->no_telp,
        ]);

        if($supplier) {
            return redirect()->route('supplier.index')->with([
                'status'=>'success',
                'message'=>'Data Berhasil Diperbarui!'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function destroy(Supplier $supplier)
    {
        $supplier->delete();

        if($supplier) {
            return redirect()->route('supplier.index')->with([
                'status'=>'success',
                'message'=>'Data Berhasil Dihapus!'
            ]);
        }
    }
}
