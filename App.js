import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("p", { id: "para" }, "I am paragraph"),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", { id: "child h1" }, "Hello from child"),
      React.createElement("h1", { id: "child h1" }, "Hello from child"),
      React.createElement("h1", { id: "child h1" }, "Hello from child"),
    ])
  ),
  React.createElement("div", { id: "sibling" }, [
    React.createElement("h1", { id: "sibling h1" }, "Hello from sibling"),
    React.createElement("h1", { id: "sibling h1" }, "Hello from sibling"),
    React.createElement("h1", { id: "sibling h1" }, "Hello from sibling"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
console.log(parent);
// root.render(heading);
