<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Pembelian extends Model
{
    use HasFactory;

    protected $table = 'pembelian';
    public $timestamps = false;
    protected $fillable = [
        'no_nota',
        'id_supplier',
        'tanggal',
    ];

    /**
     * Get all of the DetailPembelian for the Pembelian
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function DetailPembelian(): HasMany
    {
        return $this->hasMany(DetailPembelian::class, 'id_pembelian', 'id');
    }

    /**
     * Get the Supplier associated with the Pembelian
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function Supplier(): HasOne
    {
        return $this->hasOne(Supplier::class, 'id', 'id_supplier');
    }
}
