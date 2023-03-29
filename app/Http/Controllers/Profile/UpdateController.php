<?php

namespace App\Http\Controllers\Profile;
use App\Http\Requests\Profile\UpdateRequest;
use App\Http\Controllers\Controller;

class UpdateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(UpdateRequest $request)
    {
        $user = $request->user();
        $user -> update([
            'name' => $request -> name,
            'email' => $request -> email,
            'password' => bcrypt($request->password) ,
        ]);

        return redirect()->back()->with([
            'message'=>['message'=>'hoge'],
        ]);
    }
}
