
var myDiagram = null;
var nodedata=[];
var linkdata=[]

function init(){
const $ = go.GraphObject.make;
   
myDiagram =new go.Diagram("myDiagramDiv",
            {
            // "undoManager.isEnabled": true
            // layout: (go.GraphObject.make(go.TreeLayout,
            //     { // this only lays out in trees nodes connected by "generalization" links
            //       angle: 90,
            //       path: go.TreeLayout.PathSource,  // links go from child to parent
            //       setsPortSpot: false,  // keep Spot.AllSides for link connection spot
            //       setsChildPortSpot: false,  // keep Spot.AllSides
            //       // nodes not connected by "generalization" links are laid out horizontally
            //       arrangement: go.TreeLayout.AlignmentNone,
            //       //ArrangementHorizontal
            //     }))
            layout: $(go.ForceDirectedLayout),
            });
    

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
  
        function convertVisibility(v) {
            switch (v) {
              case "public": return "+";
              case "private": return "-";
              case "protected": return "#";
              case "package": return "~";
              default: return v;
            }
        }
        
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
                  name:"multiplicidadOrigen",
                  text: "",
                  segmentIndex: 0, segmentOffset: new go.Point(NaN, NaN),
                  segmentOrientation: go.Link.OrientUpright // Orienta el TextBlock verticalmente
                },
                new go.Binding("text", "multiplicidadOrigen") // Vincula el texto con la propiedad "multiplicity"
                ),
             
                $(go.TextBlock,
                { 
                  name: "accionRelacion",
                  text: "",
                  segmentOffset: new go.Point(0, -10), // Ajusta la posición del TextBlock
                  segmentOrientation: go.Link.OrientUpright, // Orienta el TextBlock verticalmente
                  
                },
                new go.Binding("text", "accionRelacion"), // Vincula el texto con la propiedad "multiplicity"
              ),
              $(go.TextBlock,
              { 
                name: "multiplicidadDestino",
                text: "",
                segmentIndex: -1, segmentOffset: new go.Point(NaN, NaN),
                segmentOrientation: go.Link.OrientUpright },
                new go.Binding("text", "multiplicidadDestino")
                )
          );
  
  var contextMenu = $(go.Adornment,
  "ContextMenu",
  $(go.Panel, "Vertical",
    
    $(go.TextBlock, "Opciones", {
    margin: 5,
    background: "lightblue",
    stroke: "blue",
    font: "bold 15px sans-serif"
    }),

    $(go.TextBlock, "Multiplicidad", { click: function(e, obj) { editLink(obj.part.adornedPart); },
    margin: 5,
    background: "lightblue",
    font: "bold 15px sans-serif"
    }),

    $(go.TextBlock, "Eliminar", { click: function(e, obj) { deleteLink(obj.part.adornedPart);},
    margin: 5,
    background: "lightblue",
    font: "bold 15px sans-serif"
    })
   )
  );
  generalTemplate.contextMenu = contextMenu;  
  

  
var compositionTemplate = $(go.Link,
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

compositionTemplate.contextMenu = contextMenu;          

myDiagram.linkTemplateMap.add("generalTemplate" , generalTemplate);
myDiagram.linkTemplateMap.add("compositionTemplate" , compositionTemplate);

// myDiagram.model.setDataProperty(selectedLink.data, "generalization", generalizationValue);
// myDiagram.model.setDataProperty(selectedLink.data, "multiplicity", multiplicityValue);

myDiagram.nodeTemplate =$(go.Node, "Auto",
        {
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
                {})
            ) 
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

myDiagram.add($(go.Part,
        {
          layerName: "Grid",  // this Layer is behind everything and is not interactive
          _viewPosition: new go.Point(250,0)  // some position in the viewport,
        },
        $(go.TextBlock, "", { font: "bold 54pt sans-serif", stroke: "green" })));

myDiagram.addDiagramListener("ViewportBoundsChanged", e => {
            e.diagram.commit(dia => {
              dia.parts.each(part => {
                if (part._viewPosition) {
                  part.scale = 1/dia.scale;  // counteract any zooming
                  part.position = dia.transformViewToDoc(part._viewPosition);
                }
              })
            }, null);  // set skipsUndoManager to true, to avoid recording these changes
          });

myDiagram.model= new go.GraphLinksModel(
        {
          copiesArrays: true,
          copiesArrayObjects: true,
          nodeDataArray: nodedata,
          linkDataArray: linkdata
        });   
}

  function actualizarNodos(nodo){
  myDiagram.model.addNodeData(nodo);
  }

  function devolverClasses(){
  var arregloDataArray= myDiagram.model.nodeDataArray;
  return arregloDataArray;
  }

  function agregarRelacion(Relacion){
    myDiagram.model.addLinkData(Relacion);
  }

  function editLink(obj) {
    var link = obj.part; // Obtén la referencia al enlace desde el objeto 'part' pasado como argumento

  // Obtén referencias a los TextBlocks dentro del enlace utilizando los nombres asignados
  var multiplicidadOrigenTextBlock = link.findObject("multiplicidadOrigen");
  var accionRelacionTextBlock = link.findObject("accionRelacion");
  var multiplicidadDestinoTextBlock = link.findObject("multiplicidadDestino");

  // Modifica el texto de los TextBlocks utilizando las referencias obtenidas
  multiplicidadOrigenTextBlock.text="Carlos";
  accionRelacionTextBlock.text="Andres"
  multiplicidadDestinoTextBlock.text="Vargas";
  
}