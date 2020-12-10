const React = require("react");
const Layout = require("./Layout.jsx");
const SayHi = require("./SayHi.jsx");

class About extends React.Component {
  render() {
    return (
      <Layout title="About Me" stylesheet="/css/about.css" js="">
        <div className="container fade-in">
          <div className="row justify-content-center">
            <div className="col-6 page-header">
              <img src="/images/About-Me.svg" />
            </div>
          </div>

          <div className="row justify-content-center p-2">
            <div className="col-md-5">
              <div className="about-me">
                {/* <h2>Tyler</h2>
                <h2>[tie-lur] | noun</h2>
                <p>
                  Brainstormer driven by curiosity and a thirst for asking
                  questions. Passionate about the intersections of culture,
                  technology, and human behavior. Likes climbing trees.
                </p> */}
                {/* <img src="/images/TCS-MachuPicchu.jpg" /> */}
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <div className="self-summary">
                <h2>Hi. I'm Tyler.</h2>
                <p className="subtitle">
                  <span className="highlight">Designer</span> |
                  <span className="highlight">Adventurer</span> |
                  <span className="highlight">Problem Solver</span>
                </p>
                <p>
                  I'm a constantly-curious, solutions-driven software engineer
                  with a passion for finding elegant solutions to
                  out-of-the-ordinary problems.
                </p>
                <p>
                  My background in anthropology, digital communications, and
                  consumer psychology provides me with a unique humanistic
                  perspective and makes me a great developer on any team.
                </p>
                <hr></hr>
                <h5>Languages I Like:</h5>
                <p className="subtitle">
                  <span className="highlight">
                    <i className="fab fa-html5"></i> HTML
                  </span>
                  |
                  <span className="highlight">
                    <i className="fab fa-css3"></i> CSS
                  </span>
                  |
                  <span className="highlight">
                    <i className="fab fa-js"></i> JavaScript
                  </span>
                  <br />
                  <span className="highlight">
                    <i className="fab fa-react"></i> React
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
                <hr></hr>
                <p>
                  • Tyler Charles Samuelson
                  <br />•{" "}
                  <span className="glyphicon glyphicon-chevron-right"></span>
                  With love from: Denver, Colorado
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-4"></div>
          </div>
        </div>
        <div id="spacer-div"></div>
        <SayHi></SayHi>
      </Layout>
    );
  }
}

module.exports = About;
