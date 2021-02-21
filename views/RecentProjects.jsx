import React from "react";

class RecentProjects extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-12 recent-projects-section-container">
            <h1 className="recent-projects-header">Recent Work.</h1>
            <div className="recent-projects-section-contents row">
              <div className="col-md-4">
                <div className="project-container">
                  <a href="/projects/listen-along">
                    <h2>Listen Along</h2>
                  </a>
                  <a href="/projects/listen-along">
                    <img
                      className="img-fluid"
                      src="/images/listen-along_project-mockup.jpg"
                    />
                  </a>
                  <p className="project-subtitle">
                    Spotify-Powered Listening Room
                  </p>
                  <p className="project-highlight-container">
                    <span className="project-highlight">
                      <i className="fab fa-js"></i>
                    </span>
                    |
                    <span className="project-highlight">
                      <i className="fab fa-react"></i>
                    </span>
                    |
                    <span className="project-highlight">
                      <i className="fab fa-bootstrap"></i>
                    </span>
                    |
                    <span className="project-highlight">
                      <i className="fab fa-node-js"></i>
                    </span>
                  </p>
                  <a
                    className="btn btn-sm btn-primary"
                    href="/projects/listen-along"
                    id="see-project-btn"
                  >
                    Project Details
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project-container">
                  <a href="/projects/the-herbery">
                    <h2>The Herbery</h2>
                  </a>
                  <a href="/projects/the-herbery">
                    <img
                      className="img-fluid"
                      src="/images/the-herbery_project-mockup.jpg"
                    />
                  </a>
                  <p className="project-subtitle">
                    Modern E-Commerce Plant Store
                  </p>
                  <p className="project-highlight-container">
                    <span className="project-highlight">
                      <i className="fab fa-js"></i>
                    </span>
                    |
                    <span className="project-highlight">
                      <i className="fab fa-react"></i>
                    </span>
                    |
                    <span className="project-highlight">
                      <i className="fab fa-cc-stripe"></i>
                    </span>
                    |
                    <span className="project-highlight">
                      <i className="fab fa-css3"></i>
                    </span>
                    |
                    <span className="project-highlight">
                      <i className="fab fa-node-js"></i>
                    </span>
                  </p>
                  <a
                    className="btn btn-sm btn-primary"
                    href="/projects/the-herbery"
                    id="see-project-btn"
                  >
                    Project Details
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project-container">
                  <a href="/projects/listen-along">
                    <h2>Listen Along</h2>
                  </a>
                  <a href="/projects/listen-along">
                    <img
                      className="img-fluid"
                      src="/images/listen-along_project-mockup.jpg"
                    />
                  </a>
                  <p className="project-subtitle">
                    Spotify-Powered Listening Room
                  </p>
                  <p className="project-highlight-container">
                    <span className="project-highlight">
                      <i className="fab fa-js"></i>
                    </span>
                    |
                    <span className="project-highlight">
                      <i className="fab fa-react"></i>
                    </span>
                    |
                    <span className="project-highlight">
                      <i className="fab fa-bootstrap"></i>
                    </span>
                    |
                    <span className="project-highlight">
                      <i className="fab fa-node-js"></i>
                    </span>
                  </p>
                  <a
                    className="btn btn-sm btn-primary"
                    href="/projects/listen-along"
                    id="see-project-btn"
                  >
                    Project Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = RecentProjects;
