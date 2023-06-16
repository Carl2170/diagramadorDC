@extends('layouts.plantilla')
@section('title')
    Dashboard
@endsection


@section('sobreTitulo')
    <h3>Dashboard</h3>
@endsection

@section('content')

<div class="card">
    <div class="card-body">
        <a href="{{route('diagrama')}}" type="submit"
        class="mt-2 waves-effect waves-dark btn btn-primary btn-md btn-rounded">
        <i class="mdi mdi-account-multiple"></i>
        <span>Diagrama</span></a>
    </div>
</div>
<div class="col-lg-12">
    <div class="card">
        <div class="card-body">
                <div class="card-header">
                    <h2>Lista de proyectos</h2>
                </div>
                <div>
                    
                </div>
        </div>
    </div>
</div>
@endsection
