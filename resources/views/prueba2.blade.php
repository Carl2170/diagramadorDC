<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Diagrama2</title>
    <script src="{{asset('js/go/go.js')}}"></script>
    
    {{-- <script src="{{asset('js/diagramador/constructor.js')}}"></script> --}}

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>
<body onload="init();">

  {{-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button> --}}
  
  <!-- Modal -->
 
  @include('diagrama.modalClase')
  @include('diagrama.modalRelaciones')

    <div class="container"><br>
      <div class="row align-items-center">
        <div class="col-1">
          <button class="btn btn-success" 
          data-bs-toggle="modal" data-bs-target="#agregarClase">
          <small>Agregar clase</small>
          </button></div>
        <div class="col-1">
          <a onclick="openModalRelacion();" class="btn btn-primary">Agregar Relación</a>        
        </div>
      </div>
      <br>
      <div id="myDiagramDiv" style="witdh:300px; height:800px; border:1px solid black;"></div>

    </div>
{{-- <button id="SaveButton" onclick="save()">Save</button>
      <button onclick="load()">Load</button>
      Diagram Model saved in JSON format:
    </div>
    <textarea id="mySavedModel" style="width:100%;height:300px">
      { "class": "go.GraphLinksModel",
      "linkFromPortIdProperty": "fromPort",
      "linkToPortIdProperty": "toPort",
      "nodeDataArray": [
     ],
      "linkDataArray": [
     ]}
    </textarea> --}}
<script src="{{asset('assets/plugins/jquery/dist/jquery.min.js')}}"></script>
    
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


<script src="{{asset('js/generadorDC/diagrama.js')}}"></script>
<script src="{{asset('js/generadorDC/funciones.js')}}"></script>

{{-- <script src= "{{asset('js/diagramador/funciones.js')}}"></script>
<script src= "{{asset('js/diagramador/funcionesAddHTML.js')}}"></script> --}}
</body>

</html>
