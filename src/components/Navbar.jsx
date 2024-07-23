import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-area">
      <div className="mobile-nav">
        <Link to="/" className="logo">
          <img
            src="/assets/img/logo/logo1.png"
            className="logo-one"
            alt="Logo"
          />
          <img
            src="/assets/img/logo/logo2.png"
            className="logo-two"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="main-nav nav-bar-two">
        <div className="container-fluid">
          <nav className="container-max-2 navbar navbar-expand-md navbar-light ">
            <Link className="navbar-brand" to="/">
              <img src="/assets/img/logo/logo2.png" alt="Logo" />
            </Link>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Home
                    <i className="bx bx-plus"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        SEO Agency
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/index-2" className="nav-link">
                        AI Startup
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/index-3" className="nav-link">
                        Machine Learning
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link active">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Pages
                    <i className="bx bx-plus"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/team" className="nav-link">
                        Team
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/pricing" className="nav-link">
                        Pricing Table
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/faq" className="nav-link">
                        FAQ
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#" className="nav-link">
                        Courses
                        <i className="bx bx-plus"></i>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to="/courses" className="nav-link">
                            Courses
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/course-details" className="nav-link">
                            Course Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link to="/testimonials" className="nav-link">
                        Testimonials
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#" className="nav-link">
                        Case study
                        <i className="bx bx-plus"></i>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to="/case-study" className="nav-link">
                            Case study
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/case-details" className="nav-link">
                            Case study Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link to="/404" className="nav-link">
                        404 page
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/sign-in" className="nav-link">
                        Sign In
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/sign-up" className="nav-link">
                        Sign Up
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/terms-condition" className="nav-link">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/privacy-policy" className="nav-link">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/coming-soon" className="nav-link">
                        Coming Soon
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Services
                    <i className="bx bx-plus"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/services" className="nav-link">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/service-details" className="nav-link">
                        Service Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Blog
                    <i className="bx bx-plus"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/blog" className="nav-link">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/blog-details" className="nav-link">
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="side-nav d-flex align-items-center">
                <div className="side-item">
                  <div className="search-box">
                    <i className="flaticon-loupe"></i>
                  </div>
                </div>
                <div className="side-item">
                  <div className="user-btn">
                    <Link to="#">
                      <i className="flaticon-contact"></i>
                    </Link>
                  </div>
                </div>
                <div className="side-item">
                  <div className="nav-add-btn">
                    <Link to="#" className="nav-menu-btn">
                      Contact us
                      <i className="bx bx-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="side-nav-responsive">
        <div className="container">
          <div className="dot-menu">
            <div className="circle-inner">
              <div className="circle circle-one"></div>
              <div className="circle circle-two"></div>
              <div className="circle circle-three"></div>
            </div>
          </div>
          <div className="container">
            <div className="side-nav-inner">
              <div className="side-nav justify-content-center align-items-center">
                <div className="side-item">
                  <div className="search-box">
                    <i className="flaticon-loupe"></i>
                  </div>
                </div>
                <div className="side-item">
                  <div className="user-btn">
                    <Link to="#">
                      <i className="flaticon-contact"></i>
                    </Link>
                  </div>
                </div>
                <div className="side-item">
                  <div className="nav-add-btn">
                    <Link to="#" className="nav-menu-btn border-radius">
                      Contact us
                      <i className="bx bx-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
