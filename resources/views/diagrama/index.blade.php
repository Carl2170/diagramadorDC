@extends('layouts.diagrama')

@section('title','Diagrama')
    
@section('sobreTitulo')
    <h3 class="mt-3">Diagrama de clase</h3>
@endsection

@section('content')
    <div class="card">
        <div class="card-body">
            <h3>vista</h3>
            <div class="row">
                {{-- <div class="col-3">
                    <div id="myPaletteDiv" style="width: 250px;height:900px; 
                     background-color: #DAE4E4;">
                    </div>
               </div>     --}}
                <div class="col-9">
                    <div id="myDiagramDiv"
                     style="max-width: auto; height:900px; 
                     background-color: #DAE4E4;">
                     </div>
                </div>
            </div>
            {{-- <div id="myPaletteDiv"></div>
            <div id="myDiagramDiv"></div> --}}
        </div>
    </div>
@endsection

@section('js')
<script src="{{asset('js/go/go.js')}}"></script>
<script src="{{asset('js/diagramador/funciones.js')}}"></script>

@endsection