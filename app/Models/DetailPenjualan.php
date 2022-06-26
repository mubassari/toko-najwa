<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DetailPenjualan extends Model
{
    use HasFactory;

    protected $table = 'detail_penjualan';
    public $timestamps = false;
    protected $fillable = [
        'id_penjualan',
        'id_detail_barang',
        'jumlah',
    ];

    /**
     * Get the DetailBarang associated with the DetailPenjualan
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function DetailBarang(): HasOne
    {
        return $this->hasOne(DetailBarang::class, 'id', 'id_detail_barang');
    }

    /**
     * Get the Penjualan that owns the Pengembalian
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function Penjualan(): BelongsTo
    {
        return $this->belongsTo(Penjualan::class, 'id_penjualan', 'id');
    }
}
