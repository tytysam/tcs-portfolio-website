const React = require("react");

class ProjectCards extends React.Component {
  render() {
    return (
      <div className="container fade-in">
        <div className="row component-container justify-content-center p-2">
          {/* ***THE BOYS: SUPE-R DESTRUCTION*** */}

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
                  <i class="fab fa-js"></i> JavaScript
                </span>
                |
                <span className="highlight">
                  <i class="fab fa-html5"></i> HTML
                </span>
                |
                <span className="highlight">
                  <i class="fab fa-css3"></i> CSS
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

          {/* ***PORTFOLIO WEBSITE*** */}

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
                |
                <span className="highlight">
                  <i className="fab fa-node-js"></i> Node.js
                </span>
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
                Flexible, reusable component-based design.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = ProjectCards;
