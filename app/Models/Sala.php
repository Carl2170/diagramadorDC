<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Proyecto;

class Sala extends Model
{
    //use HasFactory;
    protected $table = "salas";
    public $timestamps = false;
    protected $fillable =['nombre','descripcion','anfitrion_id'];
}
