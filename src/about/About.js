import React from "react";
import about from "../images/ebank.png";
import about1 from "../images/about1.png";
import about2 from "../images/about2.png";
import "./About.css";

function About() {
  return (
    <div id="about" className="about-us-area pdt-50">
      <div className="container">
        <div className="row">
          {/*Show the Image */}
          <div className="col-lg-5 col-md-8 align-self-center">
            <div className="about-us-wrap">
              <img src={about} alt="img" />
            </div>
          </div>
          {/*Show the details */}
          <div className="col-lg-6 offset-lg-1">
            <div className="about-us-details">
              <div className="section-title">
                <h6>About The E-Banking</h6>
                <h2 className="title">
                  Everything is possible. We can help you achieve your goals!
                </h2>
                <p>
                  Internet Banking is a convenient way to do banking from the
                  comfort of your home or office. Avoid the queue or delays and
                  try our simple and secure Internet Banking facility for an
                  unmatched online banking experience.
                </p>
              </div>
              <div className="media media-1">
                {/*Show Image */}
                <div className="media-left">
                  <img src={about1} alt="img" />
                </div>
                {/*Show Content */}
                <div className="media-body">
                  <p>
                    Just login today using your User ID and Password to
                    experience the Internet Banking
                  </p>
                </div>
              </div>
              <div className="media media-2">
                {/*Show Image */}
                <div className="media-left">
                  <img src={about2} alt="img" />
                </div>
                {/*Show Content */}
                <div className="media-body">
                  <p>
                    With E-Banking Check Account Statement , Do Payments using
                    Net Banking , Order Cheque Book and many more financial and
                    non-financial services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
