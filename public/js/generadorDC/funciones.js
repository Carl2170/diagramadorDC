var bandera=true
            var selectClases=`<select class="form-select" aria-label="Default select example" id="listaClases"name="listaClases">
                              <option selected value="">Seleccione una clase</option>`;
var clasesYaCreadas=[];

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
    if(methods[0].name  ==""){
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
    var nuevaRelacion=formarNuevoLinkData(claseOrigen.value,claseDestino.value,tipoRelacion.value)
    agregarRelacion(nuevaRelacion);
  }
  
  function formarNuevoLinkData(classeOrigen,claseDestino,relacionInput){
    var relacion ="";
    var category="generalTemplate";
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
      default:
        break;
    }
   return {from:classeOrigen, to:claseDestino, relationship:relacion, category:category};
  }




  
  
  
  