<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginRequest;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/Login');
    }

    public function store(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (Auth::attempt($credentials, $request->remember)) {
            $request->session()->regenerate();
            return redirect()->route('home')->with([
                'status'=>'success',
                'message'=> 'Berhasil Masuk!'
            ]);
        }
        return redirect()->back()->onlyInput('email', 'remember')->with([
            'status'=>'danger',
            'message'=> 'Gagal Masuk!'
        ]);
    }

    public function destroy()
    {
        Auth::logout();
        return redirect()->route('login')->with([
            'status'=>'success',
            'message'=> 'Berhasil Keluar!'
        ]);
    }
}
