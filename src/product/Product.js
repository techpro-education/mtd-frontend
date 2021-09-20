import React from "react";
import "./Product.css";

const Product = ({ benefit, type, price, image }) => {
  return (
    <div className="product">
      <div className="product__info">
        <h1>{type}</h1>
        <p>{benefit}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img className="card__img" src={image} alt=""></img>
    </div>
  );
};

export default Product;
