<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DetailBarangRequest extends FormRequest
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
            'nama'        => 'required|string|max:50',
            'stok'        => 'required|required_with:stok_min|numeric|min:0',
            'stok_min'    => 'required|required_with:stok|numeric|min:1',
            'harga'       => 'required|numeric',
            'supplier.id' => 'required|exists:supplier,id',
            'id_barang'   => 'required|exists:barang,id'
        ];
    }
}
