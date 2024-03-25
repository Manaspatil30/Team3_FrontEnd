import { Button } from "@mui/material";
import React from "react";
import "../styles/slider.css"

const Item = ({ item }) => {
  return (
    <div className="slick-slide">
      <div className="image-container"> {/* Add a container for the image */}
        <img
          src={item.image}
          alt={item.name}
          className="slick-image"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div className="slick-caption">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Item;

