const React = require("react");
const Layout = require("./Layout.jsx");

class Edit extends React.Component {
  render() {
    return (
      <Layout title="Edit Project" stylesheet="/css/edit.css" js="">
        <div className="container">
          <div className="row justify-content-center p-2">
            <div className="col-6">
              <h1>Edit Project</h1>
            </div>
          </div>
          <div className="row justify-content-center p-2">
            <div className="col-6">
              <form action="XXXXXXX" method="XXXXXXX">
                <div className="form-group">
                  <label>Project Name:</label>
                  <input type="text" name="name" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Image Source:</label>
                  <input type="text" name="img" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Short Description:</label>
                  <input
                    type="text"
                    name="shortDesc"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Long Description:</label>
                  <input type="text" name="longDesc" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Synopsis:</label>
                  <input type="text" name="synopsis" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Link:</label>
                  <input type="text" name="link" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Languages Used:</label>
                  <input
                    type="text"
                    name="languages"
                    className="form-control"
                  />
                </div>
                <div className="form-group submit-btn">
                  <input
                    type="submit"
                    name=""
                    value="Create Project"
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
