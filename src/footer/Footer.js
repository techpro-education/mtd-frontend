import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Footer.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
function Footer() {
  return (
    <div id="contactus">
      <footer className="footer-area">
        <div className="container">
          <div className="footer-inner">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="widget">
                  <Link className="widget-title" to={"/"}>
                    <img className="footer__logo" src={logo} alt="logo" />
                    MTD Bank
                  </Link>
                  <ul className="widget-list">
                    <li>112, West road, F1 456 Tram Town.</li>
                    <li>Office No 2312</li>
                    <li>info@mtdbank.com</li>
                    <li>234-3434567</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6 offset-lg-1">
                <div className="widget widget-links">
                  <div className="widget-title">Links</div>
                  <ul className="widget-list">
                    <li>
                      <Link to={"/services"}>FAQs</Link>
                    </li>
                    <li>
                      <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact Us</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="widget widget-about">
                  <h4 className="widget-title">About Us.</h4>
                  <ul className="widget-list">
                    <li>
                      <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"/blog"}>Blog</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact Us</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Sign in</Link>
                    </li>
                    <li>
                      <Link to={"/"}>My Account</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="widget widget-contact">
                  <h4 className="widget-title">Contact Us.</h4>
                  <p>Please connect with us through following channels</p>
                  <ul className="social-area">
                    <li>
                      <Link to={"/"}>
                        <TwitterIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <FacebookIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <LinkedInIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <PinterestIcon />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="text-lg-left text-center">
                <ul>
                  <li>
                    <Link to={"/"}>Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Sitemap</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="copy-right text-lg-right text-center">
                @ 2020, MTD Bank all right reserved
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer area end */}
    </div>
  );
}

export default Footer;
