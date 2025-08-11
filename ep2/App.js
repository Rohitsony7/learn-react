import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const childElement = React.createElement(
  "h2",
  { className: "child" },
  "React Developer"
);
const childElement2 = React.createElement(
  "h2",
  { className: "child" },
  "JavaScript Developer"
);

const element = React.createElement(
  "div",
  { id: "parent" },
  "Hello World from React",
  childElement,
  childElement2
);

root.render(element);
