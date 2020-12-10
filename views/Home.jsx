const React = require("react");
const Layout = require("./Layout.jsx");

class Home extends React.Component {
  render() {
    return (
      <Layout title="Tyler Samuelson" stylesheet="/css/home.css" js="">
        <div className="container hero-container">
          <div className="row justify-content-center ">
            <div className="col-md-4">
              <h1 className="first-name">Tyler</h1>
            </div>
            <div className="col-md-8"></div>
          </div>

          <div className="row justify-content-center ">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h1 className="middle-name">Charles</h1>
            </div>
            <div className="col-md-4"></div>
          </div>

          <div className="row justify-content-center ">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <h1 className="last-name">Samuelson</h1>
            </div>
          </div>

          <div className="row justify-content-center ">
            <div className="col-12">
              <p className="subtitle">
                Creator <span className="subtitle-bars">|</span> Software
                Engineer <span className="subtitle-bars">|</span> Problem Solver
              </p>
            </div>
          </div>
        </div>
        <div id="spacer-div"></div>
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-1"></div>
            <div className="col-10 say-hi-container">
              <h1>Say hi.</h1>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Home;
