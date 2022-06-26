<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'no_telp' => 'required|integer|exists:users,no_telp',
            'password' => 'required'
        ];
    }

        /**
     * Configure the validator instance.
     *
     * @param  \Illuminate\Validation\Validator  $validator
     * @return void
     */
    public function withValidator($validator)
    {
        // checks user current password
        // before making changes
        $validator->after(function ($validator) {
            $user = \App\Models\User::where('no_telp', $this->no_telp)->first('password');
            if($user){
                if (!\Illuminate\Support\Facades\Hash::check($this->password, $user->password)) {
                    $validator->errors()->add('password', 'Kata sandi salah.');
                }
            }
        });
    }
}
