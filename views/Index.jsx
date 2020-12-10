const React = require("react");
const Layout = require("./Layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="View Blog Posts" stylesheet="/css/index.css" js="">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 page-header">
              <img src="/images/Blog-Entries.svg" />
            </div>
          </div>
          <div className="row justify-content-center posts-container">
            {this.props.posts.map((post) => {
              return (
                <div className="col-lg-4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={`${post.img}`}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{post.name}</h5>
                      <p className="card-text">{post.lorem}</p>
                      <a
                        href={`/blog/${post._id}`}
                        className="btn btn-primary read-more-btn"
                      >
                        Read More...
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
