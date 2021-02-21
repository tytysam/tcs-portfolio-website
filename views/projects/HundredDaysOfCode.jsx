import React from "react";
import Layout from "../Layout.jsx";
import RecentProjects from "../flex/RecentProjects.jsx";
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
                  src="/images/hundred-days-of-code_mockup.jpg"
                  className="img-fluid"
                />
              </div>
              <div className="link-btn-container">
                <a
                  className="btn btn-sm btn-primary"
                  target="_blank"
                  href="https://github.com/tytysam/100-days-of-code-log"
                >
                  Git Repository
                </a>
                <a
                  className="btn btn-sm btn-primary"
                  target="_blank"
                  href="https://tcs-100-days-of-code.netlify.app/"
                >
                  Live Deployment
                </a>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="summary">
                <h2>Daily Progress Logger Built with Gatsby</h2>
                <p className="label">Built with:</p>
                <p className="subtitle">
                  <span className="highlight">
                    <i className="fab fa-js"></i> JavaScript
                  </span>
                  |<span className="highlight">Material UI</span>|
                  <span className="highlight">
                    <i className="fab fa-css3"></i> CSS
                  </span>
                  |
                  <span className="highlight">
                    <i className="fab fa-react"></i> Gatsby
                  </span>
                </p>
                <p>
                  This Gatsby site is part of my{" "}
                  <a
                    className="external-link"
                    href="https://www.100daysofcode.com/"
                    target="_blank"
                  >
                    100 Days of Code
                  </a>{" "}
                  journey. For my first day of 100 Days of Code, I wanted to
                  kick things off by building a place for all of my daily
                  progress to live.
                </p>
                <p>
                  Thus, I built this "logger" website, with details about what I
                  have worked on each day. Each day I will post updates here to
                  keep myself motivated, accountable, and moving forward.
                </p>
                <p>
                  Lightning quick and fully responsive, this static site that I
                  built with Gatsby features full pagination + integrated social
                  shareability.
                </p>
                <hr></hr>
                <h5>Proudest Accomplishments:</h5>
                <ul>
                  <li>
                    100 Days straight! This was my first #100DaysOfCodeChallenge
                    and I absolutely loved it.
                  </li>
                  <li>
                    The community around the #100DaysOfCodeChallenge is so
                    positive and supportive, and I met some really incredibly
                    people that truly wanted to help cultivate enthusiastic,
                    ethical developers.
                  </li>
                  <li>
                    This challenge helped me reinforce my love for React while
                    giving me an excuse to spend hours-upon-hours reading
                    documentation about any and every fascinating technology or
                    library I could get my hands on.
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

module.exports = HundredDaysOfCode;
