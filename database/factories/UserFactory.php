<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $numbers = [
            '11', '12', '13', '21', '22', '23', '52', '53', // Telkomsel
            '15', '16', '55', '56', '57', '58', // Indosat
            '17', '18', '19', '59', '77', '78', '79', // XL
            '95', '96', '97', '98', '99', // Tri
            '31', '32', '38', // Axis
            '87', '88', '89', // Smartfren
        ];

        $number_length = [
            '8'.$this->faker->randomElement($numbers).'########',
            '8'.$this->faker->randomElement($numbers).'#######',
        ];

        return [
            'nama' => $this->faker->name(),
            'no_telp' => $this->faker->unique()->numerify($this->faker->randomElement($number_length)),
            'password' => Hash::make('12345'), // password
            'remember_token' => Str::random(10),
        ];
    }
}
