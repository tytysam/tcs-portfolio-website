import React from "react";
import Layout from "./Layout.jsx";
import SocialModal from "./flex/SocialModal.jsx";

class Contact extends React.Component {
  render() {
    return (
      <Layout title="Let's Chat!" stylesheet="/css/contact.css" js="">
        <SocialModal></SocialModal>

        <div className="container fade-in">
          <div className="row justify-content-center" id="contact-text-arch">
            <div className="col-md-12 textarch-container">
              <img src="/images/Contact-Me-Textarch-Yellow.svg" />
            </div>
          </div>

          <div className="row justify-content-center" id="contact-shaka">
            <div className="col-md-6 shaka-container">
              <img src="/images/Shaka-Shake-Yellow.svg" />
            </div>
          </div>

          <div className="row justify-content-center" id="contact-banner">
            <div className="col-md-6">
              <img src="/images/Let's-Talk-Banner.svg" />
              <hr className="hr-1"></hr>
              <hr className="hr-2"></hr>
            </div>
          </div>

          {/* ICONS ROW */}
          <div
            className="row justify-content-center p-3"
            id="contact-icons-row"
          >
            <div className="col-md-3 icon-container">
              <a href="mailto: tylercsamuelson@gmail.com">
                <img src="/images/Circle-Emblem-1.svg" className="image-icon" />
              </a>
              <a
                className="subtitle-links"
                href="mailto: tylercsamuelson@gmail.com"
              >
                <h2>Email Me</h2>
              </a>
            </div>
            <div className="col-md-3 icon-container">
              <a href="/documents/TCSamuelson_2021.pdf" download>
                <img src="/images/Circle-Emblem-2.svg" className="image-icon" />
              </a>
              <a
                className="subtitle-links"
                href="/documents/TCSamuelson_2021.pdf"
                download
              >
                <h2>My Resume</h2>
              </a>
            </div>
            <div className="col-md-3 icon-container">
              <a data-toggle="modal" data-target="#social-modal">
                <img src="/images/Circle-Emblem-3.svg" className="image-icon" />
              </a>
              <a className="subtitle-links" href="#">
                <h2>Let's Connect</h2>
              </a>
            </div>
          </div>
          <div className="row justify-content-center p-1">
            <div className="col-12 icon-container">
              <p className="made-with-love">
                made with <i className="fas fa-heart"></i> by tyler samuelson
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Contact;
