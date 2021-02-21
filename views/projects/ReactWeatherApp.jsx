import React from "react";
import Layout from "../Layout.jsx";
import RecentProjects from "../flex/RecentProjects.jsx";
import SayHi from "../flex/SayHi.jsx";

class ReactWeatherApp extends React.Component {
  render() {
    return (
      <Layout
        title="OpenWeather-Powered Weather App"
        stylesheet="/css/react-weather-app.css"
        js=""
      >
        <div className="container fade-in">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1 className="project-header">React Weather Web App</h1>
            </div>
          </div>

          <div className="row justify-content-center p-2">
            <div className="col-lg-5 left-col">
              <div className="project-image-container">
                <img
                  src="/images/react-weather-app_mockup-light.jpg"
                  className="img-fluid"
                />
              </div>
              <div className="link-btn-container">
                <a
                  className="btn btn-sm btn-primary"
                  target="_blank"
                  href="https://github.com/tytysam/react-weather-app"
                >
                  Git Repository
                </a>
                <a
                  className="btn btn-sm btn-primary"
                  target="_blank"
                  href="https://tcs-react-weather-app.herokuapp.com/"
                >
                  Live Deployment
                </a>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="summary">
                <h2>API-Driven Development</h2>
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
                    <i className="fab fa-react"></i> React.js
                  </span>
                  |
                  <span className="highlight">
                    <i className="fab fa-bootstrap"></i> Bootstrap
                  </span>
                </p>
                <p>Web app built with OpenWeather's API.</p>
                <p>
                  Created with React, this web app serves as an up-to-the-moment
                  weather display for any ZIP in the contiguous US. Search your
                  desired Zipcode and immediately receive a response from
                  OpenWeather's API and display the current date, time, City
                  searched, custom vector graphics displaying the weather
                  conditions, current temperature in Fahrenheit, a description
                  of the weather conditions, and the projected high and low
                  temperatures for the day.
                </p>
                <p>
                  Leverages useState and dynamic rendering in order to change
                  the background gradient and vector graphics depending on the
                  time of day, location, and current weather conditions.
                </p>
                <hr></hr>
                <h5>Proudest Accomplishments:</h5>
                <ul>
                  <li>
                    Fully-responsive app custom-developed on top of Bootstrap
                  </li>
                  <li>Custom Design and Vector Graphics</li>
                  <li>
                    Dynamic rendering that displays different background
                    gradients and vector graphics depending on the time of day,
                    location, and current weather conditions
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
        <RecentProjects />
        <div id="spacer-div"></div>
        <SayHi />
      </Layout>
    );
  }
}

module.exports = ReactWeatherApp;
