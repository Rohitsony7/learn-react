import React from "react";

const Shimmer = () => {
  // Show 8 shimmer cards as placeholder
  return (
    <div className="restaurant-container">
      {Array(20)
        .fill("")
        .map((_, idx) => (
          <div className="restaurant-card shimmer-card" key={idx}>
            <div className="shimmer-img shimmer-animate"></div>
            <div
              className="shimmer-line shimmer-animate"
              style={{ width: "70%", height: 18, margin: "12px auto 8px" }}
            ></div>
            <div
              className="shimmer-line shimmer-animate"
              style={{ width: "50%", height: 14, margin: "0 auto 6px" }}
            ></div>
            <div
              className="shimmer-line shimmer-animate"
              style={{ width: "60%", height: 14, margin: "0 auto 6px" }}
            ></div>
            <div
              className="shimmer-line shimmer-animate"
              style={{ width: "40%", height: 14, margin: "0 auto 10px" }}
            ></div>
            <div className="shimmer-dot shimmer-animate"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
