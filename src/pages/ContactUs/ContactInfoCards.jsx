import React from "react";

const ContactInfoCards = () => {
  return (
    <div className="contact-area pb-70">
      <div className="container">
        <div className="section-title text-center">
          <span className="sp-before sp-after">Contact</span>
          <h2>Get in Touch</h2>
        </div>

        <div className="row pt-45">
          <div className="col-lg-4 col-md-6">
            <div className="contact-card">
              <i className="flaticon-planet-earth"></i>
              <h3>Office Location</h3>
              <p>HSR , Bengaluru , Karnataka , India</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="contact-card">
              <i className="flaticon-email"></i>
              <h3>Contact</h3>
              <p>Email: globignite@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
            <div className="contact-card">
              <i className="flaticon-clock"></i>
              <h3>Hours of Operation</h3>
              <p>Monday - Friday: 10:00 - 19:00 IST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCards;
