import React from "react";

export const Card = ({ image, name, price, desc, link }) => {
  return (
    <div className="each-card">
      <img className="img" src={image} alt="product" />
      <p>{name}</p>
      <p>₹ {price}</p>
      <p>{desc}</p>
      <a href={link}>CLick here to checkout the product</a>
    </div>
  );
};
