import { Link } from "react-router-dom";
import { useState } from "react";
import logo1 from "../assets/img/logo/logo1.png"; // Assuming you might use both logos
import logo2 from "../assets/img/logo/logo2.png";
import "../assets/css/responsive.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="main-navbar">
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          <img src={logo2} alt="Globignite Logo" />
        </Link>

        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          &#9776;
        </button>

        <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/about-us" className="navbar-link">
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact-us" className="contact-button">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
