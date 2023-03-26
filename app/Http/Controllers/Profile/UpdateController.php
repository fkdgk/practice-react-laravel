<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UpdateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $user = $request->user();
        $request -> validate([
            'name' => ['required'],
            // 'email' => 'required|email|unique:users', // Update
            'email' => 'required|email|unique:users,email,'.$user->id, // Update
        ]);

        $user -> update([
            'name' => $request -> name,
            'email' => $request -> email,
        ]);

        return redirect()->back();
    }
}
