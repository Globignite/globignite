import React from 'react';
import serviceIcon7 from '../../assets/img/service/service-icon7.png';
import serviceIcon8 from '../../assets/img/service/service-icon8.png';
import serviceIcon9 from '../../assets/img/service/service-icon9.png';
import shape9 from '../../assets/img/shape/shape9.png';
import shape10 from '../../assets/img/shape/shape10.png';
import shape11 from '../../assets/img/shape/shape11.png';
import shape7 from '../../assets/img/shape/shape7.png';
import shape12 from '../../assets/img/shape/shape12.png';

const ServiceArea = () => {
  return (
    <div className="service-area-two">
      <div className="container">
        <div className="section-title text-center">
          <span className="sp-before sp-after">Services</span>
          <h2>Our Implementation Mission is to Serve You Best</h2>
        </div>
        <div className="row pt-45">
          <div className="col-lg-4 col-md-6">
            <div className="service-item">
              <h3><a href="service-details.html">Consumer Analytics</a></h3>
              <div className="service-item-img">
                <a href="service-details.html">
                  <img src={serviceIcon7} alt="Consumer Analytics" />
                </a>
                <div className="img-circle"></div>
              </div>
              <p>Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet</p>
              <a href="service-details.html" className="learn-btn">
                Learn more 
                <i className='bx bx-plus'></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item">
              <h3><a href="service-details.html">Marketing Analytics</a></h3>
              <div className="service-item-img">
                <a href="service-details.html">
                  <img src={serviceIcon8} alt="Marketing Analytics" />
                </a>
                <div className="img-circle"></div>
              </div>
              <p>Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet</p>
              <a href="service-details.html" className="learn-btn">
                Learn more 
                <i className='bx bx-plus'></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
            <div className="service-item">
              <h3><a href="service-details.html">Sales Analytics</a></h3>
              <div className="service-item-img">
                <a href="service-details.html">
                  <img src={serviceIcon9} alt="Sales Analytics" />
                </a>
                <div className="img-circle"></div>
              </div>
              <p>Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet</p>
              <a href="service-details.html" className="learn-btn">
                Learn more 
                <i className='bx bx-plus'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="service-two-shape">
        <div className="shape-in1">
          <img src={shape9} alt="Shape 9" />
        </div>
        <div className="shape-in2">
          <img src={shape10} alt="Shape 10" />
        </div>
        <div className="shape-in3">
          <img src={shape11} alt="Shape 11" />
        </div>
        <div className="shape-in4">
          <img src={shape7} alt="Shape 7" />
        </div>
        <div className="shape-in5">
          <img src={shape12} alt="Shape 12" />
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
