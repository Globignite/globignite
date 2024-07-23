import React from 'react';

const AboutWidget = () => {
  return (
    <div className="about-widget-area pt-50 pb-70">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-widget-img">
              <img src="/assets/img/about/about-img4.png" alt="About Us" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-widget-content">
              <div className="section-title">
                <span className="sp-before sp-after">About Us</span>
                <h2>Grow Your Business With Our Agency</h2>
              </div>
              <h3>We have 30 years. Our strategy includes consistently evolving, to ensure we’re producing exceptional SEO for business.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna tetur adipisicing saliqua.</p>
              <div className="about-widget-list">
                <ul>
                  <li>
                    <i className='bx bx-check'></i>
                    <span>01</span>
                    <p>High standards of professionalism, integrity. Establishment of close working relationships.</p>
                  </li>
                  <li>
                    <i className='bx bx-check'></i>
                    <span>02</span>
                    <p>A different way of thinking, both inside and outside the box. We do not have to be the best.</p>
                  </li>
                  <li>
                    <i className='bx bx-check'></i>
                    <span>03</span>
                    <p>We do not have to be the best, we do have to give our best. Ability to learn. Multicultural competence.</p>
                  </li>
                </ul>
              </div>
              <div className="about-video">
                <a href="https://www.youtube.com/watch?v=07d2dXHYb94&t=6s" className="video-btn popup-btn">
                  <i className='flaticon-forward'></i>
                  <span>Play Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWidget;
