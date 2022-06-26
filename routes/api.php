<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\DetailBarangController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\SatuanController;
use App\Http\Controllers\SupplierController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::name('api.')->middleware(['auth'])->group(function () {
    Route::post('supplier', [SupplierController::class, 'getData'])->name('supplier');
    Route::post('satuan', [SatuanController::class, 'getData'])->name('satuan');
    Route::post('kategori', [KategoriController::class, 'getData'])->name('kategori');
    Route::name('barang')->prefix('barang')->group(function () {
        Route::post('', [BarangController::class, 'getData'])->name('');
        Route::post('detail', [DetailBarangController::class, 'getData'])->name('.detail');
    });
});
