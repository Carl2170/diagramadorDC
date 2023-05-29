<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
Use App\Models\Sala;
use App\Models\Proyecto;
use Mckenziearts\Notify\Facades\LaravelNotify;

class HomeController extends Controller
{
  
    public function index()
    {   
        //connectify('success', 'Connection Found', 'Success Message Here');
        // drakify('success');
         //drakify('error') ;
     
         //emotify('success', 'You are awesome, your data was successfully created');

        return view('home');
    }

    public function perfil(){
        $user = User::where('id', Auth::user()->id)->first();
        return view('perfil.index',compact('user'));
    }

    public function editperfil(){
        $user = User::where('id', Auth::user()->id)->first();
        return view('perfil.edit',compact('user'));
    }

    public function updatePerfil(Request $request){
        $user = User::where('id', Auth::user()->id)->first();

        $user->name = $request->name;
        $user->apellidos = $request->apellidos;
        $user->email = $request->email;
        $user->telefono = $request->telefono;
        
        $user->save();
        smilify('success', 'Datos del perfil actualizados');
        return redirect()->route('perfil.index')->with('message','Perfil actualizado correctamente');
    }

   

}
