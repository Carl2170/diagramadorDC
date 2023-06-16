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

  $(go.Adornment,
    $("ContextMenu",
      $(go.Panel, "Vertical",
      $(go.TextBlock, "Editar", { click: function(e, obj) { editLink(obj.part.adornedPart); } })
      
      )
    )
  )