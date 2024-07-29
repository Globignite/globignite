import React from 'react';
import shape13 from '../../assets/img/shape/shape13.png';
import shape11 from '../../assets/img/shape/shape11.png';
import shape10 from '../../assets/img/shape/shape10.png';
import shape9 from '../../assets/img/shape/shape9.png';
import shape7 from '../../assets/img/shape/shape7.png';
import shape12 from '../../assets/img/shape/shape12.png';

const ServiceAnother = () => {
  return (
    <div className="service-another pb-70">
      <div className="container">
        <div className="section-title text-center">
          <span className="sp-before sp-after">Services</span>
          <h2>We Offer Professional Solutions For Your Business</h2>
        </div>
        <div className="row pt-45">
          <div className="col-lg-4 col-md-6">
            <div className="service-another-card">
              <a href="service-details.html"><i className="flaticon-research service-icon service-icon-bg1"></i></a>
              <h3><a href="service-details.html">Customer Analytics</a></h3>
              <p>Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet</p>
              <a href="service-details.html" className="learn-btn">
                Learn more 
                <i className='bx bx-plus'></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-another-card">
              <a href="service-details.html"><i className="flaticon-headphones service-icon service-icon-bg"></i></a>
              <h3><a href="service-details.html">Customer Support</a></h3>
              <p>Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet</p>
              <a href="service-details.html" className="learn-btn">
                Learn more 
                <i className='bx bx-plus'></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-another-card">
              <a href="service-details.html"><i className="flaticon-caution service-icon service-icon-bg2"></i></a>
              <h3><a href="service-details.html">Risk Analytics</a></h3>
              <p>Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet</p>
              <a href="service-details.html" className="learn-btn">
                Learn more 
                <i className='bx bx-plus'></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-another-card">
              <a href="service-details.html"><i className="flaticon-big-data service-icon service-icon-bg3"></i></a>
              <h3><a href="service-details.html">Big Data Analytics</a></h3>
              <p>Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet</p>
              <a href="service-details.html" className="learn-btn">
                Learn more 
                <i className='bx bx-plus'></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-another-card">
              <a href="service-details.html"><i className="flaticon-money service-icon service-icon-bg4"></i></a>
              <h3><a href="service-details.html">Business Analytics</a></h3>
              <p>Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet</p>
              <a href="service-details.html" className="learn-btn">
                Learn more 
                <i className='bx bx-plus'></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-another-card">
              <a href="service-details.html"><i className="flaticon-share service-icon service-icon-bg5"></i></a>
              <h3><a href="service-details.html">Social Media Analytics</a></h3>
              <p>Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet</p>
              <a href="service-details.html" className="learn-btn">
                Learn more 
                <i className='bx bx-plus'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="service-another-shape">
        <div className="shape-1">
          <img src={shape13} alt="Shape 13" />
        </div>
        <div className="shape-2">
          <img src={shape11} alt="Shape 11" />
        </div>
        <div className="shape-3">
          <img src={shape10} alt="Shape 10" />
        </div>
        <div className="shape-4">
          <img src={shape9} alt="Shape 9" />
        </div>
        <div className="shape-5">
          <img src={shape7} alt="Shape 7" />
        </div>
        <div className="shape-6">
          <img src={shape12} alt="Shape 12" />
        </div>
      </div>
    </div>
  );
};

export default ServiceAnother;
