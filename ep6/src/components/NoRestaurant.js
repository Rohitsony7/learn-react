import React from "react";
import "./NoRestaurant.css";

const NoRestaurant = () => (
  <div className="no-restaurant">
    <img
      src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
      alt="No Restaurants"
      className="no-restaurant-img"
    />
    <h2>No Restaurants Found</h2>
    <p>Try adjusting your search or filter to find restaurants.</p>
  </div>
);

export default NoRestaurant;
