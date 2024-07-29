import React from 'react';
import logo1 from '../assets/img/logo/logo1.png';
import logo2 from '../assets/img/logo/logo2.png';

const Footer = () => {
  return (
    <footer className="footer-area footer-bg2 pt-100">
      <div className="container">
        <div className="footer-midal pb-70">
          <div className="row">
            <div className="col-lg-4 col-sm-7">
              <div className="footer-widget">
                <div className="footer-img">
                  <img src={logo1} className="footer-img1" alt="Logo 1" />
                  <img src={logo2} className="footer-img2" alt="Logo 2" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna</p>
                <div className="footer-social-icon">
                  <ul className="social-link">
                    <li>
                      <a href="#" target="_blank"><i className='bx bxl-facebook'></i></a>
                    </li>
                    <li>
                      <a href="#" target="_blank"><i className='bx bxl-twitter'></i></a>
                    </li>
                    <li>
                      <a href="#" target="_blank"><i className='bx bxl-instagram'></i></a>
                    </li>
                    <li>
                      <a href="#" target="_blank"><i className='bx bxl-pinterest-alt'></i></a>
                    </li>
                    <li>
                      <a href="#" target="_blank"><i className='bx bxl-youtube'></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-5">
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
            </div>
            <div className="col-lg-3 col-sm-7">
              <div className="footer-widget ps-5">
                <h3>Company</h3>
                <ul className="footer-list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about-us">About</a>
                  </li>
                  <li>
                    <a href="/case-study">Case Studies</a>
                  </li>
                  <li>
                    <a href="/blog">Our Blog</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-5">
              <div className="footer-widget">
                <h3>Address</h3>
                <ul className="footer-list-two">
                  <li>
                    <i className='flaticon-telephone'></i>
                    <a href="tel:+4498886660000">+449 888 666 0000</a>
                  </li>
                  <li>
                    <i className='flaticon-email-1'></i>
                    <a href="mailto:hello@zinka.com">hello@zinka.com</a>
                  </li>
                  <li>
                    <i className='flaticon-place'></i>
                    855 road, brooklyn street new york 600
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right-area">
          <div className="row">
            <div className="col-lg-8">
              <div className="copy-right-text text-left">
                <p>
                  Copyright Zinka. All Rights Reserved by 
                  <a href="https://hibootstrap.com/" target="_blank">HiBootstrap</a>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="copy-right-list">
                <ul>
                  <li><a href="/privacy-policy"> Privacy Policy </a></li>
                  <li><a href="/terms-condition"> Terms & Conditions </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
