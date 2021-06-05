import React from "react";
import "./Home.css";
import Product from "../product/Product.js";
import Price from "../price/Price.js";
import About from "../about/About.js";
import Banner from "../banner/Banner.js";
function Home() {
  return (
    <div className="home">
      <Banner />
      <About />
      <div id="product">
        <Product />
      </div>
      <Price />
    </div>
  );
}

export default Home;
