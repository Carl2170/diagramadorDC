<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
class DiagramaController extends Controller
{
    public function index(){
        $outputFilePath=null;
        return view('diagrama.index',compact('outputFilePath'));
    }
    public function index1(){
        return view('prueba');
    }

    public function index2(){
        return view('prueba2');
    }
   
}