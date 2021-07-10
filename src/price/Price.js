import React from "react";
import { Link } from "react-router-dom";
import "./Price.css";

function Price() {
  return (
    <div id="package" className="pricing-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-title">
              <h6 className="subtitle subtitle-thumb">Our Packages</h6>
              <h2 className="title">Grab Our Package</h2>
              <p>
                The right banking package for you . Get the privilege of
                choosing between our many Banking Packages, and enjoy services
                that will reward you and fit your lifestyle.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-price text-center">
              <div className="pricing-details">
                <h2 className="pricing-cost">5.50%</h2>
                <h6 className="pricing-subtitle">For a month</h6>
                <h4 className="pricing-title">Basic</h4>
              </div>
              <ul className="pricing-list">
                <li>
                  <Link to={"/services"}>Miximum Deposit $10,00</Link>
                </li>
                <li>
                  <Link to={"/services"}>Minimum Deposit $10</Link>
                </li>
                <li>
                  <Link to={"/services"}>Up to 50 Users available</Link>
                </li>
                <li>
                  <Link to={"/services"}>Free Banking</Link>
                </li>
                <li>
                  <Link className="btn btn-blue" to={"/services"}>
                    Buy Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-price text-center">
              <div className="pricing-details">
                <h2 className="pricing-cost">7.50%</h2>
                <h6 className="pricing-subtitle">For a month</h6>
                <h4 className="pricing-title">Premium</h4>
              </div>
              <ul className="pricing-list">
                <li>
                  <Link to={"/services"}>Miximum Deposit $10,00</Link>
                </li>
                <li>
                  <Link to={"/services"}>Minimum Deposit $10</Link>
                </li>
                <li>
                  <Link to={"/services"}>Up to 50 Users available</Link>
                </li>
                <li>
                  <Link to={"/services"}>Free Banking</Link>
                </li>
                <li>
                  <Link className="btn btn-blue " to={"/services"}>
                    Buy Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-price text-center">
              <div className="pricing-details">
                <h2 className="pricing-cost">9.50%</h2>
                <h6 className="pricing-subtitle">For a month</h6>
                <h4 className="pricing-title">Advanced Plan</h4>
              </div>
              <ul className="pricing-list">
                <li>
                  <Link to={"/services"}>Miximum Deposit $10,00</Link>
                </li>
                <li>
                  <Link to={"/services"}>Minimum Deposit $10</Link>
                </li>
                <li>
                  <Link to={"/services"}>Up to 50 Users available</Link>
                </li>
                <li>
                  <Link to={"/services"}>Free Banking</Link>
                </li>
                <li>
                  <Link className="btn btn-blue " to={"/services"}>
                    Buy Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
