const React = require("react");

class ProjectCards extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row component-container justify-content-center p-2">
          <div className="col-md-6">
            <div className="project-container">
              <h2>The Boys: Supe-R Destruction</h2>
              <img src="/images/TheBoys-game-thumbnail.png" />
              <p>Browser-Based Javascript Game</p>
              <p className="subtitle">
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
                href="#"
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
        </div>
      </div>
    );
  }
}

module.exports = ProjectCards;
