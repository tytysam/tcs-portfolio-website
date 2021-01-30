const React = require("react");
const Layout = require("./Layout.jsx");
const SayHi = require("./SayHi.jsx");

class ListenAlong extends React.Component {
  render() {
    return (
      <Layout
        title="Portfolio Website Project for Tyler C. Samuelson"
        stylesheet="/css/listen-along.css"
        js=""
      >
        <div className="container fade-in">
          <div className="row justify-content-center">
            <div className="col-6">
              <h1>Listen Along</h1>
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
                  href="https://github.com/tytysam/spotify-listen-along-nextjs"
                >
                  Git Repository
                </a>
                <a
                  className="btn btn-sm btn-primary"
                  target="_blank"
                  href="https://listen-along-spotify-next-app.herokuapp.com/"
                >
                  Live Deployment
                </a>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="summary">
                <h2>Spotify-Powered Listening Room</h2>
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
                    <i className="fab fa-react"></i> Next.js
                  </span>
                  |
                  <span className="highlight">
                    <i className="fab fa-bootstrap"></i> Bootstrap
                  </span>
                  <br />
                  <span className="highlight">
                    <i className="fab fa-node-js"></i> Node.js
                  </span>
                  |<span className="highlight">Redux</span>|
                  <span className="highlight">
                    <i class="fas fa-plug"></i> Socket.io
                  </span>
                </p>
                <p>
                  Web application built with Next.js and Spotify's Web API +
                  Connect Endpoints.
                </p>
                <p>
                  Listen Along brings people together in a listening room where
                  a shared queue can be added to and edited by anyone present in
                  the room. Vote songs up the queue and jam synchronously
                  together via Spotify—even when you can't be together.
                </p>
                <p>
                  Listening rooms present intimate opportunities to share and
                  experience music with your friends. Global pandemics make the
                  collective experience of a concert near impossible. That
                  shouldn't stop us from connecting over music.
                </p>
                <hr></hr>
                <h5>Proudest Accomplishments:</h5>
                <ul>
                  <li>
                    Web socket integration that allows multiple users to
                    pause/play, add music to the queue, and listen to the queue
                    synchronously, across devices
                  </li>
                  <li>Global state management with Redux</li>
                  <li>
                    Multi-language support for my friends not in the United
                    States (currently supports: English, French, Swedish,
                    Spanish)
                  </li>
                  <li>
                    Next.js enabled Server Side Rendering and made accessing
                    localStorage + fetch possible
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
        <SayHi />
      </Layout>
    );
  }
}

module.exports = ListenAlong;
