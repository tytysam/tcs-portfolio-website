const React = require("react");

class SocialModal extends React.Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="social-modal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content" id="social-modal-container">
              <div className="modal-header">
                <h5 className="modal-title" id="social-modal-title">
                  Let's Connect!
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" id="social-modal-body">
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
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = SocialModal;
