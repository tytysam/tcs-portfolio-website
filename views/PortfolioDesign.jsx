const React = require("react");
const Layout = require("./Layout.jsx");
const SayHi = require("./SayHi.jsx");

class PortfolioDesign extends React.Component {
  render() {
    return (
      <Layout
        title="Portfolio Website Project for Tyler C. Samuelson"
        stylesheet="/css/portfolio-design-project.css"
        js=""
      >
        <div className="container fade-in">
          <div className="row justify-content-center">
            <div className="col-6">
              <h1>This Portfolio Website</h1>
            </div>
          </div>

          <div className="row justify-content-center p-2">
            <div className="col-lg-5 left-col">
              <div className="project-image-container">
                <img
                  src="/images/portfolio-website-capture-mockup.jpg"
                  className="img-fluid"
                />
              </div>
              <div className="link-btn-container">
                <a
                  className="btn btn-sm btn-primary"
                  target="_blank"
                  href="https://github.com/tytysam/tcs-portfolio-website"
                >
                  Git Repository
                </a>
                <a
                  className="btn btn-sm btn-primary"
                  target="_blank"
                  href="http://www.tylercsamuelson.com/"
                >
                  Live Deployment
                </a>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="summary">
                <h2>Mobile-First Web Design</h2>
                <p className="label">Built with:</p>
                <p className="subtitle">
                  <span className="highlight">
                    <i class="fab fa-html5"></i> HTML
                  </span>
                  |
                  <span className="highlight">
                    <i class="fab fa-css3"></i> CSS
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
                <p>
                  Fully-responsive CRUD application, built-from-scratch on top
                  of Bootstrap.
                </p>
                <p>
                  Connected to MongoDB, which handles the server-side rendering
                  of my blog content. This site was created with a particular
                  focus on responsiveness — my layouts will work on any device,
                  big or small. My human-centric design approach facilitates
                  intuitive UX. I love to make my pages come to life while still
                  ensuring fast load times and lag-free interactions.
                </p>
                <hr></hr>
                <h5>Proudest Accomplishments:</h5>
                <ul>
                  <li>
                    Fully-responsive site built-from-scratch on top Bootstrap
                  </li>
                  <li>Custom Design, Animations, and Vector Graphics</li>
                  <li>Full-stack CRUD application that makes use of REST</li>
                  <li>Flexible, reusable component-based design</li>
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
