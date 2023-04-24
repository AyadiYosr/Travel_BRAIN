import React from "react";
import "./FallingStars.css";

const FallingStars = () => {
  const colors = ["#D6128B", "#12B1D6", "#33223E"]; // an array of colors
  const getRandomPosition = () => `${Math.random() * 100}%`; // a function to get a random position
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)]; // a function to get a random color

  return (
    <div className="falling-stars">
      <div className="star-container" style={{ left: getRandomPosition() }}>
        <div className="star" style={{ backgroundColor: getRandomColor() }}></div>
      </div>
      <div className="star-container" style={{ left: getRandomPosition() }}>
        <div className="star" style={{ backgroundColor: getRandomColor() }}></div>
      </div>
      <div className="star-container" style={{ left: getRandomPosition() }}>
        <div className="star" style={{ backgroundColor: getRandomColor() }}></div>
      </div>
    </div>
  );
};

export default FallingStars;
