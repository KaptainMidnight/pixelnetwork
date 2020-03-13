<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function get($id)
    {
        return User::query()->findOrFail($id);
    }

    public function changeLink(Request $request)
    {
        $validatorErrors = Validator::make($request->all(), [
            'link' => 'required|string|unique:users',
        ]);

        if ( $validatorErrors->fails() )
        {
            return response()->json([
                'errors' => $validatorErrors->errors(),
            ]);
        }

        $user = User::query()->findOrFail(auth()->user()->id);
        $user->short_link = $request->post('link');
        $user->save();

        return response()->json([
            'message' => 'Successfully changed link!',
            'code' => 200,
        ]);
    }

    public function changePassword(Request $request)
    {
        $validatorErrors = Validator::make($request->all(), [
            'last_password' => 'required|string',
            'new_password' => 'required|string',
            'email' => 'required|string'
        ]);

        if ( $validatorErrors->fails() )
        {
            return response()->json($validatorErrors->errors());
        }

        $last_password = $request->post('last_password');
        $new_password = $request->post('new_password');
        $email = base64_decode($request->post('email'));

        if ( $last_password === $new_password )
        {
            return response()->json([
                'message' => 'The last password is incorrect',
                'code' => 403,
            ], 403);
        }

        $user = User::query()->where('email', '=', $email)->get();
        $user->password = Hash::make($new_password);
        $user->save();

        return response()->json([
            'message' => 'Successfully changed password',
            'code' => 200,
        ]);
    }
}
