import React from "react";
import "./Home.css";
import Banner from "../banner/Banner";
import About from "../about/About";
import Product from "../product/Product";
import Price from "../price/Price";
import Silver from "../images/card/silver.jpg";
import Gold from "../images/card/gold.jpg";
import Platinum from "../images/card/platinum.jpg";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <About />
      <div id="product" className="product__row">
        <Product
          benefit="Basic package with interactive features. Enjoy up to 20% discount at select restaurants.You don’t have to pay any additional fee."
          type="Silver"
          price={300}
          image={Silver}
        />
        <Product
          benefit="Bank of States has partnered with leading travel providers to bring offers on airline tickets, hotel stays, car hire and more."
          type="Gold"
          price={500}
          image={Gold}
        />
        <Product
          benefit="Get up to 5 supplementary cards for your family members. You don’t have to pay any additional fee and can choose the spending limit on each card."
          type="Platinum"
          price={1000}
          image={Platinum}
        />
      </div>
      <Price />
    </div>
  );
};

export default Home;
