<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Barang extends Model
{
    use HasFactory;

    protected $table = 'barang';
    public $timestamps = false;
    protected $fillable = [
        'kode',
        'nama',
        'id_kategori',
        'id_satuan',
    ];

    /**
     * Get all of the DetailBarang for the Barang
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function DetailBarang(): HasMany
    {
        return $this->hasMany(DetailBarang::class, 'id_barang', 'id');
    }

    /**
     * Get the Kategori associated with the Barang
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function Kategori(): HasOne
    {
        return $this->hasOne(Kategori::class, 'id', 'id_kategori');
    }

    /**
     * Get the Satuan associated with the Barang
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function Satuan(): HasOne
    {
        return $this->hasOne(Satuan::class, 'id', 'id_satuan');
    }
}
