<?php

namespace App\Http\Controllers;

use App\Models\Feed;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Swagger\Annotations as SWG;

class FeedController extends Controller
{
    /*
     *
     */
    public function create(Request $request)
    {
        $validatorErrors = Validator::make($request->all(), [
            'title' => 'required|string',
            'content' => 'required|string',
        ]);

        if ( $validatorErrors->fails() )
        {
            return response()->json($validatorErrors->errors());
        }
        $feed = new Feed();
        $feed->title = $request->post('title');
        $feed->content = $request->post('content');
        $feed->author_id = auth()->user()->id;
        $feed->save();

        return response()->json([
            'message' => 'Created!',
            'code' => 200,
        ]);
    }

    public function showAll(Request $request)
    {
        $feed = Feed::all();
        $data = [];

        foreach ( $feed as $a )
        {
            $data[] = $a;
        }
        return response()->json($data);
    }
}
