import React from 'react';

const Testimonial = () => {
  return (
    <div className="testimonial-area testimonial-area-mb ptb-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="testimonial-list">
              <div className="list-img-1">
                <img src="/assets/img/testimonial/testimonial1.png" alt="Images" />
              </div>
              <div className="list-img-2">
                <img src="/assets/img/testimonial/testimonial2.png" alt="Images" />
              </div>
              <div className="list-img-3">
                <img src="/assets/img/testimonial/testimonial3.png" alt="Images" />
              </div>
              <div className="list-img-4">
                <img src="/assets/img/testimonial/testimonial4.png" alt="Images" />
              </div>
              <div className="list-img-5">
                <img src="/assets/img/testimonial/testimonial5.png" alt="Images" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-title">
              <h2>Words From Customers</h2>
            </div>
            <div className="testimonial-slider owl-carousel owl-theme">
              <div className="testimonial-item">
                <p>I chose Zinka because of their value And incredible superior customer Service they really awesome treated me like family</p>
                <div className="content">
                  <img src="/assets/img/testimonial/testimonial-img1.png" alt="Images" />
                  <div className="content-title">
                    <h3>David McLean</h3>
                    <span>CEO & Manager</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <p>I chose Zinka because of their value And incredible superior customer Service they really awesome treated me like family</p>
                <div className="content">
                  <img src="/assets/img/testimonial/testimonial-img2.png" alt="Images" />
                  <div className="content-title">
                    <h3>Jermin Jekson</h3>
                    <span>Marketing Manager</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <p>I chose Zinka because of their value And incredible superior customer Service they really awesome treated me like family</p>
                <div className="content">
                  <img src="/assets/img/testimonial/testimonial-img3.png" alt="Images" />
                  <div className="content-title">
                    <h3>Julfiker Jeain</h3>
                    <span>CEO At Ostino</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
