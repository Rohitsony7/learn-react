import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";

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
export const restaurants = [
  {
    id: 9,
    restaurantName: "Madaras Cafe",
    rating: 4.4,
    address: "Near AI Street, Chennai",
    cuisine: "South Indian",
    isVeg: true,
    img: "https://sukhis.com/app/uploads/2020/01/Dosa.jpg",
  },
  {
    id: 1,
    restaurantName: "Spice Villa",
    rating: 4.5,
    address: "MG Road, Bangalore",
    cuisine: "Indian",
    isVeg: true,
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80",
  },
  {
    id: 2,
    restaurantName: "Pasta Palace",
    rating: 4.3,
    address: "Connaught Place, Delhi",
    cuisine: "Italian",
    isVeg: false,
    img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    restaurantName: "Sushi Zen",
    rating: 4.8,
    address: "Bandra, Mumbai",
    cuisine: "Japanese",
    isVeg: false,
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
  },
  {
    id: 4,
    restaurantName: "Green Bowl",
    rating: 4.2,
    address: "Koregaon Park, Pune",
    cuisine: "Salads & Healthy",
    isVeg: true,
    img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&q=80",
  },
  {
    id: 5,
    restaurantName: "Burger Hub",
    rating: 4.6,
    address: "Park Street, Kolkata",
    cuisine: "American",
    isVeg: false,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
  },
  {
    id: 6,
    restaurantName: "Uduppi Cafe",
    rating: 4.4,
    address: "Near AI Street, Chennai",
    cuisine: "South Indian",
    isVeg: true,
    img: "https://sukhis.com/app/uploads/2020/01/Dosa.jpg",
  },
  {
    id: 7,
    restaurantName: "Tandoor Tales",
    rating: 4.7,
    address: "Banjara Hills, Hyderabad",
    cuisine: "North Indian",
    isVeg: false,
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",
  },
  {
    id: 8,
    restaurantName: "Falafel Factory",
    rating: 4.3,
    address: "Camp Area, Pune",
    cuisine: "Middle Eastern",
    isVeg: true,
    img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=80", // Example URL: please replace with a valid falafel image URL from Unsplash
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1600w/canva-yellow-and-brown-kitchen-food-logo-JrzZUwc_CLQ.jpg"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//passing props to functional component
//props are used to pass data from parent component to child component
//props are read-only and cannot be modified by the child component
//props are used to pass data from parent component to child component
const RestaurantCard = (props) => {
  const { resData } = props;

  const { restaurantName, rating, address, cuisine, isVeg, img } =
    props?.resData;
  return (
    <div className="restaurant-card">
      <img src={img} alt="Restaurant" />
      <h3>{restaurantName || "South Cafe"}</h3>
      <p>Rating: {rating || "4.5"}</p>
      <p>Address: {address || "123 Main St, City"} </p>
      <p>Cuisine: {cuisine || "South Indian"} </p>
      <div className={`food-type ${isVeg ? "veg" : "non-veg"}`}>
        <span></span>
        {isVeg ? "Veg" : "Non-Veg"}
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="filter-container">
        <button>Filter</button>
        <button>Sort</button>
      </div>
      <div className="restaurant-container">
        {/* key is reserved */}
        {restaurants.map((restaurantData, index) => (
          <RestaurantCard resData={restaurantData} key={index} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2025 Foodie Inc. All rights reserved.</p>
      <div className="social-media">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<AppLayout />);
