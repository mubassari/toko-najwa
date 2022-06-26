<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pengembalian extends Model
{
    use HasFactory;

    protected $table = 'pengembalian';
    public $timestamps = false;
    protected $fillable = [
        'id_detail_pembelian',
        'jumlah',
    ];

    /**
     * Get the DetailPembelian that owns the Pengembalian
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function DetailPembelian(): BelongsTo
    {
        return $this->belongsTo(DetailPembelian::class, 'id_detail_pembelian', 'id');
    }
}
