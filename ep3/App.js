import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome to React 🏄‍♂️"
);

// JSX syntax, Looks like HTML
//React Element is converted to JSX
// JSX is a syntax extension for JavaScript that looks similar to HTML
// JSX allows us to write HTML-like syntax in our JavaScript code, which is then transformed
// into React elements by a compiler like Babel.
// JSX is not valid JavaScript, but it is transformed into valid JavaScript by tools like Babel.
// JSX makes it easier to create and visualize the structure of React components.
// JSX is not required to use React, but it is a common way to write React components
// JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.
// It is not valid JavaScript, but it is transformed into valid JavaScript by tools like Babel.

const label = <span>This is label</span>;
const jsxHeading = (
  <h3 id="heading" className="head" style={{ color: "green" }}>
    Welcome to React from jsx 🏄‍♂️
    {label}
    {/*  //it sanitise the input automatically and prevents XSS attacks */}
  </h3>
);

const Title = () => {
  return <h1 id="title">This is a title from a functional component</h1>;
};

// JSX in multi-line format use ()
console.log(heading, jsxHeading);

//React Component
//Class based component - old way
//Functional component - new way, recommended way

// Always in CapitalCase

// Functional components are simpler and easier to read and maintain.
// They are just JavaScript functions that return JSX.
// Functional components can accept props and return JSX.

const number = 10;
const HeadingComponent = () => {
  return (
    <div className="container">
      {/* //use {} to insert JavaScript expressions into JSX */}
      <h2> {number + 12}</h2>
      {jsxHeading}
      <Title />
      This is calling fn component {Title()}
      <h1 className="Heading" id="head">
        Coming from a functional component🎉
      </h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<HeadingComponent />);
