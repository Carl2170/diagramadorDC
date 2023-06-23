<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
class DiagramaController extends Controller
{
    public function index(){
        return view('prueba2');
    }
    public function index1(){
        return view('prueba');
    }

    public function index2(){
        // return view('prueba2');
        return view('diagrama.index');

    }
   public function index3(){
    return view('p');
   }
}