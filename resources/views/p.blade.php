<html lang="en">
<head >
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Diagrama2</title>
    <script src="{{asset('js/go/go.js')}}"></script>
    
    {{-- <script src="{{asset('js/diagramador/constructor.js')}}"></script> --}}

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>
<body onload="init()">


  {{-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button> --}}
  
  <!-- Modal -->
 

    <div class="container"><br>
      <div class="row align-items-center">
   
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
    <script>
         function init() {
      var $ = go.GraphObject.make; // Acceso rápido a la función make
      var myDiagram = $(go.Diagram, "myDiagramDiv");

      // Definir un estilo para los enlaces
      myDiagram.linkTemplate = $(
        go.Link,
        { routing: go.Link.Normal },
        $(go.Shape, { stroke: "black", strokeWidth: 2 })
      );

      // Crear nodos
      var node1 = $(
        go.Node,
        "Auto",
        { position: new go.Point(100, 100) },
        $(go.TextBlock, "Nodo 1")
      );
      var node2 = $(
        go.Node,
        "Auto",
        { position: new go.Point(300, 100) },
        $(go.TextBlock, "Nodo 2")
      );
      var node3 = $(
        go.Node,
        "Auto",
        { position: new go.Point(200, 200) },
        $(go.TextBlock, "Nodo 3")
      );

      // Añadir los nodos al diagrama
      myDiagram.add(node1);
      myDiagram.add(node2);
      myDiagram.add(node3);

      // Crear el enlace en forma de "T"
      var link = $(go.Link);
      link.routing = go.Link.Orthogonal; // Enrutamiento ortogonal para el enlace

      // Clonar el enlace para desbloquearlo y agregar los puntos de enlace
      var clonedLink = link.clone();
      clonedLink.addPoint(new go.Point(100, 100));
      clonedLink.addPoint(new go.Point(100, 200));
      clonedLink.addPoint(new go.Point(200, 200));

      // Añadir el enlace al diagrama
      myDiagram.add(clonedLink);
    }

    // Esperar a que se cargue completamente la página
  
    </script>
<script src="{{asset('assets/plugins/jquery/dist/jquery.min.js')}}"></script>
    
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


<script src="{{asset('js/generadorDC/prueba.js')}}"></script>

{{-- <script src= "{{asset('js/diagramador/funciones.js')}}"></script>
<script src= "{{asset('js/diagramador/funcionesAddHTML.js')}}"></script> --}}
</body>

</html>
