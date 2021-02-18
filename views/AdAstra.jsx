import React from "react";
import Layout from "./Layout.jsx";
import SayHi from "./SayHi.jsx";

class PortfolioDesign extends React.Component {
  render() {
    return (
      <Layout
        title="Ad Astra Digital | Website"
        stylesheet="/css/ad-astra-digital.css"
        js=""
      >
        <div className="container fade-in">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1>Ad Astra Digital</h1>
            </div>
          </div>

          <div className="row justify-content-center p-2">
            <div className="col-lg-5 left-col">
              <div className="project-image-container">
                <img
                  src="/images/ad-astra-website-capture-mockup.jpg"
                  className="img-fluid"
                />
              </div>
              <div className="link-btn-container">
                <a
                  className="btn btn-sm btn-primary"
                  target="_blank"
                  href="https://www.adastradigital.co/"
                >
                  Live Deployment
                </a>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="summary">
                <h2>Wordpress-Based Web Development</h2>
                <p className="label">Built with:</p>
                <p className="subtitle">
                  <span className="highlight">
                    <i className="fab fa-js"></i> JavaScript
                  </span>
                  |
                  <span className="highlight">
                    <i className="fab fa-html5"></i> HTML
                  </span>
                  |
                  <span className="highlight">
                    <i className="fab fa-css3"></i> CSS
                  </span>
                  |
                  <span className="highlight">
                    <i className="fab fa-wordpress-simple"></i> WordPress
                  </span>
                </p>
                <p>
                  Simple, 5-page website designed to boost the branding and
                  drive conversions for Ad Astra Digital, a boutique advertising
                  agency in Denver, CO.
                </p>
                <p>
                  Design-focused website meant to draw the user in, educate
                  them, and drive the user to convert. Large focus on UX/UI when
                  building this WordPress-based website; client goal was to have
                  this website work in conjunction with paid media to increase
                  conversion rates, boost conversion volume, and lower cost per
                  conversion.
                </p>
                <hr></hr>
                <h5>Proudest Accomplishments:</h5>
                <ul>
                  <li>
                    Fully-custom vector illustrations, design, and animations
                  </li>
                  <li>Responsive, flexible, Wordpress-based website</li>
                  <li>
                    Funnel-focused approach to maximizing user engagement and
                    conversion
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-8"></div>
          </div>
        </div>
        <div id="spacer-div"></div>
        <SayHi />
      </Layout>
    );
  }
}

module.exports = PortfolioDesign;
