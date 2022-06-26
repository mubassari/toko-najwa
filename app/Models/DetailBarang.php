<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DetailBarang extends Model
{
    use HasFactory;

    protected $table = 'detail_barang';
    public $timestamps = false;
    protected $fillable = [
        'nama',
        'id_barang',
        'id_supplier',
        'stok',
        'stok_min',
        'harga',
        'restok',
    ];

    /**
     * Get the Barang associated with the DetailBarang
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function Barang(): HasOne
    {
        return $this->hasOne(Barang::class, 'id', 'id_barang');
    }

    /**
     * Get the Supplier associated with the DetailBarang
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function Supplier(): HasOne
    {
        return $this->hasOne(Supplier::class, 'id', 'id_supplier');
    }

    /**
     * Get all of the DetailPembelian for the Barang
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function DetailPembelian(): HasMany
    {
        return $this->hasMany(DetailPembelian::class, 'id_detail_barang', 'id');
    }

    /**
     * Get all of the DetailPenjualan for the Barang
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function DetailPenjualan(): HasMany
    {
        return $this->hasMany(DetailPenjualan::class, 'id_detail_barang', 'id');
    }
}
