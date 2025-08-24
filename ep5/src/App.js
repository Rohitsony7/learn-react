import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
/**
 * header
 *  - Logo
 *  - Navigation
 * Body
 *  - Seach
 *  - Filter
 *  - Sorting
 *  -card-container
 *   - RestaurantCards
 *     - Restaurant img
 *     - Restaurant name
 *     - Restaurant rating
 *     - Restaurant address
 *     - Restaurant cuisine
 *  Footer
 *   - Links
 *   - Social media icons
 *
 */

//passing props to functional component
//props are used to pass data from parent component to child component
//props are read-only and cannot be modified by the child component
//props are used to pass data from parent component to child component

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<AppLayout />);
