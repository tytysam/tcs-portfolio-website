import React from "react";

class ProjectCards extends React.Component {
  render() {
    return (
      <div className="container fade-in">
        <div className="row component-container justify-content-center p-lg-2">
          {/* *** LISTEN ALONG APP *** */}
          <div className="col-lg-6 p-md-4">
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
              <p className="subtitle">Spotify-Powered Listening Room</p>
              <p className="highlight-container">
                <span className="highlight">
                  <i className="fab fa-js"></i> JavaScript
                </span>
                |
                <span className="highlight">
                  <i className="fab fa-react"></i> Next.js
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
                  |<span className="highlight">Redux</span>|
                  <span className="highlight">
                    <i class="fas fa-plug"></i> Socket.io
                  </span>
                </div>
              </p>
              <a
                className="btn btn-sm btn-primary"
                href="/projects/listen-along"
                id="see-project-btn"
              >
                See Project Details
              </a>
              <p>
                Next.js project with Spotify's Web API where a shared queue can
                be added to and edited by anyone present in the room. Vote songs
                up the queue and jam synchronously together via Spotify—even
                when you can't be together.
              </p>
            </div>
          </div>

          {/* *** THE HERBERY E-COMMERCE STORE *** */}
          <div className="col-lg-6 p-md-4">
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
              <p className="subtitle">Modern E-Commerce Plant Store</p>
              <p>
                <span className="highlight">
                  <i className="fab fa-js"></i> JavaScript
                </span>
                |
                <span className="highlight">
                  <i className="fab fa-react"></i> React.js
                </span>
                |
                <span className="highlight">
                  <i className="fas fa-credit-card"></i> Commerce.js
                </span>
                <br />
                <div className="easy-center-align-container">
                  <span className="highlight">
                    <i className="fab fa-node-js"></i> Node.js
                  </span>
                  |<span className="highlight">Material UI</span>|
                  <span className="highlight">
                    <i className="fab fa-cc-stripe"></i> Stripe
                  </span>
                </div>
              </p>
              <a
                className="btn btn-sm btn-primary"
                href="/projects/the-herbery"
                id="see-project-btn"
              >
                See Project Details
              </a>
              <p>
                The Herbery is a modern plant store built with React and a
                headless CMS. Mobile-responsive and featuring a
                fully-functioning Stripe-powered checkout, this fake store is
                designed on top of Material UI.
              </p>
            </div>
          </div>

          {/* *** REACT WEATHER APP *** */}
          <div className="col-lg-6 p-md-4">
            <div className="project-container">
              <a href="/projects/react-weather-app">
                <h2>React Weather Web App</h2>
              </a>
              <a href="/projects/react-weather-app">
                <img
                  className="img-fluid"
                  src="/images/react-weather-app_mockup-light.jpg"
                />
              </a>
              <p className="subtitle">API-Driven Development</p>
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
                  <i className="fab fa-bootstrap"></i> Bootstrap
                </span>
                <br />
                <div className="easy-center-align-container">
                  <span className="highlight">
                    <i className="fab fa-react"></i> React.js
                  </span>
                </div>
              </p>
              <a
                className="btn btn-sm btn-primary"
                href="/projects/react-weather-app"
                id="see-project-btn"
              >
                See Project Details
              </a>
              <p>
                Dynamic weather app built with OpenWeather's API and React.
                Leverages useState and conditional rendering in order to
                dynamically display custom graphics and colors alongside the
                weather data output.
              </p>
            </div>
          </div>

          {/* *** AD ASTRA DIGITAL *** */}
          <div className="col-lg-6 p-md-4">
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
                <br />
                <div className="easy-center-align-container">
                  <span className="highlight">
                    <i className="fab fa-wordpress-simple"></i> WordPress
                  </span>
                </div>
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

          {/* *** THE BOYS: SUPE-R DESTRUCTION *** */}
          <div className="col-lg-6 p-md-4">
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
          <div className="col-lg-6 p-md-4">
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
        </div>
      </div>
    );
  }
}

module.exports = ProjectCards;
