<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\UserController;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\DetailBarangController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\PembelianController;
use App\Http\Controllers\PenjualanController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\SatuanController;
use App\Http\Controllers\SupplierController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::prefix('login')->group(function () {
    Route::get('', [LoginController::class, 'create'])->name('login');
    Route::post('', [LoginController::class, 'store']);
});

Route::middleware(['auth'])->group(function () {
    Route::post('logout', [LoginController::class, 'destroy']);
    Route::get('', fn () => Inertia\Inertia::render('Home'))->name("home");

    Route::middleware('can:manage_user,\App\Model\User')->group(function () {
        Route::resource('user', UserController::class);
    });

    Route::prefix('master')->group(function () {
        Route::get('', fn () => Inertia\Inertia::render('Master/Index'))->name("master.index");
        Route::resource('supplier', SupplierController::class);
        Route::resource('satuan', SatuanController::class);
        Route::resource('kategori', KategoriController::class);
        Route::resource('barang', BarangController::class);
        Route::prefix('barang/{barang}')->name('barang.')->group(function () {
            Route::resource('detail', DetailBarangController::class)->except(['index', 'show']);
        });
    });

    Route::prefix('transaksi')->group(function () {
        Route::get('', fn () => Inertia\Inertia::render('Transaksi/Index'))->name("transaksi.index");
        Route::resource('pembelian', PembelianController::class)->except(['edit', 'update', 'destroy']);
        Route::resource('penjualan', PenjualanController::class)->except(['edit', 'update', 'destroy']);
    });

});

Route::prefix('laporan')->name('laporan.')->group(function () {
    Route::get('', [ReportController::class, 'index'])->name("index");
    Route::prefix('test')->name('test.')->group(function () {
        Route::post('', [ReportController::class, 'test'])->name('pdf');
    });
    Route::prefix('barang')->name('barang.')->group(function () {
        Route::post('', [ReportController::class, 'barang'])->name('pdf');
    });
    Route::prefix('supplier')->name('supplier.')->group(function () {
        Route::post('', [ReportController::class, 'supplier'])->name('pdf');
    });
    Route::prefix('pembelian')->name('pembelian.')->group(function () {
        Route::post('', [ReportController::class, 'pembelian'])->name('pdf');
    });
    Route::prefix('pengembalian')->name('pengembalian.')->group(function () {
        Route::post('', [ReportController::class, 'pengembalian'])->name('pdf');
    });
    Route::prefix('penjualan')->name('penjualan.')->group(function () {
        Route::post('', [ReportController::class, 'penjualan'])->name('pdf');
    });
});
