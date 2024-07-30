import React from "react";
import testimonial1 from "../assets/img/testimonial/testimonial1.png";
import testimonial2 from "../assets/img/testimonial/testimonial2.png";
import testimonial3 from "../assets/img/testimonial/testimonial3.png";
import testimonial4 from "../assets/img/testimonial/testimonial4.png";
import testimonial5 from "../assets/img/testimonial/testimonial5.png";
import testimonialImg1 from "../assets/img/testimonial/testimonial-img1.png";
import testimonialImg2 from "../assets/img/testimonial/testimonial-img2.png";
import testimonialImg3 from "../assets/img/testimonial/testimonial-img3.png";

const Testimonial = () => {
  return (
    <div className="testimonial-area testimonial-area-mb ptb-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="testimonial-list">
              <div className="list-img-1">
                <img src={testimonial1} alt="Testimonial 1" />
              </div>
              <div className="list-img-2">
                <img src={testimonial2} alt="Testimonial 2" />
              </div>
              <div className="list-img-3">
                <img src={testimonial3} alt="Testimonial 3" />
              </div>
              <div className="list-img-4">
                <img src={testimonial4} alt="Testimonial 4" />
              </div>
              <div className="list-img-5">
                <img src={testimonial5} alt="Testimonial 5" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-title">
              <h2>Words From Customers</h2>
            </div>
            <div className="testimonial-slider owl-carousel owl-theme">
              <div className="testimonial-item">
                <p>
                  I chose globignite because of their value and incredible
                  superior customer service. They really treated me like family.
                </p>
                <div className="content">
                  <img src={testimonialImg1} alt="David McLean" />
                  <div className="content-title">
                    <h3>David McLean</h3>
                    <span>CEO & Manager</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <p>
                  I chose globignite because of their value and incredible
                  superior customer service. They really treated me like family.
                </p>
                <div className="content">
                  <img src={testimonialImg2} alt="Jermin Jekson" />
                  <div className="content-title">
                    <h3>Jermin Jekson</h3>
                    <span>Marketing Manager</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <p>
                  I chose globignite because of their value and incredible
                  superior customer service. They really treated me like family.
                </p>
                <div className="content">
                  <img src={testimonialImg3} alt="Julfiker Jeain" />
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
