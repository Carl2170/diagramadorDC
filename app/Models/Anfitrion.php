<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anfitrion extends Model
{
   //use HasFactory;
    protected $table = "anfitrions";
    protected $fillable =['user_id'];
    public $timestamps = false;
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
