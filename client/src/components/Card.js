import React from "react";
import "../styles/Card.css";

export const Card = ({ image, name, price, link, company, index }) => {
  let top = 515.66 + index * 500;
  let topText = top.toString() + "px";
  console.log(topText);
  return (
    <div style={{ top: topText }} className={`each-card-${company}`}>
      <img className={`img-${company}`} src={image} alt="product" />
      <div className={`name-${company}`}>{name}</div>
      <p className={`price-${company}`}>₹ {price}</p>

      <a className={`link-container-${company}`} href={link}>
        Checkout the product
      </a>
    </div>
  );
};
