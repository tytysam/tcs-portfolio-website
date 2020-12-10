const React = require("react");
const Layout = require("./Layout.jsx");
const ProjectCards = require("./ProjectCards.jsx");

class ProjectsDisplay extends React.Component {
  render() {
    return (
      <Layout title="My Work" stylesheet="/css/projects-display.css" js="">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 page-header">
              <img src="/images/My-Work.svg" />
            </div>
          </div>
        </div>
        <ProjectCards></ProjectCards>
      </Layout>
    );
  }
}

module.exports = ProjectsDisplay;
