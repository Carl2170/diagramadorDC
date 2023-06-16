<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Diagrama</title>
    <script src="{{asset('js/go/go.js')}}"></script>
    <script src="{{asset('js/diagramador/funciones.js')}}"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

</head>
<body onload="init()">
  <div class="row">
    <div class="col-2">
      <h3>Elementos</h3>
      <div id="myPaletteDiv"style="witdh:150px; height:800px; border:1px solid black;"></div>
    </div>
    <div class="col-10">
      <div id ="myDiagramDiv" style="witdh:300px; height:800px; border:1px solid black;">
    </div>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>

</html>
