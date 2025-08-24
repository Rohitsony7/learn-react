import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import NoRestaurant from "./NoRestaurant";
import { swiggyAPIEndpoint } from "../utils/constants";
import { debounce } from "../utils/utilityHelperFn";

const Body = () => {
  //State variable - super powerful variable
  // to have this we have hooks
  const [restaurantsList, setRestaurantsList] = useState([]); // React variable
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [restList, setRestList] = useState([]);

  //normal js variable
  // let restaurantsX = [...restaurants]; // Copying the original array to avoid mutation

  // Fetching data from API
  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    try {
      setLoading(true);
      console.log("Fetching data from API:", swiggyAPIEndpoint);

      const response = await fetch(swiggyAPIEndpoint);

      if (response.ok) {
        const res = await response.json();
        // .infoWithStyle.restaurants
        console.log(
          "Fetched data:",
          res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
        setRestaurantsList(
          res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
        setRestList(
          res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
      } else {
        console.error("Failed to fetch restaurants. Status:", response.status);
      }
      //;
    } catch (error) {
      alert("Failed to fetch restaurants:", error);
    } finally {
      setLoading(false);
    }
  }

  function searchRestaurant(text) {
    const filteredRestaurants = restList.filter((res) =>
      res.info.name.toLowerCase().includes(text.toLowerCase())
    );
    console.log("data", filteredRestaurants);

    setRestaurantsList(filteredRestaurants);
  }
  //will fix this later
  // Debouncing the search input to limit the number of searches
  const debounceSearch = debounce(searchRestaurant, 1000);

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            debounceSearch(e.target.value);
          }}
        />
      </div>
      <div className="filter-container">
        <button
          onClick={() => {
            setRestaurantsList(restList);
          }}
        >
          All Restaurant
        </button>
        <button
          onClick={() => {
            const FilterList = restList
              .filter((res) => {
                console.log(res.info.avgRating);

                return res.info.avgRating > 4;
              })
              .sort((a, b) => b.info.avgRating - a.info.avgRating);
            console.log(FilterList);
            setRestaurantsList(FilterList);
          }}
        >
          Top rated ✨
        </button>
      </div>
      <div className="restaurant-container">
        {/* key is reserved */}
        {loading ? (
          <Shimmer />
        ) : restaurantsList.length === 0 ? (
          <NoRestaurant />
        ) : (
          restaurantsList.map((restaurantData, index) => (
            <RestaurantCard resData={restaurantData} key={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
