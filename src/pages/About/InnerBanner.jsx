import React from 'react';

const InnerBanner = () => {
  return (
    <div className="inner-banner">
      <div className="container">
        <div className="inner-title text-center">
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <i className='bx bx-chevron-right'></i>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      <div className="inner-banner-shape">
        <div className="shape-one">
          <img src="/assets/img/inner-banner/banner-shape1.png" alt="Images" />
        </div>
        <div className="shape-two">
          <img src="/assets/img/inner-banner/banner-shape2.png" alt="Images" />
        </div>
        <div className="shape-three">
          <img src="/assets/img/inner-banner/banner-shape3.png" alt="Images" />
        </div>
        <div className="inner-banner-dots">
          <img src="/assets/img/shape/dots-shape.png" alt="Images" />
        </div>
      </div>
    </div>
  );
};

export default InnerBanner;
