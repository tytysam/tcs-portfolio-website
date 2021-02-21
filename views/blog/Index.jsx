import React from "react";
import Layout from "../Layout.jsx";
import SayHi from "../flex/SayHi.jsx";

class Index extends React.Component {
  render() {
    return (
      <Layout title="View Blog Posts" stylesheet="/css/index.css" js="">
        <div className="container fade-in">
          <div className="row justify-content-center">
            <div className="col-md-6 page-header">
              <img src="/images/Blog-Entries.svg" />
            </div>
          </div>
          <div className="row justify-content-center posts-container">
            {this.props.posts.map((post) => {
              return (
                <div className="col-lg-4">
                  <div className="card">
                    <a href={`/blog/${post._id}`}>
                      <img
                        className="card-img-top"
                        src={`${post.img}`}
                        alt="Card image cap"
                      />
                    </a>
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
        <div id="spacer-div"></div>
        <SayHi></SayHi>
      </Layout>
    );
  }
}

module.exports = Index;
