const React = require("react");
const Layout = require("./Layout.jsx");

class Show extends React.Component {
  render() {
    const post = this.props.post;
    return (
      <Layout title={`${post.name}`} stylesheet="/css/show.css" js="">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 header-content">
              <h1>{`${post.name}`}</h1>

              <img src={`${post.img}`} className="img-fluid header-image" />
            </div>
          </div>

          <div className="row justify-content-center p-2">
            <div className="col-md-8">
              <div className="blog-content">
                <p>{`${post.description}`}</p>
                <p>{`${post.lorem}`}</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Show;
