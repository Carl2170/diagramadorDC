@extends('layouts.componentes.tabla')

@section('titulo_tabla','Lista de salas')

@section('estilo_encabezado','background: #b0c7ff')
    

@section('encabezados')
<th  class="border-top-0">Nombre</th>
<th class="border-top-0">Descripción</th>
<th class="border-top-0">Acciones</th>
@endsection

@section('tuplas')
@foreach ($salas as $sala)
<tr >
    <th style="" class="border-top-0">{{$sala->id}}</th>
    <th class="border-top-0">{{$sala->nombre}}</th>
    <th class="border-top-0">{{$sala->descripcion}}</th>
    <th class="border-top-0">
        <div class="row">
            <button class="btn btn-warning col-4">Editar</button>
            <button class="ml-2 btn btn-info col-4 text-light">Agregar Invitados</button>
        </div>
    </th>

</tr>
    
@endforeach
@endsection