<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PembelianRequest extends FormRequest
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
            'no_nota'          => 'required|string',
            'supplier.id'      => 'required|exists:supplier,id',
            'barang.*.id'      => 'required|exists:detail_barang,id',
            'barang.*.jumlah'  => 'required|integer|min:1',
            'barang.*.harga'   => 'required|integer',
            'barang.*.kembali' => 'required|integer',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        $messages = [
            'supplier.id.required' => 'Supplier wajib diisi.',
            'supplier.id.exists'   => 'Supplier yang dipilih tidak valid.'
        ];

        foreach ($this->get('barang') as $key => $value) {
            $messages['barang.'.$key.'.id.exists']       = 'Barang '. $key + 1 .' wajib diisi';
            $messages['barang.'.$key.'.jumlah.integer']  = 'Jumlah barang '. $key + 1 .' harus berupa bilangan bulat';
            $messages['barang.'.$key.'.jumlah.min']      = 'Jumlah barang '. $key + 1 .' minimal bernilai :min';
            $messages['barang.'.$key.'.harga.integer']   = 'Harga barang '. $key + 1 .' harus berupa bilangan bulat';
            $messages['barang.'.$key.'.kembali.integer'] = 'Jumlah kembali barang '. $key + 1 .' harus berupa bilangan bulat';
        }
        return $messages;
    }
}
