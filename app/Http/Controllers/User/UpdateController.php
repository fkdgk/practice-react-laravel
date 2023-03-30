<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UpdateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'name' => ['required', 'min:2'],
        ]);
        $user = User::find($request->id);
        $user->update([
            'name' => $request->name,
        ]);
        return redirect()->back();
    }
}
