<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Supplier extends Model
{
    use HasFactory;

    protected $table = 'supplier';
    public $timestamps = false;
    protected $fillable = [
        'nama',
        'alamat',
        'no_telp',
    ];

    /**
     * Get all of the DetailBarang for the Supplier
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function DetailBarang(): HasMany
    {
        return $this->hasMany(DetailBarang::class, 'id_supplier', 'id');
    }

    /**
     * Get all of the Pembelian for the Supplier
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function Pembelian(): HasMany
    {
        return $this->hasMany(Pembelian::class, 'id_supplier', 'id');
    }
}
