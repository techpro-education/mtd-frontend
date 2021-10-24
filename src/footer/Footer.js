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
              <div className="col-4">
                <div className="widget">
                  <Link className="widget-title" to={"/"}>
                    <img src={logo} alt="" className="footer_logo" />
                  </Link>
                  <span className="widget-title pl-1">MTD Bank</span>
                  <ul className="widget-list">
                    <li>112, West Road , F1 456 Tram Town</li>
                    <li>Office No 2312</li>
                    <li>info@mtdbank.com</li>
                    <li>234-1234568</li>
                  </ul>
                </div>
              </div>
              <div className="col-2">
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
              <div className="col-2">
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
              <div className="col-4">
                <div className="widget">
                  <div className="widget-title">Contact Us</div>
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
            <div className="align-self-start col-8">
              <div className="text-left">
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
            <div className="align-self-center pb-3 col-4">
              <div className="copy-right text-center">
                <span>
                  <CopyrightRounded />
                </span>
                2021 , MTB Bank all right reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
