<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

   Route::group(['prefix' => 'auth'], function() {
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

Route::group(['middleware' => 'auth:api', 'prefix' => 'user'], function() {
    Route::post('get/{id}', 'UserController@get');
    Route::post('change.link', 'UserController@changeLink');
    Route::post('change.password', 'UserController@changePassword');
});

Route::group(['prefix' => 'friends', 'middleware' => 'auth:api'], function() {
    Route::post('send.request', 'FriendController@send');
    Route::post('accept.request', 'FriendController@accept');
    Route::post('pending.list', 'FriendController@getAllFriendships');
    Route::post('unfriend.user', 'FriendController@unFriend');
});

Route::group(['prefix' => 'messages'], function() {
    Route::get('get', 'MessageController@getUpdates');
    Route::get('send.message', 'MessageController@sendMessage');
    Route::get('get.dialogs', 'MessageController@getDialogs');
});
