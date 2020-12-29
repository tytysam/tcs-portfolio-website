const React = require("react");

class ProjectCards extends React.Component {
  render() {
    return (
      <div className="container fade-in">
        <div className="row component-container justify-content-center p-2">
          {/* *** THE BOYS: SUPE-R DESTRUCTION *** */}
          <div className="col-lg-6">
            <div className="project-container">
              <a href="/projects/the-boys">
                <h2>The Boys: Supe-R Destruction</h2>
              </a>
              <a href="/projects/the-boys">
                <img
                  className="img-fluid"
                  src="/images/TheBoys-game-thumbnail.png"
                />
              </a>
              <p className="subtitle">Browser-Based Javascript Game</p>
              <p>
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
              </p>
              <a
                className="btn btn-sm btn-primary"
                href="/projects/the-boys"
                id="see-project-btn"
              >
                See Project Details
              </a>
              <p>
                Browser-based game written purely in JavaScript. Built
                just-for-fun, inspired by games of my childhood like Final
                Fantasy and Pokemon.
              </p>
            </div>
          </div>

          {/* *** PORTFOLIO WEBSITE *** */}
          <div className="col-lg-6">
            <div className="project-container">
              <a href="/projects/portfolio-design">
                <h2>This Portfolio Website</h2>
              </a>
              <a href="/projects/portfolio-design">
                <img
                  className="img-fluid"
                  src="/images/portfolio-website-capture-mockup.jpg"
                />
              </a>
              <p className="subtitle">Mobile-First Web Design</p>
              <p>
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
                  <i className="fab fa-bootstrap"></i> Bootstrap
                </span>
                <br />
                <div className="easy-center-align-container">
                  <span className="highlight">
                    <i className="fab fa-node-js"></i> Node.js
                  </span>
                  |<span className="highlight">MongoDB</span>|
                  <span className="highlight">
                    <i className="fab fa-node-js"></i> Express.js
                  </span>
                </div>
              </p>
              <a
                className="btn btn-sm btn-primary"
                href="/projects/portfolio-design"
                id="see-project-btn"
              >
                See Project Details
              </a>
              <p>
                Fully-responsive CRUD application, built-from-scratch on top of
                Bootstrap. Custom design, animations, and vector graphics.
                Versatile, component-based design.
              </p>
            </div>
          </div>

          {/* *** AD ASTRA DIGITAL *** */}
          <div className="col-lg-6">
            <div className="project-container">
              <a href="/projects/ad-astra-digital">
                <h2>Ad Astra Digital</h2>
              </a>
              <a href="/projects/ad-astra-digital">
                <img
                  className="img-fluid"
                  src="/images/ad-astra-website-capture-mockup.jpg"
                />
              </a>
              <p className="subtitle">Wordpress-Based Web Development</p>
              <p>
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
              <a
                className="btn btn-sm btn-primary"
                href="/projects/ad-astra-digital"
                id="see-project-btn"
              >
                See Project Details
              </a>
              <p>
                Engaging, mobile-responsive website built in WordPress for a
                Digital Marketing Agency. Custom animations built with CSS.
              </p>
            </div>
          </div>

          {/* *** REACT WEATHER APP *** */}

          {/* *** LISTEN ALONG APP *** */}

          {/* <span className="highlight">
            <i className="fas fa-plug"></i> Web Sockets
          </span> */}
        </div>
      </div>
    );
  }
}

module.exports = ProjectCards;
