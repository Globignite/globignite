 
import { Link } from "react-router-dom";
import logo1 from "../assets/img/logo/logo1.png";
import logo2 from "../assets/img/logo/logo2.png";
import "../assets/css/responsive.css";

const Navbar = () => {
  const currentPath = window.location.pathname;

  return (
    <div className="navbar-area">
      <div className="mobile-nav">
        <Link to="/" className="logo">
          <img src={logo1} className="logo-one" alt="Logo" />
          <img src={logo2} className="logo-two" alt="Logo" />
        </Link>
      </div>
      <div className="main-nav nav-bar-two">
        <div className="container-fluid">
          <nav className="container-max-2 navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" to="/">
              <img src={logo2} alt="Logo" />
            </Link>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <div className="side-nav d-flex align-items-center">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className={`nav-link ${
                        currentPath === "/" ? "active" : ""
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/about-us"
                      className={`nav-link ${
                        currentPath === "/about-us" ? "active" : ""
                      }`}
                    >
                      About
                    </Link>
                  </li>
                </ul>
                <div className="side-item">
                  <div className="nav-add-btn">
                    <Link to="/contact-us" className="nav-menu-btn">
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
