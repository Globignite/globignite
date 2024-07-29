import React from "react";
import historyImg from "../../assets/img/history-img.png";

const History = () => {
  return (
    <div className="history-area pt-100 pb-70">
      <div className="container">
        <div className="section-title text-center">
          <span className="sp-before sp-after">Our History</span>
          <h2>The Facts About Our Company</h2>
        </div>
        <div className="history-list">
          <ul>
            <li>
              <i className="bx bx-check"></i>
              <div className="content">
                <h3>2010</h3>
                <span>February 20th</span>
              </div>
            </li>
            <li>
              <i className="bx bx-check"></i>
              <div className="content">
                <h3>2012</h3>
                <span>January 14th</span>
              </div>
            </li>
            <li>
              <i className="bx bx-check"></i>
              <div className="content">
                <h3>2016</h3>
                <span>March 25th</span>
              </div>
            </li>
            <li>
              <i className="bx bx-check"></i>
              <div className="content">
                <h3>2018</h3>
                <span>December 10th</span>
              </div>
            </li>
            <li>
              <i className="bx bx-check"></i>
              <div className="content">
                <h3>2019</h3>
                <span>February 01th</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="history-content">
              <h2>Great Success of the Year</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip comodo consequa dolor consectetur
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation
              </p>
              <a href="#" className="default-btn">
                Learn more
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="history-img">
              <img src={historyImg} alt="History" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
