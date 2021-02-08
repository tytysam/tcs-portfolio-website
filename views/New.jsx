const React = require("react");
const Layout = require("./Layout.jsx");

class New extends React.Component {
  render() {
    return (
      <Layout title="New Blog Post" stylesheet="/css/new.css" js="">
        <div className="container">
          <div className="row justify-content-center p-2">
            <div className="col-md-6">
              <h1>New Blog Post</h1>
            </div>
          </div>
          <div className="row justify-content-center p-2">
            <div className="col-md-8">
              <form action="/blog" method="POST">
                <div className="form-group">
                  <label>Blog Post Title:</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="ie, 5 Reasons Liverpool is the Greatest Team in Football"
                  />
                </div>
                <div className="form-group">
                  <label>Image Source:</label>
                  <input
                    type="text"
                    name="img"
                    className="form-control"
                    placeholder="ie, the URL/PATH to your image"
                  />
                </div>
                <div className="form-group">
                  <label>Description:</label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="ie, brief post description for display on Index"
                  />
                </div>
                <div className="form-group">
                  <label>Body (#1):</label>
                  <input
                    type="text"
                    name="body1"
                    className="form-control"
                    placeholder="ie, the first part of the blog post content"
                  />
                </div>
                <div className="form-group">
                  <label>Body (#2):</label>
                  <input
                    type="text"
                    name="body2"
                    className="form-control"
                    placeholder="ie, the second part of the blog post content"
                  />
                </div>
                <div className="form-group">
                  <label>Lorem:</label>
                  <input
                    type="text"
                    name="lorem"
                    className="form-control"
                    placeholder="ie, Lorem ipsum, the industry standard placeholder"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <div className="form-group submit-btn">
                  <input
                    type="submit"
                    name=""
                    value="Create Blog Post"
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

module.exports = New;
