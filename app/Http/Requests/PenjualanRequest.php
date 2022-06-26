<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PenjualanRequest extends FormRequest
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
            'barang.*.id'      => 'required|exists:detail_barang,id',
            'barang.*.jumlah'  => 'required|integer|min:1',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        $messages = [];

        foreach ($this->get('barang') as $key => $value) {
            $messages['barang.'.$key.'.id.exists']       = 'Barang '. $key + 1 .' wajib diisi';
            $messages['barang.'.$key.'.jumlah.integer']  = 'Jumlah barang '. $key + 1 .' harus berupa bilangan bulat';
            $messages['barang.'.$key.'.jumlah.min']      = 'Jumlah barang '. $key + 1 .' minimal bernilai :min';
        }
        return $messages;
    }
}
