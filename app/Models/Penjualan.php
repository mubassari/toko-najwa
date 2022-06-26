<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Penjualan extends Model
{
    use HasFactory;

    protected $table = 'penjualan';
    public $timestamps = false;
    protected $fillable = [
        'tanggal',
    ];

    /**
     * Get all of the DetailPenjualan for the Penjualan
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function DetailPenjualan(): HasMany
    {
        return $this->hasMany(DetailPenjualan::class, 'id_penjualan', 'id');
    }
}
