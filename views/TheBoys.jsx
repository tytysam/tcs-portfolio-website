const React = require("react");
const Layout = require("./Layout.jsx");
const SayHi = require("./SayHi.jsx");

class TheBoys extends React.Component {
  render() {
    return (
      <Layout
        title="The Boys: Super Destruction"
        stylesheet="/css/the-boys.css"
        js=""
      >
        <div className="container fade-in">
          <div className="row justify-content-center">
            <div className="col-8">
              <h1>The Boys: Supe-R Destruction</h1>
            </div>
          </div>

          <div className="row justify-content-center p-2">
            <div className="col-5 left-col">
              <div className="project-image-container">
                {/* <img src="/images/TheBoys-game-thumbnail.png" /> */}
              </div>
              <div className="link-btn-container">
                <a
                  className="btn btn-sm btn-primary"
                  target="_blank"
                  href="https://github.com/tytysam/TheBoys_Supe-r_Destruction"
                >
                  Git Repository
                </a>
                <a
                  className="btn btn-sm btn-primary"
                  target="_blank"
                  href="https://tytysam.github.io/TheBoys_Supe-r_Destruction/"
                >
                  Live Deployment
                </a>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-6">
              <div className="self-summary">
                <h2>Browser-Based JavaScript Game</h2>
                <p className="label">Built with:</p>
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
                <p>Browser-based game written purely in Vanilla JavaScript.</p>
                <p>
                  Built just-for-fun, inspired by games of my childhood like
                  Final Fantasy and Pokemon.
                </p>
                <p>
                  <b>The Boys: Supe-r Destruction</b> is an RPG-style game with
                  classic Final-Fantasy turn-based combat straight out of the
                  '90s —— based on the titular comic book series and television
                  show: <em>The Boys</em>. Follow a team of 8bit-ish rag-tag
                  vigilantes as they combat super-powered individuals who abuse
                  their powers. Battle to the top of Vought Tower and expose the
                  truth about Vought, The Seven, and Compound-V!
                </p>
                <hr></hr>
                <h5>Proudest Accomplishments:</h5>
                <ul>
                  <li>Turn-based combat logic in Vanilla JavaScript</li>
                  <li>Custom Pixel-Art and Aesthetic</li>
                  <li>Unique and deep character/enemy design</li>
                  <li>A game that I'm excited to keep honing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-8">
              <h1>**arrows to more projects here**</h1>
            </div>
          </div>
        </div>
        <div id="spacer-div"></div>
        <SayHi />
      </Layout>
    );
  }
}

module.exports = TheBoys;
