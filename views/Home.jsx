const React = require("react");
const Layout = require("./Layout.jsx");
const SayHi = require("./SayHi.jsx");

class Home extends React.Component {
  render() {
    return (
      <Layout
        title="TYLR SMLSN | Tyler Samuelson - Software Engineer & Digital Designer based in Denver, Colorado"
        stylesheet="/css/home.css"
        js=""
      >
        <div className="container hero-container fade-in">
          <div className="row justify-content-center fade-in top">
            <div className="col-md-4">
              <h1 className="first-name">Tyler</h1>
            </div>
            <div className="col-md-8"></div>
          </div>

          <div className="row justify-content-center fade-in middle">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h1 className="middle-name">Charles</h1>
            </div>
            <div className="col-md-4"></div>
          </div>

          <div className="row justify-content-center fade-in bottom">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <h1 className="last-name">Samuelson</h1>
            </div>
          </div>

          <div className="row justify-content-center ">
            <div className="col-md-12">
              <p className="subtitle">
                <span className="highlight">Digital Creator </span>
                <span className="subtitle-bars">|</span>{" "}
                <span className="highlight">Software Engineer</span>{" "}
                <span className="subtitle-bars">|</span>{" "}
                <span className="highlight">Problem Solver</span>
              </p>
            </div>
          </div>
        </div>
        <div id="spacer-div"></div>
        <SayHi />
      </Layout>
    );
  }
}

module.exports = Home;
