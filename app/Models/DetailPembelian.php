<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DetailPembelian extends Model
{
    use HasFactory;

    protected $table = "detail_pembelian";
    public $timestamps = false;
    protected $fillable = [
        'id_pembelian',
        'id_detail_barang',
        'jumlah',
        'harga',
    ];

    /**
     * Get the DetailBarang associated with the DetailPembelian
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function DetailBarang(): HasOne
    {
        return $this->hasOne(DetailBarang::class, 'id', 'id_detail_barang');
    }

    /**
     * Get the Pembelian that owns the Pengembalian
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function Pembelian(): BelongsTo
    {
        return $this->belongsTo(Pembelian::class, 'id_pembelian', 'id');
    }

    /**
     * Get the DetailBarang associated with the DetailPembelian
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function Pengembalian(): HasOne
    {
        return $this->HasOne(Pengembalian::class, 'id_detail_pembelian', 'id');
    }
}
