<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'nama' => 'Usyi Tari Mulyani',
                'no_telp' => 87798005950,
                'password' => '$2y$10$ZsTkMwwcMMW.D9DhXZvt9.BdPx3Lvbei1b67Uf8B.SZmW8H3E0LJW',
                'role' => 'staf',
                'remember_token' => 'bl4EtI3hVt',
            ),
            1 => 
            array (
                'id' => 2,
                'nama' => 'Luthfi Danuja Sirait',
                'no_telp' => 87819449291,
                'password' => '$2y$10$3r3.3Y8miERpHkvQdEFEaengE8Un23wwcuo10HTHTqLvHvwu5RtWq',
                'role' => 'staf',
                'remember_token' => 'fvUkhU7YgLfymRpCynOzizdDFfV335dgVYx254bumrUsjoZa68B0pMIwn3lf',
            ),
            2 => 
            array (
                'id' => 3,
                'nama' => 'Mauli Mubassari',
                'no_telp' => 8123,
                'password' => '$2y$10$43CESdQmpz17ts633MrwdetNmIA/8YhvoMAlXDfolJukbN9MwfzBG',
                'role' => 'admin',
                'remember_token' => 'GdaU5SNuc77Z81r9ACKTBi8BGjzgsy9Ocd5890wXu2ulUyk4uAwJ2RKjrOgV',
            ),
        ));
        
        
    }
}