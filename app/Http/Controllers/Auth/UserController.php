<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $users = User::select('id', 'nama', 'no_telp', 'role')
            ->orderBy('id', 'desc')
            ->when($request->input('search'), function ($query, $role) {
                $query->where('nama', 'like', "%$role%");
            })
            ->paginate(5)
            ->through(function ($user) {
                return [
                    'id'       => $user->id,
                    'nama'     => $user->nama,
                    'no_telp'  => $user->no_telp,
                    'role'     => $user->role,
                    'editable' => \Auth::user()->can('edit', $user)
                ];
            })
            ->withQueryString();

        return Inertia::render('Pengguna/Index', [
            'users' => $users,
            'filters'=>$request->only(['search'])
        ]);
    }

    public function getData(Request $request)
    {
        $users = User::select('id', 'nama')
        ->when($request->input('value'), function ($query, $role) {
            $query->where('nama', 'like', "%$role%");
        })->limit(5)->get();
        return response()->json($users, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Pengguna/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\UserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        $request->validated();
        $user = User::create([
            'nama'    => $request->nama,
            'no_telp' => $request->no_telp,
            'role'    => $request->role,
        ]);

        if($user) {
            return redirect()->route('user.index')->with([
                'status'=>'success',
                'message'=>'Data Berhasil Disimpan!'
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        return Inertia::render('Pengguna/Edit', [
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UserRequest  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, User $user)
    {
        $request->validated();
        $user->update([
            'nama'    => $request->nama,
            'no_telp' => $request->no_telp,
            'role'    => $request->role,
        ]);

        if($user) {
            return redirect()->route('user.index')->with([
                'status'=>'success',
                'message'=>'Data Berhasil Diperbarui!'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();

        if($user) {
            return redirect()->route('user.index')->with([
                'status'=>'success',
                'message'=>'Data Berhasil Dihapus!'
            ]);
        }
    }
}
