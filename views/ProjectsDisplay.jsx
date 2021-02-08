const React = require("react");
const Layout = require("./Layout.jsx");
const ProjectCards = require("./ProjectCards.jsx");
const SayHi = require("./SayHi.jsx");

class ProjectsDisplay extends React.Component {
  render() {
    return (
      <Layout title="My Work" stylesheet="/css/projects-display.css" js="">
        <div className="container fade-in">
          <div className="row justify-content-center">
            <div className="col-md-6 page-header">
              <img src="/images/My-Work.svg" />
            </div>
          </div>
        </div>
        <ProjectCards />
        <div id="spacer-div"></div>
        <SayHi />
      </Layout>
    );
  }
}

module.exports = ProjectsDisplay;
