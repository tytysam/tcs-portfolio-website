const React = require("react");
const Layout = require("./Layout.jsx");
const ContactModals = require("./Contact-Modals");

class Contact extends React.Component {
  render() {
    return (
      <Layout title="Let's Chat!" stylesheet="/css/contact.css" js="">
        <ContactModals></ContactModals>

        <div className="container">
          <div
            className="row justify-content-center p-2"
            id="contact-text-arch"
          >
            <div className="col-md-4">
              <img src="/images/Contact-Me-Textarch-Yellow.svg" />
            </div>
          </div>

          <div className="row justify-content-center" id="contact-shaka">
            <div className="col-md-2">
              <img src="/images/Shaka-Shake-Yellow.svg" />
            </div>
          </div>

          <div className="row justify-content-center" id="contact-banner">
            <div className="col-md-6">
              <img src="/images/Let's-Talk-Banner.svg" />
              <hr></hr>
              <hr></hr>
            </div>
          </div>

          {/* ICONS ROW */}
          <div
            className="row justify-content-center p-3"
            id="contact-icons-row"
          >
            <div className="col-md-3 icon-container">
              <a data-toggle="modal" data-target="#email-me">
                <img src="/images/Circle-Emblem-1.svg" className="image-icon" />
              </a>
              <a className="subtitle-links" href="#">
                <h2>Email Me</h2>
              </a>
            </div>
            <div className="col-md-3 icon-container">
              <a href="#">
                <img src="/images/Circle-Emblem-2.svg" className="image-icon" />
              </a>
              <a className="subtitle-links" href="#">
                <h2>My Resume</h2>
              </a>
            </div>
            <div className="col-md-3 icon-container">
              <a href="#">
                <img src="/images/Circle-Emblem-3.svg" className="image-icon" />
              </a>
              <a className="subtitle-links" href="#">
                <h2>My Social</h2>
              </a>
            </div>
          </div>
          <div className="row justify-content-center p-1">
            <div className="col-12 icon-container">
              <p className="made-with-love">
                made with love by: tyler samuelson
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Contact;
