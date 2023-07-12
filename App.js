
const parent = React.createElement(
  "div", { id: "parent" },
  [React.createElement("div", { id: "child" },
    [React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")
    ]),
  React.createElement("div", { id: "child2" },
    [React.createElement("h1", {}, "I'm an h1 tag child2"),
    React.createElement("h2", {}, "I'm an h2 tag child2")
    ])
  ])

const root = ReactDOM.createRoot(document.getElementById("root"))

//this convert object into heading tag
root.render(parent)``