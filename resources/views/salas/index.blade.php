@extends('layouts.plantilla')
@section('title')
    Perfil
@endsection

@section('sobreTitulo')
    <h3>Salas</h3>
@endsection

@section('content')
<div class="card">

  <div class="card-body">
    <div class="card-body">
      <form class="form-horizontal form-material mx-2" 
      action="{{route('sala.store')}}" method="POST">
       @csrf
        <div class="form-group">
              <label class="col-md-12 mb-0">Nombre</label>
              <div class="col-md-12">
                  <input type="text"  id="nombre" name="nombre"
                      class="form-control ps-0 form-control-line">
              </div>
          </div>
          <div class="form-group">
              <label class="col-md-12 mb-0">Descripción</label>
              <div class="col-md-12">
                  <input type="text"  id="descripcion" name="descripcion"
                      class="form-control ps-0 form-control-line">
              </div>
          </div>
          <div class="d-flex flex-wrap mb-3">
            <button href="#" type="submit"
            class="mt-2 waves-effect waves-dark btn btn-primary btn-md btn-rounded">
            <i class="mdi mdi-account-multiple"></i>
            <span>Crear sala</span></button>
        </div>
      </form>
  </div>
  </div>
</div>
  <div class="card">
    <div class="card-header">
        <h3>Salas</h3>
    </div>
    <div class="card-body">
      @if ($salas ==null)
      <h4>No tiene salas creadas</h4>
      @else
     @include('salas.tabla')
      @endif
    </div>
  </div>
@endsection