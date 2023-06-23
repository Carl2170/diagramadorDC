@extends('layouts.diagrama')

@section('title','Diagrama')
    
@section('sobreTitulo')
    <h3 class="mt-3">Diagrama de clase</h3>
@endsection

@section('content')
    <div class="card">
        <div class="card-body">
            @include('diagrama.modalClase')
            @include('diagrama.modalRelaciones')
            @include('diagrama.modalEditAtributos')
            @include('diagrama.modalEditMetodos')
            @include('diagrama.modalMultiplicidad')

            <div class="container"><br>
                <div class="row align-items-center">
                  <div class="col-1">
                    <button class="btn btn-success" 
                    data-bs-toggle="modal" data-bs-target="#agregarClase">
                    <small>Agregar clase</small>
                    </button></div>
                  <div class="col-1">
                    <a onclick="openModalRelacion();" class="btn btn-primary"><small>Agregar Relación</small></a>        
                  </div>
                </div>
                <br>
                <div id="myDiagramDiv" style="witdh:300px; height:800px; border:1px solid black;"></div>
          
              </div>
        </div>
    </div>
@endsection

@section('js')
<script src="{{asset('js/generadorDC/diagrama.js')}}"></script>
<script src="{{asset('js/generadorDC/funciones.js')}}"></script>
@endsection