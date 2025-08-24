import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //State variable - super powerful variable
  // to have this we have hooks
  const [restaurantsList, setRestaurantsList] = useState(restaurants); // React variable

  //normal js variable
  let restaurantsX = [...restaurants]; // Copying the original array to avoid mutation
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="filter-container">
        <button
          onClick={() => {
            setRestaurantsList(restaurants);
          }}
        >
          All Restaurant
        </button>
        <button
          onClick={() => {
            const FilterList = restaurantsList.filter((res) => res.rating > 4);
            console.log(FilterList);
            setRestaurantsList(FilterList);
          }}
        >
          Top rated ✨
        </button>
        <button
          onClick={() => {
            const sortedList = [...restaurantsList].sort(
              (a, b) => b.rating - a.rating
            );
            console.log(sortedList);
            setRestaurantsList(sortedList);
          }}
        >
          Sort
        </button>
      </div>
      <div className="restaurant-container">
        {/* key is reserved */}
        {restaurantsList.map((restaurantData, index) => (
          <RestaurantCard resData={restaurantData} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
