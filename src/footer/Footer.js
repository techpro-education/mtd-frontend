import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Footer.css";
import {
  Twitter,
  Facebook,
  LinkedIn,
  Pinterest,
  CopyrightRounded,
} from "@material-ui/icons";
const Footer = () => {
  return (
    <div id="contactus">
      <footer className="footer-area">
        <div className="container">
          <div className="footer-inner">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="widget">
                  <Link className="widget-title" to={"/"}>
                    <img src={logo} alt="" className="footer__logo" />
                  </Link>
                  <span className="widget-title pl-1"> MTD Bank</span>
                  <ul className="widget-list">
                    <li>112, West road, F1 456 Tram Town.</li>
                    <li>Office No 2312</li>
                    <li>info@mtdbank.com</li>
                    <li>234-3434567</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6 offset-lg-1">
                <div className="widget">
                  <div className="widget-title">Links</div>
                  <ul className="widget-list">
                    <li>
                      <Link to={"/"}>FAQ</Link>
                    </li>
                    <li>
                      <Link to={"/"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Contact Us</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="widget">
                  <div className="widget-title">About Us</div>
                  <ul className="widget-list">
                    <li>
                      <Link to={"/"}>CEO Message</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Blog</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Group</Link>
                    </li>
                    <li>
                      <Link to={"/register"}>Register</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="widget">
                  <div className="widget-title"> Contact Us</div>
                  <p>Please connect with us through following channels</p>
                  <ul className="social-area">
                    <li>
                      <Link to={"/"}>
                        <Twitter />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Facebook />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <LinkedIn />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Pinterest />
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
            <div className="col-12 align-self-center">
              <div className="text-center">
                <ul>
                  <li>
                    <Link to={"/"}>Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Site Map</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 align-self-center pb-3">
        <div className="copy-right text-center">
          <span>
            <CopyrightRounded />
          </span>
          2021, MTD Bank all right reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
