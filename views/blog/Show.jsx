import React from "react";
import Layout from "../Layout.jsx";
import RecentProjects from "../flex/RecentProjects.jsx";
import SayHi from "../flex/SayHi.jsx";

class Show extends React.Component {
  render() {
    const post = this.props.post;
    return (
      <Layout title={`${post.name}`} stylesheet="/css/blog/show.css" js="">
        <div className="container fade-in">
          <div className="row justify-content-center">
            <div className="col-md-6 header-content">
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
        <div id="spacer-div"></div>
        <RecentProjects />
        <div id="spacer-div"></div>
        <SayHi />
      </Layout>
    );
  }
}

module.exports = Show;
