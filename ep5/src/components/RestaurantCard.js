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

export default RestaurantCard;
