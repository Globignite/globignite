import React from 'react';

const Banner = () => {
  return (
    <div className="banner-area-two">
      <div className="container-fluid">
        <div className="container-max-2">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="banner-content-two">
                <span>Best for You</span>
                <h1>We’re <b>Digital</b> AI Startup Support</h1>
                <p>Lorem ipsum dolor sit ametconsectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="banner-content-btn">
                  <a href="#" className="learn-btn">
                    Learn More
                    <i className='bx bx-plus'></i>
                  </a>
                  <a href="https://www.youtube.com/watch?v=07d2dXHYb94" className="play-on-btn popup-btn">
                    Play Video
                    <i className='flaticon-forward'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner-img-2">
                <img src="/assets/img/home-two/home-two-img.png" alt="Images" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-bottom-shape">
        <div className="shape-one wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
          <img src="/assets/img/home-two/home-two-shape1.png" alt="Images" />
        </div>
        <div className="shape-two wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
          <img src="/assets/img/home-two/home-two-shape2.png" alt="Images" />
        </div>
        <div className="shape-three wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
          <img src="/assets/img/home-two/home-two-shape3.png" alt="Images" />
        </div>
        <div className="banner-dots1">
          <img src="/assets/img/home-two/home-two-dots.png" alt="Images" />
        </div>
        <div className="banner-dots2">
          <img src="/assets/img/home-two/home-two-dots2.png" alt="Images" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
