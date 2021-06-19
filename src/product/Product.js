import React from "react";
import "./Product.css";

const Product = ({ id, benefit, type, price, image }) => {
  return (
    <div className="product">
      <div className="div product__info">
        <h1>{type}</h1>
        <p>{benefit}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img className="card_img" src={image} alt="" width="25%" />
    </div>
  );
};

export default Product;
