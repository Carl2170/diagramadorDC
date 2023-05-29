@extends('layouts.plantilla')
@section('title')
    Perfil
@endsection

@section('sobreTitulo')
    <h3>Perfil</h3>
@endsection

@section('content')
<div class="row">
    <!-- Column -->
    <div class="col-lg-4 col-xlg-3 col-md-5">
        <div class="card">
            <div class="card-body profile-card">
                <center class="mt-4"> <img src="{{asset($user->fotoPerfil)}}"
                        class="rounded-circle" width="150" />
                    <h4 class="card-title mt-2">{{$user->name}} {{$user->apellidos}} </h4>
                    <h6 class="card-subtitle">Desarrollador de Software</h6>
                   
                </center>
            </div>
        </div>
    </div>
    <!-- Column -->
    <!-- Column -->
    <div class="col-lg-8 col-xlg-9 col-md-7">
        <div class="card">
            <div class="card-body">
                <form class="form-horizontal form-material mx-2" 
                    action="{{route('updatePerfil')}}" method="POST">
                    @csrf
                    <div class="form-group">
                        <label class="col-md-12 mb-0">Nombres</label>
                        <div class="col-md-12">
                            <input type="text" value="{{$user->name}}" id="name" name="name"
                                class="form-control ps-0 form-control-line" >
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-12 mb-0">Apellidos</label>
                        <div class="col-md-12">
                            <input type="text" value="{{$user->apellidos}}" id="apellidos" name="apellidos"
                                class="form-control ps-0 form-control-line" >
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email" class="col-md-12">Email</label>
                        <div class="col-md-12">
                            <input type="email" value="{{$user->email}}"
                                class="form-control ps-0 form-control-line" name="email"
                                id="email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-12 mb-0">Teléfono/Celular</label>
                        <div class="col-md-12">
                            <input type="text" value="{{$user->telefono}}" id="telefono" name="telefono"
                                class="form-control ps-0 form-control-line">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12 d-flex">
                            <button type="submit" class="btn btn-success mx-auto mx-md-0 text-white">
                                Guardar Datos</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Column -->
</div>
@endsection