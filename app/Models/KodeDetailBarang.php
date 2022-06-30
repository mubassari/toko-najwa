<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KodeDetailBarang extends Model
{
    use HasFactory;

    protected $table = 'kode_detail_barang';
    public $timestamps = false;
    protected $fillable = [
        'id_barang',
        'kode_terakhir'
    ];

}
