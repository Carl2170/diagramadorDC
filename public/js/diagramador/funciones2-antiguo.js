
var nodedata=[];
var linkdata=[];
var modal = document.getElementById('exampleModal');
function init(){
  var $ = go.GraphObject.make;

  var myDiagram = $(go.Diagram, "myDiagramDiv",
                      {
                      "undoManager.isEnabled": true,
                       layout: $(go.TreeLayout,
                        { // this only lays out in trees nodes connected by "generalization" links
                          angle: 90,
                          path: go.TreeLayout.PathSource,  // links go from child to parent
                          setsPortSpot: false,  // keep Spot.AllSides for link connection spot
                          setsChildPortSpot: false,  // keep Spot.AllSides
                          // nodes not connected by "generalization" links are laid out horizontally
                          arrangement: go.TreeLayout.ArrangementHorizontal,
                          
                        })
                      }
                    );

                    myDiagram.allowDrop =true
  function convertVisibility(v) {
        switch (v) {
          case "public": return "+";
          case "private": return "-";
          case "protected": return "#";
          case "package": return "~";
          default: return v;
        }
  }
  
  var propertyTemplate =$(go.Panel, "Horizontal",
                      // property visibility/access
                        $(go.TextBlock,
                        { isMultiline: false, editable: false, width: 12 },
                        new go.Binding("text", "visibility", convertVisibility)),
                      // property name, underlined if scope=="class" to indicate static property
                      $(go.TextBlock,
                        { isMultiline: false, editable: true },
                        new go.Binding("text", "name").makeTwoWay(),
                        new go.Binding("isUnderline", "scope", s => s[0] === 'c')),
                      // property type, if known
                      $(go.TextBlock, "",
                        new go.Binding("text", "type", t => t ? ": " : "")),
                      $(go.TextBlock,
                        { isMultiline: false, editable: true },
                        new go.Binding("text", "type").makeTwoWay()),
                      // property default value, if any
                      $(go.TextBlock,
                        { isMultiline: false, editable: false },
                        new go.Binding("text", "default", s => s ? " = " + s : ""))
                    );
            
  // the item template for methods
  var methodTemplate =$(go.Panel, "Horizontal",
                      // method visibility/access
                      $(go.TextBlock,
                        { isMultiline: false, editable: false, width: 12 },
                        new go.Binding("text", "visibility", convertVisibility)),
                      // method name, underlined if scope=="class" to indicate static method
                      $(go.TextBlock,
                        { isMultiline: false, editable: true },
                        new go.Binding("text", "name").makeTwoWay(),
                        new go.Binding("isUnderline", "scope", s => s[0] === 'c')),
                      // method parameters
                      $(go.TextBlock, "()",
                        // this does not permit adding/editing/removing of parameters via inplace edits
                        new go.Binding("text", "parameters", parr => {
                          var s = "(";
                          for (var i = 0; i < parr.length; i++) {
                            var param = parr[i];
                            if (i > 0) s += ", ";
                            s += param.name + ": " + param.type;
                          }
                          return s + ")";
                        })),
                      // method return type, if any
                      $(go.TextBlock, "",
                        new go.Binding("text", "type", t => t ? ": " : "")),
                      $(go.TextBlock,
                        { isMultiline: false, editable: true },
                        new go.Binding("text", "type").makeTwoWay())
                    );
  var classe =$(go.Node, "Auto",
              {
                locationSpot: go.Spot.Center,
                fromSpot: go.Spot.AllSides,
                toSpot: go.Spot.AllSides
              },
              $(go.Shape, { fill: "lightyellow" }),
              $(go.Panel, "Table",
                { defaultRowSeparatorStroke: "black" },
                // header
                $(go.TextBlock,
                  {
                    row: 0, columnSpan: 2, margin: 3, alignment: go.Spot.Center,
                    font: "bold 12pt sans-serif",
                    isMultiline: false, editable: true
                  },
                  new go.Binding("text", "name").makeTwoWay()),
                // properties
                $(go.TextBlock, "Properties",
                  { row: 1, font: "italic 10pt sans-serif" },
                  new go.Binding("visible", "visible", v => !v).ofObject("PROPERTIES")),
                $(go.Panel, "Vertical", { name: "PROPERTIES" },
                  new go.Binding("itemArray", "properties"),
                  {
                    row: 1, margin: 3, stretch: go.GraphObject.Fill,
                    defaultAlignment: go.Spot.Left, background: "lightyellow",
                    itemTemplate: propertyTemplate
                  }
                ),
                $("PanelExpanderButton", "PROPERTIES",
                  { row: 1, column: 1, alignment: go.Spot.TopRight, visible: false },
                  new go.Binding("visible", "properties", arr => arr.length > 0)),
                // methods
                $(go.TextBlock, "Methods",
                  { row: 2, font: "italic 10pt sans-serif" },
                  new go.Binding("visible", "visible", v => !v).ofObject("METHODS")),
                $(go.Panel, "Vertical", { name: "METHODS" },
                  new go.Binding("itemArray", "methods"),
                  {
                    row: 2, margin: 3, stretch: go.GraphObject.Fill,
                    defaultAlignment: go.Spot.Left, background: "lightyellow",
                    itemTemplate: methodTemplate
                  }
                ),
                $("PanelExpanderButton", "METHODS",
                  { row: 2, column: 1, alignment: go.Spot.TopRight, visible: false },
                  new go.Binding("visible", "methods", arr => arr.length > 0))
              )
            );


    myDiagram.nodeTemplate =
          $(go.Node, "Auto",
          
          // {
          //   contextMenu:  // Definir el menú contextual
          //     $(go.Adornment, "Vertical",{ alignment: new go.Spot(1, 0.5, -10, 0), alignmentFocus: go.Spot.Left },
          //       $(go.Panel, "Auto",
          //         $(go.Shape, "Rectangle", { fill: "lightyellow" }),
          //         $(go.Placeholder)  // Contenido del menú contextual
          //       ),
          //       { // Configuración adicional del menú contextual
          //         click: function(e, obj) {
          //           // Evitar que el menú contextual se cierre al hacer clic en él
          //           e.diagram.stopTool();
          //         }
          //       }
          //     )
          // },
            {
              locationSpot: go.Spot.Center,
              fromSpot: go.Spot.AllSides,
              toSpot: go.Spot.AllSides,
            
              selectionAdornmentTemplate:
              $(go.Adornment, "Spot",
                $(go.Panel, "Auto",
                  // this Adornment has a rectangular blue Shape around the selected node
                  $(go.Shape, { fill: null, stroke: "dodgerblue", strokeWidth: 3 }),
                  $(go.Placeholder)
                ),
              ),
              contextMenu:     // define a context menu for each node
              $("ContextMenu",  // that has one button
                $("ContextMenuButton",
                  
                  $(go.TextBlock, 
                    {text:"titulo",margin: 3,  font: "14pt monospace"} ),
                  { click: agregarNodo })
                // more ContextMenuButtons would go here
              )  // end Adornment 
            },
            $(go.Shape, { fill: "lightyellow" }),
            $(go.Panel, "Table",
              { defaultRowSeparatorStroke: "black" },
              // header
              $(go.TextBlock,
                {
                  row: 0, columnSpan: 2, margin: 3, alignment: go.Spot.Center,
                  font: "bold 12pt sans-serif",
                  isMultiline: false, editable: true
                },
                new go.Binding("text", "name").makeTwoWay()),
              // properties
              $(go.TextBlock, "Properties",
                { row: 1, font: "italic 10pt sans-serif" },
                new go.Binding("visible", "visible", v => !v).ofObject("PROPERTIES")),
              $(go.Panel, "Vertical", { name: "PROPERTIES" },
                new go.Binding("itemArray", "properties"),
                {
                  row: 1, margin: 3, stretch: go.GraphObject.Fill,
                  defaultAlignment: go.Spot.Left, background: "lightyellow",
                  itemTemplate: propertyTemplate
                }
              ),
              $("PanelExpanderButton", "PROPERTIES",
                { row: 1, column: 1, alignment: go.Spot.TopRight, visible: false },
                new go.Binding("visible", "properties", arr => arr.length > 0)),
              // methods
              $(go.TextBlock, "Methods",
                { row: 2, font: "italic 10pt sans-serif" },
                new go.Binding("visible", "visible", v => !v).ofObject("METHODS")),
              $(go.Panel, "Vertical", { name: "METHODS" },
                new go.Binding("itemArray", "methods"),
                {
                  row: 2, margin: 3, stretch: go.GraphObject.Fill,
                  defaultAlignment: go.Spot.Left, background: "lightyellow",
                  itemTemplate: methodTemplate
                }
              ),
              $("PanelExpanderButton", "METHODS",
                { row: 2, column: 1, alignment: go.Spot.TopRight, visible: false },
                new go.Binding("visible", "methods", arr => arr.length > 0))
            )
          );
          
  function convertIsTreeLink(r) {
  return r === "generalization";
  }

  function convertFromArrow(r) {
    switch (r) {
          case "generalization": return "";
          default: return "";
        }
  }

  function convertToArrow(r) {
    switch (r) {
          case "generalization": return "Triangle";
          case "aggregation": return "StretchedDiamond";
          default: return "";
        }
  }


  //PLANTILLAS PARA LOS LINKS
  var generalTemplate = $(go.Link,
    { routing: go.Link.AvoidsNodes,
      curve: go.Link.JumpOver,
      reshapable: true,
      resegmentable: true
     },
    new go.Binding("isLayoutPositioned", "relationship", convertIsTreeLink),
    $(go.Shape),
    $(go.Shape, { scale: 1.3, fill: "white"},
      new go.Binding("fromArrow", "relationship", convertFromArrow)),
    $(go.Shape, { scale: 1.3 , fill: "white"},
      new go.Binding("toArrow", "relationship", convertToArrow)),
      $(go.TextBlock,
        {
          text: "1",
          segmentIndex: 0, segmentOffset: new go.Point(NaN, NaN),
          segmentOrientation: go.Link.OrientUpright // Orienta el TextBlock verticalmente
        },
        new go.Binding("text", "multiplicity")), // Vincula el texto con la propiedad "multiplicity"
      $(go.TextBlock,
        {
          text: "Generalization",
          segmentOffset: new go.Point(0, -10), // Ajusta la posición del TextBlock
          segmentOrientation: go.Link.OrientUpright, // Orienta el TextBlock verticalmente
          
        }
      ),
      $(go.TextBlock, "to",
      { segmentIndex: -1, segmentOffset: new go.Point(NaN, NaN),
        segmentOrientation: go.Link.OrientUpright })
  );
  
  var compositionTemplate = $(go.Link,
    // { routing: go.Link.Orthogonal },
    {
      routing: go.Link.AvoidsNodes,
      curve: go.Link.JumpOver,
      reshapable: true,
    },
    new go.Binding("isLayoutPositioned", "relationship", convertIsTreeLink),
    $(go.Shape),
    $(go.Shape, { scale: 1.3,  fill: "dark"},
      new go.Binding("fromArrow", "relationship", convertFromArrow)),
    $(go.Shape, { scale: 1.3 , fill: "dark"},
      new go.Binding("toArrow", "relationship", convertToArrow)),
);


  myDiagram.linkTemplateMap.add("generalTemplate" , generalTemplate);
  myDiagram.linkTemplateMap.add("compositionTemplate" , compositionTemplate);


   nodedata = [
        {
          key: "BankAccount",
          name: "BankAccount",
          properties: [
            { name: "owner", type: "String", visibility: "public" },
            { name: "balance", type: "Currency", visibility: "public", default: "0" }
          ],
          methods: [
            { name: "deposit", parameters: [{ name: "amount", type: "Currency" }], visibility: "public" },
            { name: "withdraw", parameters: [{ name: "amount", type: "Currency" }], visibility: "public" }
          ]
        },
        {
          key: "Person",
          name: "Person",
          properties: [
            { name: "name", type: "String", visibility: "public" },
            { name: "birth", type: "Date", visibility: "protected" }
          ],
          methods: [
            { name: "getCurrentAge", type: "int", visibility: "public" }
          ]
        },
        {
          key: "Student",
          name: "Student",
          properties: [
            { name: "classes", type: "List", visibility: "public" }
          ],
          methods: [
            { name: "attend", parameters: [{ name: "class", type: "Course" }], visibility: "private" },
            { name: "sleep", visibility: "private" }
          ]
        },
        {
          key: "Professor",
          name: "Professor",
          properties: [
            { name: "classes", type: "List", visibility: "public" }
          ],
          methods: [
            { name: "teach", parameters: [{ name: "class", type: "Course" }], visibility: "private" }
          ]
        },
        {
          key: "Course",
          name: "Course",
          properties: [
            { name: "name", type: "String", visibility: "public" },
            { name: "description", type: "String", visibility: "public" },
            { name: "professor", type: "Professor", visibility: "public" },
            { name: "location", type: "String", visibility: "public" },
            { name: "times", type: "List", visibility: "public" },
            { name: "prerequisites", type: "List", visibility: "public" },
            { name: "students", type: "List", visibility: "public" }
          ]
        }
      ];

   linkdata = [
        { from: "Course", to: "BankAccount",   relationship: "aggregation",   category:"generalTemplate"},
        { from: "Professor", to:"Student",   relationship: "generalization",category:"generalTemplate" },
        { from: "Student", to: "Professor",    relationship: "aggregation",   category:"compositionTemplate" },
        { from: "Student", to: "Course",    relationship: "",   category:"generalTemplate" },

      ];

 myDiagram.model = new go.GraphLinksModel(
        {
          copiesArrays: true,
          copiesArrayObjects: true,
          nodeDataArray: nodedata,
          linkDataArray: linkdata
        });
    
  var myPalette =$(go.Palette, "myPaletteDiv",
        { layout: $(go.GridLayout, { alignment: go.GridLayout.Location })}); 
  
//NODOS CON ESTILOS DE LA PALETA
  var titulo =  $(go.Node, "Vertical", { locationObjectName: "TB", locationSpot: go.Spot.Center },
                  $(go.Panel,
                    $(go.Shape, "Rectangle", { fill: "lightblue", width: 170, height: 70 }),
                      $(go.TextBlock,
                         { text: "Elementos", margin: 15, textAlign: "center",font: "bold 25px sans-serif" })
                    ), 
              );

  var cuadroClase =$(go.Node,"Auto",
                  { locationObjectName: "TB", 
                   locationSpot: go.Spot.Center },
                   $(go.Panel,"Horizontal",
                      $(go.Panel,"Vertical",
                          $(go.Panel,"Auto",
                          $(go.Shape,
                            { width: 100, height: 20, fill: "lightyellow"}),   
                          $(go.TextBlock,"Class")
                          ),
                        
                          $(go.Shape,
                          { width: 100, height: 27, fill: "lightyellow" } ),
                    
                          $(go.Shape,
                          { width: 100, height: 15, fill: "lightyellow" } )    
                      ),
                    $(go.Panel, "Auto",
                       { margin: 3 },
                          $("Button",
                          { margin: 1,
                            click: agregarNodo },
                            $(go.TextBlock,
                                {text: "+", font: "bold 20px sans-serif"})),
                      )
                   ),
                  
                  );
 
//AGREGAR CADA TEMPLATE DE NODO A LA PALETA                        

  myPalette.nodeTemplateMap.add("titulo", titulo);
  myPalette.nodeTemplateMap.add("cuadroClase", cuadroClase);
//      
 
//AGREGAR LOS NODOS A LA PALETA
 myPalette.model.nodeDataArray = [
  { key: 1, category: "titulo" },
  { key: 2, category: "cuadroClase" },


];

//FUNCIONES PARA EL DIAGRAMA
// function agregarNodo(key, name, properties, methods) {
//   var nuevoNodo = {
//     key: key,
//     name: name,
//     properties: properties,
//     methods: methods
//   };

//   nodedata.push(nuevoNodo);
// } 
  function agregarNodo(){
     alert("Funciona");
  }


  myDiagram.add(
    $(go.Part,
      {
        layerName: "Grid",  // this Layer is behind everything and is not interactive
        _viewPosition: new go.Point(0,0)  // some position in the viewport,
                                          // not in document coordinates
      },
      $(go.TextBlock, "Vamos que se puede", { font: "bold 54pt sans-serif", stroke: "green" })));
  
  // Whenever the Diagram.position or Diagram.scale change,
  // update the position of all simple Parts that have a _viewPosition property.
  myDiagram.addDiagramListener("ViewportBoundsChanged", e => {
    e.diagram.commit(dia => {
      // only iterates through simple Parts in the diagram, not Nodes or Links
      dia.parts.each(part => {
        // and only on those that have the "_viewPosition" property set to a Point
        if (part._viewPosition) {
          part.scale = 1/dia.scale;  // counteract any zooming
          part.position = dia.transformViewToDoc(part._viewPosition);
        }
      })
    }, null);  // set skipsUndoManager to true, to avoid recording these changes
  });
}

