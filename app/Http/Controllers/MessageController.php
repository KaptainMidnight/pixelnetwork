<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MessageController extends Controller
{
    public function getUpdates(Request $request)
    {
        return response()->json([
            'status' => 'ok',
            'response' => Message::query()->where('from_id', '=', auth()->user()->id)->get(),
        ]);
    }

    public function sendMessage(Request $request)
    {
        $validatorErrors = Validator::make($request->all(), [
            'text' => 'required|string',
            'to_id' => 'required|integer',
        ]);

        if ( $validatorErrors->fails() )
        {
            return response()->json([
                $validatorErrors->errors()
            ]);
        }

        $message = new Message();
        $message->to_id = $request->get('to_id');
        $message->from_id = auth()->user()->id;
        $message->message = $request->get('text');
        $message->save();

        return response()->json([
            'status' => 'ok',
        ]);
    }

    public function getDialogs()
    {
        $dialogs = Message::query()->where('from_id', '=', auth()->user()->id)->get();
        $response = [];

        foreach ($dialogs as $dialog)
        {
            $response[] = User::query()->findOrFail($dialog->to_id);
        }

        return array_merge(array_unique($response));
    }
}
