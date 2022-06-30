<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BarangRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'kode'         => 'required|string|size:3|unique:barang,kode,'.$this->barang->id,
            'nama'         => 'required|string|max:50',
            'kategori.id'  => 'required|exists:kategori,id',
            'satuan.id'    => 'required|exists:satuan,id',
        ];
    }
}
