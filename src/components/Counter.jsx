import React from 'react';

const Counter = () => {
  return (
    <div className="counter-area-two pt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-md-3">
            <div className="counter-card">
              <h3>10 Years</h3>
              <p>GLORIOUS YEARS</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-3">
            <div className="counter-card">
              <h3>100%</h3>
              <p>SATISFACTION RATE</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-3">
            <div className="counter-card">
              <h3>70+</h3>
              <p>TEAM MEMBERS</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-3">
            <div className="counter-card">
              <h3>25+</h3>
              <p>SENIOR SCIENTIST</p>
            </div>
          </div>
        </div>
      </div>
      <div className="counter-shape-top">
        <img src="/assets/img/counter/counter-shape.png" alt="Images" />
      </div>
    </div>
  );
};

export default Counter;
