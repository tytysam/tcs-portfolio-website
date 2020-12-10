const React = require("react");
const Layout = require("./Layout.jsx");

class NotFound extends React.Component {
  render() {
    return (
      <Layout title="Page not found..." stylesheet="/css/not-found.css" js="">
        <div className="container" id="content-container">
          <div className="row justify-content-center mt-5 p-3">
            <div className="col-6">
              <img src="/images/Well-Shoot-404-Banner.svg" class="svg-text" />
              <hr></hr>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-6">
              <p>
                You just wanted to find something cool, but that page can't be
                found. Visit my <a href="/contact">contact page</a> to get in
                touch, or head back to <a href="/">home</a>.
              </p>
            </div>
          </div>

          <div id="spacer-div"></div>
        </div>
      </Layout>
    );
  }
}

module.exports = NotFound;
