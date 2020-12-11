const React = require("react");

class CurrentlySection extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-12 currently-section-container">
            <h1>Currently...</h1>
            <div className="currently-section-contents row">
              <div className="col-3">
                <h2>Listening:</h2>
                <a
                  href="https://open.spotify.com/playlist/26hrnPQ8TPyvjruPmwGcJz?si=t0JOz5D2Q3yXBPkLux8A2w"
                  target="_blank"
                >
                  <img
                    src="/images/muzik-mundaez-cover-art.jpg"
                    className="image-icon img-fluid"
                  />
                </a>
                <h4>Muzik Mundaez</h4>
                <h5>My go-to playlist. A little bit of everything.</h5>
              </div>
              <div className="col-3">
                <h2>Reading:</h2>
                <img
                  src="/images/klosterman-chuck_but-what-if-were-wrong.jpg"
                  className="image-icon img-fluid"
                />
                <h4>But What If We're Wrong</h4>
                <h5>
                  <span>By: </span>Chuck Klosterman
                </h5>
              </div>
              <div className="col-3">
                <h2>Playing:</h2>
                <img
                  src="/images/star-renegades.jpg"
                  className="image-icon img-fluid"
                />
                <h4>Star Renegades</h4>
                <h5>Roguelike. Super strategic. Big fun. Much recommend.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = CurrentlySection;
