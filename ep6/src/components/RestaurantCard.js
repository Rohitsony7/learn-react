import { CLOUDINARY_BASE_URL } from "../utils/constants";
import "./RestaurantCard.css";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    areaName,
    aggregatedDiscountInfoV3,
  } = resData.info;

  return (
    <div className="restaurant-card">
      {/* Image with Offer Badge */}
      <div className="restaurant-img-container">
        <img
          className="restaurant-img"
          src={CLOUDINARY_BASE_URL + cloudinaryImageId}
          alt={name}
        />
        {aggregatedDiscountInfoV3?.header && (
          <div className="restaurant-offer">
            {aggregatedDiscountInfoV3.header}{" "}
            {aggregatedDiscountInfoV3.subHeader || ""}
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="restaurant-info">
        <h3 className="restaurant-name">{name}</h3>

        <div className="restaurant-details">
          <span className="rating">{avgRating}</span>
          <span className="dot">•</span>
          <span className="delivery-time">{sla?.slaString}</span>
        </div>

        <p className="restaurant-cuisine">{cuisines.join(", ")}</p>
        <p className="restaurant-location">{areaName}</p>
        <p className="restaurant-cost">{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
