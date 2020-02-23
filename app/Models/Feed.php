<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Feed extends Model
{
    use SoftDeletes;

    /**
     *
     * Автор статьи
     *
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'author_id', 'id');
    }
}
