import React from "react";
import Layout from "../Layout.jsx";
import SayHi from "../flex/SayHi.jsx";

class HundredDaysOfCode extends React.Component {
  render() {
    return (
      <Layout
        title="Tyler's 100 Days of Code"
        stylesheet="/css/hundred-days-of-code.css"
        js=""
      >
        <div className="container fade-in">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1>100 Days of Code</h1>
            </div>
          </div>

          <div className="row justify-content-center p-2">
            <div className="col-lg-5 left-col">
              <div className="project-image-container">
                <img
                  src="/images/the-herbery_project-mockup.jpg"
                  className="img-fluid"
                />
              </div>
              <div className="link-btn-container">
                <a
                  className="btn btn-sm btn-primary"
                  target="_blank"
                  href="https://github.com/tytysam/the_herbery_ecommerce_storefront"
                >
                  Git Repository
                </a>
                <a
                  className="btn btn-sm btn-primary"
                  target="_blank"
                  href="https://theherbery.netlify.app/"
                >
                  Live Deployment
                </a>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="summary">
                <h2>Static Site Generated with Gatsby</h2>
                <p className="label">Built with:</p>
                <p className="subtitle">
                  <span className="highlight">
                    <i className="fab fa-js"></i> JavaScript
                  </span>
                  |
                  <span className="highlight">
                    <i className="fab fa-react"></i> React.js
                  </span>
                  |
                  <span className="highlight">
                    <i class="fas fa-credit-card"></i> Commerce.js
                  </span>
                  <br />
                  <span className="highlight">
                    <i className="fab fa-node-js"></i> Node.js
                  </span>
                  |<span className="highlight">Material UI</span>|
                  <span className="highlight">
                    <i class="fab fa-cc-stripe"></i> Stripe
                  </span>
                </p>
                <p>
                  The Herbery is a (fake) plant store made for people who live
                  by the mantra: Plants Make People Happy.
                </p>
                <p>
                  The Herbery is a modern plant store built with React and a
                  headless CMS.
                </p>
                <p>
                  Mobile-responsive and featuring a fully-functioning
                  Stripe-powered checkout, this fake store is designed on top of
                  Material UI.
                </p>
                <hr></hr>
                <h5>Proudest Accomplishments:</h5>
                <ul>
                  <li>
                    Modern, fully-responsive frontend built with React and
                    Material UI. Highly customizable. Highly scalable. Highly
                    flexible.
                  </li>
                  <li>
                    Headless CMS integration with Commerce.js that simplifies
                    product, category, and store management for business owner
                  </li>
                  <li>
                    Stripe checkout flow that can be implemented for any scale
                    of e-commerce business
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

module.exports = HundredDaysOfCode;
