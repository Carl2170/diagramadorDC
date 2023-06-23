var bandera=true
var bandera1=true
            var selectClases=`<select class="form-select" aria-label="Default select example" id="listaClases"name="listaClases">
                              <option selected value="">Seleccione una clase</option>`;
var clasesYaCreadas=[];

var camposEditAtributos=[];

$(document).ready(function() {
    $("#addInputBtnAtributo").click(function() {
      var input = ` <div class="row">
                <div class="col-4">
                <small>nombre</small>
                  <input type="text" id="descripcionA" name="descripcionA" placeholder="Nombre atributo"class="form-control">
                </div>
                <div class="col-3">
                <small>tipo de dato</small>
                  <select class="form-select" aria-label="Default select example"name="tipoAtributo" id="tipoAtributo">
                    <option selected value="">ninguno</option>
                    <option value="int">int</option>
                    <option value="string">string</option>
                    <option value="boolean">byte</option>
                    <option value="char">char</option>
                    <option value="double">double</option>
                    <option value="float">float</option>
                    <option value="long">long</option>
                    <option value="short">short</option>
                    <option value="">none</option>
  
                  </select>
                </div>
                <div class="col-3">
                <small>tipo</small>
                <select class="form-select" aria-label="Default select example" name="tipoA"id="tipoA">
                  <option selected value="">ninguno</option>
                  <option value="public">Public</option>
                  <option value="protected">Protected</option>
                  <option value="private">Private</option>
                  <option value="package">Package</option>
                </select>
              </div>
              </div>`
      $("#inputAtributo").append(input);
    });
  
    $("#BtnAgregarClase").click(function(){
      //ATRIBUTOS
      var nombreClase = document.getElementById('nombreClase');
      var nombresAtributos = document.querySelectorAll('input[name="descripcionA"]');
      var tipoDatosAtributos = document.querySelectorAll('select[name="tipoAtributo"]');
      var inputstipoA = document.querySelectorAll('select[name="tipoA"]');
    
      var arrayNombresAtributos = [];
      var arrayTipoDatoAtributos =[];
      var arrayTipoAtributo =[];

      nombresAtributos.forEach(function(input) {
        var valor = input.value;
        arrayNombresAtributos.push(valor);
      });

      tipoDatosAtributos.forEach(function(select) {
        var valor2 = select.value;
        arrayTipoDatoAtributos.push(valor2);
      });

      inputstipoA.forEach(function(select) {
        var valor3 = select.value;      
        arrayTipoAtributo.push(valor3);
      });
  
      //METODOS
      var nombresmetodos = document.querySelectorAll('input[name="descripcionM"]');
      var parametros = document.querySelectorAll('input[name="parametroM"]');
      var tipoRetorno = document.querySelectorAll('select[name="tipoRetornoM"]');
      var tipoMetodo = document.querySelectorAll('select[name="tipoM"]')
     
            
      var arrayNombresMetodos = [];
      var arrayParametros =[];
      var arrayTipoRetorno =[];
      var arrayTipoMetodo =[];
        // Iterar sobre los inputs nombreAtributo
      nombresmetodos.forEach(function(input) {
        var nombreA = input.value;
        arrayNombresMetodos.push(nombreA);
      });
  
      parametros.forEach(function(input) {
        var parametro = input.value;
        if(parametro !=""){
          arrayParametros.push(parametro);
        }       
      }); 
  
      tipoRetorno.forEach(function(select) {
        var tipRetor = select.value;       
        arrayTipoRetorno.push(tipRetor);
      }); 
  
      tipoMetodo.forEach(function(select) {
        var tipMetodo = select.value;       
        arrayTipoMetodo.push(tipMetodo);
      }); 
    
      var arrayAtributos =formarArrayAtributos(arrayNombresAtributos, arrayTipoDatoAtributos,arrayTipoAtributo);
      var arrayMetodos = formarArrayMetodo(arrayNombresMetodos, arrayParametros,arrayTipoRetorno,arrayTipoMetodo);
      agregarNodo(nombreClase.value,nombreClase.value,arrayAtributos, arrayMetodos);
      
      $('#agregarClase').modal('hide')
    });
  
    $("#addInputBtnMetodo").click(function() {
      var input = `<div class="row">
                  <div class="col-4">
                    <small>Nombre </small>
                    <input type="text" id="descripcionM" placeholder="nombre" name="descripcionM"class="form-control">
                  </div>
                  <div class="col-2">
                    <small>Parámetro</small>
                    <input type="text" id="parametroM" placeholder="parametro" name="parametroM"class="form-control">
                  </div>
                  <div class="col-2">
                    <small>Tipo de retorno</small>
                   
                    <select class="form-select" aria-label="Default select example" id="tipoRetornoM"name="tipoRetornoM">
                      <option selected value="">ninguno</option>
                      <option value="int">int</option>
                      <option value="string">string</option>
                      <option value="boolean">byte</option>
                      <option value="char">char</option>
                      <option value="double">double</option>
                      <option value="float">float</option>
                      <option value="long">long</option>
                      <option value="short">short</option>
               
  
                    </select>
                  </div>
                  <div class="col-3">
                    <small>Tipo de método</small>
                   
                    <select class="form-select" aria-label="Default select example" name="tipoM"id="tipoM">
                      <option selected value="">ninguno</option>
                      <option value="public">Public</option>
                      <option value="protected">Protected</option>
                      <option value="private">Private</option>
                      <option value="package">Package</option>
                    </select>
                  </div>
                
                </div>`
      $("#inputAddMetodo").append(input);
    });
    
    $("#BtnAgregarRelacion").click(function(){
      formarRelacion();
      $('#agregarRelacion').modal('hide')
    });

    //edicion de la tabla
    $("#BtnEditAtributos").click(function(){
        var tbodyAtributos = document.getElementById('campoAtributo');
        var  filas = tbodyAtributos.getElementsByTagName('tr');

        var arrayName = [];
        var arrayTipo =[];
        var arrayVisibility =[];

        for (var i = 0; i < filas.length; i++) {
          var fila = filas[i];
          var columnas = fila.getElementsByTagName('td');

           for (var j = 0; j < columnas.length; j++) {
            var columna = columnas[j].textContent;
           
            switch (j) {
              case 0:
              arrayName.push(columna);
              break;
              case 1:
              arrayTipo.push(columna);
              break;
              case 2:
              arrayVisibility.push(columna);
              break;
              default:
              break;
            }
            // Haz algo con la columna actual...
              }
        }

        var tituloEdicionAtributos= document.getElementById('tituloEdicionAtributos');
        var arrayAtributosCompleto = formarArrayAtributos(arrayName,arrayTipo,arrayVisibility);
        var arrayMeto=[{name:""}]
        
        agregarNodo(tituloEdicionAtributos.innerHTML,tituloEdicionAtributos.innerHTML,arrayAtributosCompleto,arrayMeto);
        $('#editarAtributos').modal('hide')
       });

    //editar datos multiplicidad
    $("#guardarCambiosMultiplicidad").click(function(){
     

  });
    });
  
  
  function formarArrayAtributos(namearrayNombresAtributos, arrayTipoDatoAtributos,arrayTipoAtributo){
      var atributos=[];
  
      for (let i = 0; i < namearrayNombresAtributos.length; i++) {
           var a = {name:namearrayNombresAtributos[i],
                    type:arrayTipoDatoAtributos[i],
                    visibility:arrayTipoAtributo[i]
                    }
             atributos.push(a);       
      };
      return atributos;
  }
  
  function formarArrayMetodo(arrayNombresMetodos, arrayParametros,arrayTipoRetorno,arrayTipoMetodo){
    var metodos=[];
    var parametros = [];
    for (let i = 0; i < arrayNombresMetodos.length; i++) {
      var para= {name: arrayParametros[i], type: arrayTipoRetorno[i]};
      parametros.push(para);
      var a = {name:arrayNombresMetodos[i],
               parameters: parametros,
               visibility:arrayTipoMetodo[i]
               }
      parametros=[];
      metodos.push(a);      
      return metodos;
    };
  }
  
  function agregarNodo(key, name, properties, methods) {
    if(methods[0].name  =="" || methods==""){
      var nuevoNodo = {
        key: key,
        name: name,
        properties: properties,
      };
    }else{
      var nuevoNodo = {
        key: key,
        name: name,
        properties: properties,
        methods: methods
      };
    
    }
    actualizarNodos(nuevoNodo);

  }  

  function openModalRelacion(){
  $('#agregarRelacion').modal('show');
  var selectOrigen = document.getElementById('listaClaseOrigen');
  var selectDestino = document.getElementById('listaClaseDestino');
  
  if(selectOrigen && selectDestino){
    console.log("existe");
  }else{
    console.log("no existe");
  }
  selectOrigen.options.length = 1; // Mantener la opción predeterminada y eliminar las opciones anteriores
  selectDestino.options.length = 1;
 
  var arreglo = devolverClasses();

  for (var i = 0; i < arreglo.length; i++) {
    var clase = arreglo[i].name;

      clasesYaCreadas.push(clase);
      var optionElementoOrigen = document.createElement('option');
      optionElementoOrigen.value = clase;
      optionElementoOrigen.textContent = clase;

      var optionElementDestino = document.createElement('option');
      optionElementDestino.value = clase;
      optionElementDestino.textContent = clase;

      selectOrigen.appendChild(optionElementoOrigen);
      selectDestino.appendChild(optionElementDestino);    
  }
  }

  function formarRelacion(){
    var claseOrigen = document.getElementById('listaClaseOrigen');
    var claseDestino = document.getElementById('listaClaseDestino');
    var tipoRelacion = document.getElementById('tipoRelacion');
    var multiplicidadOrigen = document.getElementById('multiplicidadOrigen');
    var multiplicidadDestino = document.getElementById('multiplicidadDestino');
    var textoRelacion = document.getElementById('textoRelacion');
    var nuevaRelacion=formarNuevoLinkData(claseOrigen.value,claseDestino.value,
                                          tipoRelacion.value, multiplicidadOrigen.value,
                                           multiplicidadDestino.value, textoRelacion.value)
    console.log(nuevaRelacion);
    agregarRelacion(nuevaRelacion);
  }
  
  function formarNuevoLinkData(classeOrigen,claseDestino,relacionInput, multiplicidadOrigen,multiplicidadDestino, textoRelacion){
    var relacion ="";
    var category="generalTemplate";
    console.log(relacionInput);
    switch (relacionInput) {
      case "herencia":
          relacion="generalization"
      break;
      case "composicion":
          relacion="aggregation";
          category="compositionTemplate";
      break;
      case "agregacion":
        relacion="aggregation";
    break;  
  //   case "muchos a muchos":
  //     relacion="combinedTemplate";
  //     category="combinedTemplate";
  // break; 
      default:
        break;
    }
   return {from:classeOrigen, to:claseDestino, relationship:relacion, 
            category:category, multiplicidadOrigen: multiplicidadOrigen,
             multiplicidadDestino:multiplicidadDestino, textoRelacion: textoRelacion} ; 
  }

  //edicion de atributos
  function openModalEdicionAtributos(link){
    $('#editarAtributos').modal('show')

    // var atributos = link.ub.properties;
    var atributos = link.properties;
    var campoAtributo= document.getElementById('campoAtributo');
    var tituloEdicionAtributos= document.getElementById('tituloEdicionAtributos');
    campoAtributo.innerHTML = '';

    for (var i = 0; i < atributos.length; i++) {    
      var atributoNombre = atributos[i].name;
      var  atributoTipo = atributos[i].type;
      var  atributoVisibility = atributos[i].visibility;

      var nuevoTR =formarAtributoTDs(atributoNombre, atributoTipo, atributoVisibility);
        campoAtributo.append(nuevoTR);  
     }
     tituloEdicionAtributos.innerHTML=link.key

  }

  //edicion de metodos
  function openModalEdicionMetodos(link){
    $('#editarMetodos').modal('show')
      console.log(link);

    var metodos= link.methods;
    var campoMetodo= document.getElementById('campoMetodo');
    var tituloEdicionMetodos= document.getElementById('tituloEdicionMetodos');

    
    campoMetodo.innerHTML = '';
    for (let k = 0; k < metodos.length; k++) {
      var nombreMetodo= metodos[k].name;
      var nombreParametroMetodo = metodos[k].parameters[0].name;
      console.log(nombreParametroMetodo);
      var tipoParametroMetodo = metodos[k].parameters[0].type;
      console.log(tipoParametroMetodo);

      var visibilityMetodo = metodos[k].visibility;
      
      var nuevoTR2 = formarMetodosTDs(nombreMetodo,nombreParametroMetodo,tipoParametroMetodo,visibilityMetodo);
    
        campoMetodo.append(nuevoTR2); 
      
    } 
    tituloEdicionMetodos.innerHTML=link.key
   
  }

  function formarTR(){
    var nuevoTR = document.createElement('tr');
  nuevoTR.classList.add("hide");
    return nuevoTR;
  }

  function formarAtributoTDs(name, tipo, visibility){
    var campoNombreAtributo = document.createElement('td');
        campoNombreAtributo.value = name;
        campoNombreAtributo.textContent =name;
        campoNombreAtributo.setAttribute("contenteditable", "true");
  
    var campoTipoAtributo = document.createElement('td');
    campoTipoAtributo.value = tipo;
        campoTipoAtributo.textContent = tipo;
        campoTipoAtributo.setAttribute("contenteditable", "true");
  
        var campoVisibilityAtributo = document.createElement('td');
        campoVisibilityAtributo.value = visibility;
        campoVisibilityAtributo.textContent = visibility;
        campoVisibilityAtributo.setAttribute("contenteditable", "true");

  var tr = formarTR();
  var btn =btnEliminar();
  tr.append(campoNombreAtributo);
  tr.append(campoTipoAtributo);
  tr.append(campoVisibilityAtributo);
  tr.append(btn);
    return tr;
  }

  function formarMetodosTDs(nameMetodo, nameParametro, tipoParametro, visibilidad){
    var campoNombreMetodo = document.createElement('td');
    campoNombreMetodo.value = nameMetodo;
    campoNombreMetodo.textContent =nameMetodo;
    campoNombreMetodo.setAttribute("contenteditable", "true");
  
    var campoParametro = document.createElement('td');
    campoParametro.value = nameParametro;
    campoParametro.textContent = nameParametro;
    campoParametro.setAttribute("contenteditable", "true");
  
    var campoTipoParametro = document.createElement('td');
    campoTipoParametro.value = tipoParametro;
    campoTipoParametro.textContent = tipoParametro;
    campoTipoParametro.setAttribute("contenteditable", "true");

    var campoVisibilidad = document.createElement('td');
    campoVisibilidad.value = visibilidad;
    campoVisibilidad.textContent = visibilidad;
    campoVisibilidad.setAttribute("contenteditable", "true");

  var tr = formarTR();
  var btn =btnEliminar();
  tr.append(campoNombreMetodo);
  tr.append(campoParametro);
  tr.append(campoTipoParametro);
  tr.append(campoVisibilidad);
  tr.append(btn);
  console.log(tr);  
  return tr;
  }

  function btnEliminar(){
    var btn1 = document.createElement('button');
    
    btn1.setAttribute("class","btn btn-danger")
    btn1.setAttribute("onclick","eliminarAtributo()")
    
    btn1.innerHTML="Eliminar";
        return btn1;
  }

  function eliminarAtributo() {
   var titulo =document.getElementById('tituloEdicionAtributos');
   eliminarItemProperties(titulo.textContent);
  }

  function BtnAgregarAtributo(){
    var campoAtributo= document.getElementById('campoAtributo');
    var nuevoCampo= formarAtributoTDs("","","");
    campoAtributo.append(nuevoCampo);
  }
  
  function BtnAgregarMetodo(){
    var campoMetodo= document.getElementById('campoMetodo');
    var nuevoCampo= formarMetodosTDs("","","","");
    campoMetodo.append(nuevoCampo);
  }

  function openModalMultiplicidad(datos){
  
    var colClaseOrigen = document.getElementById('colMultiOrigen');
    var colClaseDestino = document.getElementById('colMultiDestino');
    var nombreRel= document.getElementById('nombreRel');

    nombreRel.innerHTML='';
    colClaseOrigen.innerHTML = '';
    colClaseDestino.innerHTML = '';

    var multiplicidadOrigen = document.getElementById('multiClaseOrigen');
    var multiplicidadDestino = document.getElementById('multiClaseDestino');
    
   //nombre de las clases
    multiplicidadOrigen.textContent = datos.from
    multiplicidadDestino.textContent = datos.to
    
    //texto de la relacion
    var inputTextoMul = crearInput("inputTextoMul",datos.textoRelacion);
    nombreRel.append(inputTextoMul);
    
    //multiplicidad
    var inputMulOrigen = crearInput("inputMulOrigen",datos.multiplicidadOrigen);
    var inputMulDestino = crearInput("inputMulDestino",datos.multiplicidadDestino);

    colClaseOrigen.append(inputMulOrigen);
    colClaseDestino.append(inputMulDestino);

    $('#editarMultiplicidad').modal('show')
  }

  function crearInput(id, texto){
    var inputNuevo = document.createElement('input');
    inputNuevo.setAttribute("class", "form-control");
    inputNuevo.setAttribute("id", id);
    inputNuevo.setAttribute("type", "text");
    inputNuevo.innerHTML=texto;
    inputNuevo.value=texto;
    return inputNuevo;
  }

  function guardarCambiosMultiplicidad(){
    var cuadroTexto = document.getElementById("inputTextoMul");
    var inputMulOrigen = document.getElementById("inputMulOrigen");
    var inputMulDestino = document.getElementById("inputMulDestino");
    
    var textMulOrigen = inputMulOrigen.value;
    var textMulDestino = inputMulDestino.value;

    var classOrigen = document.getElementById("multiClaseOrigen");
    var classDestino = document.getElementById("multiClaseDestino");
    
    //si existe algun cambio en los inputs
    inputMulOrigen.addEventListener("input", function(event) {
    textMulOrigen.value=event.target.value
  });

    inputMulDestino.addEventListener("input", function(event) {
      textMulDestino.value=event.target.value
    });

    cuadroTexto.addEventListener("input", function(event) {
      cuadroTexto.value=event.target.value
    });

    actualizarMultiplicidad(cuadroTexto.value,inputMulOrigen.value,
      inputMulDestino.value, classOrigen.textContent, classDestino.textContent);
    
      $('#editarMultiplicidad').modal('hide')

  }
  
  
  
  