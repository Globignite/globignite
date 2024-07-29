import React from 'react';
import missionImg from '../../assets/img/mission-img.png';
import shape13 from '../../assets/img/shape/shape13.png';
import shape11 from '../../assets/img/shape/shape11.png';
import shape12 from '../../assets/img/shape/shape12.png';
import shape9 from '../../assets/img/shape/shape9.png';

const MissionArea = () => {
  return (
    <div className="mission-area pt-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="mission-content">
              <div className="section-title">
                <span className="sp-before sp-after">Mission</span>
                <h2 className="h2-color2">We Serve As Possible That You Expected</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna tetur adipisicing saliqua. 
              </p>
              <div className="row">
                <div className="col-lg-4 col-sm-6 pr-0">
                  <div className="mission-list">
                    <i className='bx bx-check'></i>
                    <span>01</span>
                    <p>Retail Solutions</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 pr-0">
                  <div className="mission-list">
                    <i className='bx bx-check'></i>
                    <span>02</span>
                    <p>Expert Perspective</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 pr-0">
                  <div className="mission-list">
                    <i className='bx bx-check'></i>
                    <span>03</span>
                    <p>User Perspective</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 pr-0">
                  <div className="mission-list">
                    <i className='bx bx-check'></i>
                    <span>04</span>
                    <p>Global Experience</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 pr-0">
                  <div className="mission-list">
                    <i className='bx bx-check'></i>
                    <span>05</span>
                    <p>Value for Results</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 pr-0">
                  <div className="mission-list">
                    <i className='bx bx-check'></i>
                    <span>06</span>
                    <p>Business Vision</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mission-img">
              <img src={missionImg} alt="Mission" />
            </div>
          </div>
        </div>
      </div>
      <div className="mission-shape">
        <div className="shape1">
          <img src={shape13} alt="Shape 13" />
        </div>
        <div className="shape2">
          <img src={shape11} alt="Shape 11" />
        </div>
        <div className="shape3">
          <img src={shape12} alt="Shape 12" />
        </div>
        <div className="shape4">
          <img src={shape9} alt="Shape 9" />
        </div>
      </div>
    </div>
  );
};

export default MissionArea;
