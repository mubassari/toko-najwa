<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginRequest;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function create()
    {
        return Inertia::render('Index', [
            'ringkasan' => [
                    'Total Barang'        =>  \App\Models\Barang::count() . ' Barang',
                    'Total Kategori'      =>  \App\Models\Kategori::count() . ' Macam',
                    'Total Supplier'      =>  \App\Models\Supplier::count() . ' Toko',
                    'Pembelian Bulan Ini' =>  \App\Models\Pembelian::whereMonth('tanggal', date('m'))
                                                    ->whereYear('tanggal', date('Y'))->count() . ' Kali',
                    'Penjualan Bulan Ini' =>  \App\Models\Penjualan::whereMonth('tanggal', date('m'))
                                                    ->whereYear('tanggal', date('Y'))->count() . ' Kali'
                ]
        ]);
    }

    public function store(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (Auth::attempt($credentials, $request->remember)) {
            $request->session()->regenerate();
            return redirect()->intended('/home')->with([
                'status'  => 'success',
                'message' => 'Anda Berhasil Masuk!'
            ]);
        }
        return redirect()->back()->onlyInput('email', 'remember')->with([
            'status'  => 'danger',
            'message' => 'Anda Gagal Masuk!'
        ]);
    }

    public function destroy()
    {
        Auth::logout();
        return redirect()->route('login')->with([
            'status'  => 'success',
            'message' => 'Anda Berhasil Keluar!'
        ]);
    }
}
