import React from "react";
import Layout from "../Layout.jsx";

class Edit extends React.Component {
  render() {
    const post = this.props.post;
    return (
      <Layout title={`Edit ${post.name}`} stylesheet="/css/edit.css" js="">
        <div className="container">
          <div className="row justify-content-center p-2">
            <div className="col-md-6">
              <h1>{`Edit: ${post.name}`}</h1>
            </div>
          </div>
          <div className="row justify-content-center p-2">
            <div className="col-md-8">
              <form action={`/blog/${post._id}?_method=PUT`} method="POST">
                <div className="form-group">
                  <label>Blog Post Title:</label>
                  <input
                    type="text"
                    name="name"
                    value={post.name}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Image Source:</label>
                  <input
                    type="text"
                    name="img"
                    value={post.img}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Description:</label>
                  <input
                    type="text"
                    name="description"
                    value={post.description}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Body (#1):</label>
                  <input
                    type="text"
                    name="body1"
                    value={post.body1}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Body (#2):</label>
                  <input
                    type="text"
                    name="body2"
                    value={post.body2}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Lorem:</label>
                  <input
                    type="text"
                    name="lorem"
                    value={post.lorem}
                    className="form-control"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <div className="form-group submit-btn">
                  <input
                    type="submit"
                    name=""
                    value="Update Post"
                    className="form-control"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Edit;
