const React = require("react");

class SayHi extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-1"></div>
          <div className="col-md-10 say-hi-container">
            <h1>Say hi.</h1>
            <div className="say-hi-contents row">
              <div className="inner-text-container col-md-5">
                <a className="email" href="mailto:hello@tylercsamuelson.com">
                  <h2>
                    hello@
                    <br />
                    tylercsamuelson.com
                  </h2>
                </a>
                <hr></hr>
                <p>
                  I love to design and make things. My curiosity constantly gets
                  the best of me. I'm always adventuring, creating, and
                  learning.
                </p>
                <p>Y.N.W.A.</p>
                <p>
                  Tyler Charles Samuelson
                  <br />
                  Denver, Colorado
                </p>
                <div className="social-icon-container">
                  <a href="https://github.com/tytysam" target="_blank">
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                  <a href="https://twitter.com/TyTySam" target="_blank">
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/tytysam08/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tcsamuelson/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                  <a
                    href="https://open.spotify.com/user/tytysam?si=v54G7SujT6S3EpvfeaR0lQ"
                    target="_blank"
                  >
                    <i className="fab fa-spotify fa-2x"></i>
                  </a>
                </div>
              </div>
              <div className="inner-image-container d-none d-lg-block col-5">
                <img
                  className="image-fluid"
                  src="/images/TCS-MachuPicchu.jpg"
                />
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    );
  }
}

module.exports = SayHi;
