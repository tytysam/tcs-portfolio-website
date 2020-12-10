const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html lang="en" dir="ltr">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>{this.props.title}</title>

          <link rel="shortcut icon" type="image/jpg" href="/images/TS.png" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.typekit.net/xmh6snq.css"
          ></link>
          <link rel="stylesheet" href="/css/layout.css" />
          <link rel="stylesheet" href={this.props.stylesheet} />
          <script
            src="https://kit.fontawesome.com/0f84f97a69.js"
            crossOrigin="anonymous"
          ></script>
        </head>
        <body>
          <div className="container" id="tippity-top">
            <nav className="navbar sticky-top navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="/">
                <img
                  src="/images/TCS_main.png"
                  width="80"
                  height="40"
                  alt="TCS Wordmark"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav header mr-auto mx-5">
                  <li className="nav-item active mx-5 p-2">
                    <a className="nav-link" href="/">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item mx-5 p-2">
                    <a className="nav-link" href="/about">
                      About
                    </a>
                  </li>
                  <li className="nav-item mx-5 p-2">
                    <a className="nav-link" href="/projects">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item mx-5 p-2">
                    <a className="nav-link" href="/contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {this.props.children}

          <div className="container mt-5 pt-5" id="footer-container">
            <nav className="navbar navbar-expand-lg navbar-light mt-3 p-3 justify-content-around">
              <a className="navbar-brand" href="/">
                <img
                  src="/images/TCS_main.png"
                  width="80"
                  height="40"
                  alt="TCS Wordmark"
                />
              </a>
              <div className="navbar-nav footer">
                <a className="nav-item nav-link active mx-5 p-2" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
                <a className="nav-item nav-link mx-5 p-2" href="/about">
                  About
                </a>
                <a className="nav-item nav-link mx-5 p-2" href="/projects">
                  Projects
                </a>
                <a className="nav-item nav-link mx-5 p-2" href="/contact">
                  Contact
                </a>
                <a className="nav-item nav-link mx-5 p-2" href="/blog">
                  Blog
                </a>
                <a className="nav-item nav-link mx-5 p-2" href="#tippity-top">
                  <i className="fas fa-arrow-up fa-sm"></i>
                </a>
              </div>
            </nav>
          </div>

          <script src={this.props.js}></script>
          {/* <--- Bootstrap Dependencies ---> */}
          <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossOrigin="anonymous"
          ></script>
        </body>
      </html>
    );
  }
}

module.exports = Layout;
