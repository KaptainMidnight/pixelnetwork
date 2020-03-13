<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('from_id')->unsigned();
            $table->integer('to_id')->unsigned();
            $table->enum('type', ['text', 'image'])->default('text');
            $table->text('message');
            $table->string('attachment')->nullable();
            $table->timestamps();

//            $table->foreign('from_id')->references('id')->on('users');
//            $table->foreign('to_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messages');
    }
}
