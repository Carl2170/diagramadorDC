var banderaSelectRelaciones=true;
var arregloClassesCreadas=[];
var arregloClasesYaCreadas=nodedata;
var c =0;
var selectClases=`<select class="form-select" aria-label="Default select example" id="tipoRetornoM"name="tipoRetornoM">
                  <option selected value="">Seleccione una clase</option>`;

// function agregarNodo(key, name, properties, methods) {
//   if(methods[0].name  ==""){
//     var nuevoNodo = {
//       key: key,
//       name: name,
//       properties: properties,
//     };
//   }else{
//     var nuevoNodo = {
//       key: key,
//       name: name,
//       properties: properties,
//       methods: methods
//     };
  
//   }
//   actualizar(nuevoNodo);
//     return nuevoNodo;
// } 
 
// function openmodalRelacion(){

//   $('#agregarRelacion').modal('show')
  
//   for (let i = 0; i < arregloClasesYaCreadas.length; i++) {
//     var clase = arregloClasesYaCreadas[i].name;
//     if(!arregloClassesCreadas.includes(clase)){
//       arregloClassesCreadas.push(clase);
//       c++;
//       selectClases += `<option value="${clase}">${clase}</option>`;
//     }
//   }
//   $("#listarClasesOrigen").append(selectClases);
//   $("#listarClasesDestino").append(selectClases);
//   console.log(c);
  
  
// }

function save() {
  saveDiagramProperties();  // do this first, before writing to JSON
  var guardado= myDiagram.model.toJson();
  myDiagram.isModified = false;
  console.log(guardado);
}

function saveDiagramProperties() {
  myDiagram.model.modelData.position = go.Point.stringify(myDiagram.position);
}




  
  