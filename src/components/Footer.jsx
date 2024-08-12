import React from "react";
import logo1 from "../assets/img/logo/logo1.png";
import logo2 from "../assets/img/logo/logo2.png";

const Footer = () => {
  return (
    <footer className="footer-area footer-bg2 pt-100">
      <div className="container">
        <div className="footer-midal pb-70">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="footer-widget">
                <div className="footer-img">
                  <img src={logo1} className="footer-img1" alt="Logo 1" />
                  <img src={logo2} className="footer-img2" alt="Logo 2" />
                </div>
                <p>
                  Globignite is a leading software development agency committed
                  to delivering innovative and customized solutions that drive
                  business success. Our team of experts is dedicated to
                  transforming your vision into reality.
                </p>
                <div className="footer-social-icon">
                  <ul className="social-link">
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-pinterest-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-2 col-sm-5">
              <div className="footer-widget">
                <h3>Resources</h3>
                <ul className="footer-list">
                  <li>
                    <a href="#">Our Scientists</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">SaaS Solutions</a>
                  </li>
                  <li>
                    <a href="#">eCommerce</a>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget ps-5">
                <h3>Quick Links</h3>
                <ul className="footer-list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about-us">About</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h3>Address</h3>
                <ul className="footer-list-two">
                  <li>
                    <i className="flaticon-telephone"></i>
                    <a href="tel:+917587482947">+91 758-748-2947</a>
                  </li>
                  <li>
                    <i className="flaticon-email-1"></i>
                    <a href="mailto:globignite@gmail.com">
                      globignite@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="flaticon-place"></i>
                    HSR , Bengaluru , Karnataka , India
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right-area">
          <div className="row">
            <div className="col-12">
              <div className="copy-right-text text-center">
                <p>Copyright & All Rights Reserved by Globignite.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
